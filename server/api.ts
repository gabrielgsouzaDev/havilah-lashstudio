import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { getAssistantResponse } from '../src/services/chatAssistant.ts';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const HAVILAH_SYSTEM_INSTRUCTION = `Você é o atendimento digital do Havilah Lash Studio, estúdio especializado em extensão de cílios fundado por Rebecca Havilah na Vila Caiçara, Praia Grande - SP.

Diretrizes de comunicação:
- Tom profissional, atencioso, acolhedor e seguro.
- Não utilize emojis nas respostas. Mantenha a comunicação limpa, polida e direta.
- Não soe como vendedor de cursos, infoprodutos ou coach. Você é uma especialista em serviços de estética e extensão de cílios falando com uma cliente real.
- Foco em saúde ocular, personalização do olhar, técnicas adequadas, higiene e conforto.

Tabela de procedimentos do estúdio:
1. Volume Havilah: Assinatura do estúdio. Equilíbrio entre delicadeza e preenchimento harmônico (Aplicação R$ 170 / Manutenção R$ 100).
2. Fox Eyes: Alongamento com foco no canto externo, criando efeito lifting suave (Aplicação R$ 190 / Manutenção R$ 100).
3. Efeito Princesa: Elevação e abertura no centro do olhar (Aplicação R$ 150 / Manutenção R$ 90).
4. Volume Premium: Maior densidade com leques cheios e marcantes (Aplicação R$ 170 / Manutenção R$ 90).
5. Volume Divino: Leques fechados com acabamento alinhado (Aplicação R$ 140 / Manutenção R$ 90).
6. Natural Soft: Efeito suave e discreto para o dia a dia (Aplicação R$ 180 / Manutenção R$ 90).
7. Capping: Preenchimento intermediário entre clássico e volume (Aplicação R$ 190).
8. Combo Glamour: Aplicação do Volume Havilah + Kit de Cuidados (Shampoo e pincel) + 1ª Manutenção inclusa (R$ 230).

Serviços adicionais:
- Remoção de cílios de outro profissional: R$ 40
- Remoção de nossa aplicação: R$ 30
- Higienização profunda: R$ 20

Orientações de cuidados:
- Primeiras 24h: Evitar vapor excessivo, banhos muito quentes e água direta.
- Diário: Higienização com shampoo neutro/espuma específica e escovação suave.
- Evitar produtos oleosos e rímel à prova d'água.
- Manutenção recomendada a cada 15 a 20 dias para acompanhar o ciclo natural de queda dos fios.

Localização do estúdio:
R. Santa Luzia, 581 - Vila Caiçara, Praia Grande - SP, CEP 11706-040.
Atendimento exclusivo com hora marcada em espaço privativo e confortável.
WhatsApp: (13) 99700-2356.`;

export async function handleChatMessage(message: string): Promise<string> {
  if (!ai) {
    return getAssistantResponse(message);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message,
      config: {
        systemInstruction: HAVILAH_SYSTEM_INSTRUCTION,
        temperature: 0.6,
      },
    });

    return (
      response.text ||
      getAssistantResponse(message)
    );
  } catch (error: any) {
    console.error('Error generating chat response:', error);
    return getAssistantResponse(message);
  }
}

export interface ConsultancyData {
  eyeType: string;
  recommendedIds: string[];
  summary: string;
  curvatures: string;
}

export async function handleConsultancyAnalysis(
  base64Image: string
): Promise<ConsultancyData> {
  const fallback: ConsultancyData = {
    eyeType: 'Olhos amendoados com boa sustentação',
    recommendedIds: ['volume_havilah', 'fox_eyes'],
    summary:
      'O formato amendoado é versátil e harmoniza com alongamento lateral suave, garantindo um olhar expressivo e elegante sem sobrecarregar os fios naturais.',
    curvatures: 'Curvatura D no ápice e C/L nas extremidades para elevação sutil.',
  };

  if (!ai || !base64Image) {
    return fallback;
  }

  try {
    let mimeType = 'image/jpeg';
    let cleanB64 = base64Image;

    if (base64Image.startsWith('data:')) {
      const match = base64Image.match(/^data:([^;]+);base64,/);
      if (match) {
        mimeType = match[1];
      }
      cleanB64 = base64Image.split(',')[1] || base64Image;
    }

    const prompt = `Analise a anatomia ocular e formato dos olhos da foto.
Retorne EXCLUSIVAMENTE um objeto JSON válido (sem tags markdown ou código) com a seguinte estrutura:
{
  "eyeType": "descrição objetiva de 3 a 6 palavras sobre o formato ocular",
  "recommendedIds": ["volume_havilah", "fox_eyes"],
  "summary": "1 ou 2 frases curtas explicando por que esses modelos valorizam o olhar dela com naturalidade e conforto",
  "curvatures": "orientação técnica rápida de curvatura recomendada"
}
Regras:
1. Em "recommendedIds", selecione no máximo 2 modelos entre: "volume_havilah", "fox_eyes", "princess_effect", "volume_premium", "volume_divine", "natural_soft", "capping".
2. Não utilize emojis.
3. Não utilize linguagem de vendedor ou clichês de inteligência artificial.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanB64,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      ],
      config: {
        systemInstruction: HAVILAH_SYSTEM_INSTRUCTION,
        temperature: 0.3,
        responseMimeType: 'application/json',
      },
    });

    const text = response.text?.trim() || '';
    if (text) {
      const parsed = JSON.parse(text);
      if (parsed.recommendedIds && Array.isArray(parsed.recommendedIds)) {
        return {
          eyeType: parsed.eyeType || fallback.eyeType,
          recommendedIds: parsed.recommendedIds.slice(0, 2),
          summary: parsed.summary || fallback.summary,
          curvatures: parsed.curvatures || fallback.curvatures,
        };
      }
    }
    return fallback;
  } catch (error) {
    console.error('Error in handleConsultancyAnalysis:', error);
    return fallback;
  }
}
