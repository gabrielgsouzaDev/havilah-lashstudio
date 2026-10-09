import { GoogleGenAI } from '@google/genai';

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

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { base64Image } = req.body || {};

  const fallback = {
    eyeType: 'Olhos amendoados com boa sustentação',
    recommendedIds: ['volume_havilah', 'fox_eyes'],
    summary:
      'O formato amendoado é versátil e harmoniza com alongamento lateral suave, garantindo um olhar expressivo e elegante sem sobrecarregar os fios naturais.',
    curvatures: 'Curvatura D no ápice e C/L nas extremidades para elevação sutil.',
  };

  if (!ai || !base64Image) {
    return res.status(200).json({ result: fallback });
  }

  try {
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, '');

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          inlineData: {
            mimeType: 'image/jpeg',
            data: cleanBase64,
          },
        },
        {
          text: `Você é a especialista Rebecca Havilah em visagismo ocular. Analise a foto e sugira os modelos ideais entre: 'volume_havilah', 'fox_eyes', 'princess_effect', 'volume_premium', 'volume_divine', 'capping', 'natural_soft'.
Retorne EXCLUSIVAMENTE um objeto JSON válido sem formatação markdown:
{
  "eyeType": "tipo de olho (ex: Amendoados, Caídos, Grandes, Pequenos)",
  "recommendedIds": ["id_modelo_1", "id_modelo_2"],
  "summary": "1 a 2 frases explicando por que combina",
  "curvatures": "curvatura recomendada"
}`,
        },
      ],
      config: {
        temperature: 0.2,
      },
    });

    const raw = response.text || '';
    const cleaned = raw.replace(/```json\n?|```/g, '').trim();
    const parsed = JSON.parse(cleaned);

    return res.status(200).json({ result: parsed });
  } catch (err: any) {
    console.error('Consultancy error:', err);
    return res.status(200).json({ result: fallback });
  }
}
