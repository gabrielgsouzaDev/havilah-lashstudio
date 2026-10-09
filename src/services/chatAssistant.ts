import { procedures, additionalServices, studioInfo } from '../data/procedures';

/**
 * Intelligent In-Browser Knowledge Assistant for Havilah Lash Studio.
 * Provides accurate, natural, professional answers to clients even when
 * deployed without a backend or when Gemini API tokens are not configured.
 */
export function getAssistantResponse(message: string): string {
  const text = message
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  // 1. Saudações e Cumprimentos
  if (
    /^(ola|oi|oie|bom dia|boa tarde|boa noite|ola rebecca|ola havila|ola assistente|e ai|tudo bem|como vai)/i.test(
      text
    ) &&
    text.length < 35
  ) {
    return (
      'Olá! Seja bem-vinda ao Havilah Lash Studio.\n\n' +
      'Sou a assistente do estúdio de Rebecca Havilah na Vila Caiçara, em Praia Grande. Posso te ajudar a escolher o modelo ideal, tirar dúvidas sobre durabilidade, cuidados ou agendamentos.\n\n' +
      'O que você gostaria de saber hoje?'
    );
  }

  // 2. Preços / Tabela de Valores / Quanto Custa
  if (
    /preco|precos|valor|valores|quanto custa|tabela|tabela de preco|investimento|quanto e|quanto sai/i.test(
      text
    )
  ) {
    // If asking about a specific model
    if (/havilah/i.test(text)) {
      return (
        'O Volume Havilah é a assinatura exclusiva do estúdio, proporcionando densidade equilibrada e acabamento impecável.\n\n' +
        '• Aplicação: R$ 170\n' +
        '• Manutenção (15 a 20 dias): R$ 100\n\n' +
        'Você pode ver a foto desse modelo na aba Valores ou agendar seu horário na aba Agendar!'
      );
    }
    if (/fox|raposa|gatinho/i.test(text)) {
      return (
        'O Fox Eyes cria um efeito delineado com elevação nos cantos externos dos olhos.\n\n' +
        '• Aplicação: R$ 190\n' +
        '• Manutenção: R$ 100\n\n' +
        'É uma das técnicas mais pedidas para quem busca um olhar marcante e levantado.'
      );
    }
    if (/princesa/i.test(text)) {
      return (
        'O Efeito Princesa proporciona abertura central e curva destacada no centro dos olhos, estilo boneca.\n\n' +
        '• Aplicação: R$ 150\n' +
        '• Manutenção: R$ 90'
      );
    }
    if (/combo|kit/i.test(text)) {
      return (
        'O Combo Glamour é o pacote completo do estúdio:\n\n' +
        '• Inclui: Aplicação do Volume Havilah + Kit de Cuidados (Shampoo neutro e pincel) + 1ª Manutenção inclusa.\n' +
        '• Investimento: R$ 230\n\n' +
        'É a melhor opção para quem quer economizar e garantir cílios perfeitos por um mês inteiro.'
      );
    }

    return (
      'Aqui está o resumo dos valores dos nossos procedimentos:\n\n' +
      '• Volume Havilah (Assinatura): Aplicação R$ 170 | Manutenção R$ 100\n' +
      '• Fox Eyes (Efeito Lifting): Aplicação R$ 190 | Manutenção R$ 100\n' +
      '• Efeito Princesa: Aplicação R$ 150 | Manutenção R$ 90\n' +
      '• Volume Premium: Aplicação R$ 170 | Manutenção R$ 90\n' +
      '• Volume Divino: Aplicação R$ 140 | Manutenção R$ 90\n' +
      '• Natural Soft: Aplicação R$ 180 | Manutenção R$ 90\n' +
      '• Capping: Aplicação R$ 190\n' +
      '• Combo Glamour (Aplicação + Kit de Cuidados + Manutenção): R$ 230\n\n' +
      'Serviços adicionais:\n' +
      '• Remoção de outro estúdio: R$ 40\n' +
      '• Remoção de aplicação Havilah: R$ 30\n' +
      '• Higienização profunda: R$ 20\n\n' +
      'Você pode conferir todos os detalhes e fotos na aba "Valores" aqui no site.'
    );
  }

  // 3. Modelos específicos
  if (/volume havilah/i.test(text)) {
    return (
      'O Volume Havilah é a técnica assinatura desenvolvida pela Rebecca Havilah. Combina leques artesanais leves com alinhamento preciso, criando preenchimento uniforme e sofisticado sem sobrecarregar seus fios naturais.\n\n' +
      '• Aplicação: R$ 170\n' +
      '• Manutenção: R$ 100\n' +
      '• Tempo de aplicação: Cerca de 1h45\n\n' +
      'Deseja agendar esse modelo para você?'
    );
  }

  if (/fox eyes|fox|olhar felino|delineado/i.test(text)) {
    return (
      'O Fox Eyes é projetado para criar um efeito de olhar alongado e elevado. Trabalhamos com fios gradualmente maiores em direção ao canto externo, criando um efeito lifting natural e sedutor.\n\n' +
      '• Aplicação: R$ 190\n' +
      '• Manutenção: R$ 100'
    );
  }

  if (/princesa|efeito princesa|boneca/i.test(text)) {
    return (
      'O Efeito Princesa foca na elevação no centro da pálpebra, abrindo o olhar e dando acabamento iluminado e delicado, ideal para quem quer um visual romântico e expressivo.\n\n' +
      '• Aplicação: R$ 150\n' +
      '• Manutenção: R$ 90'
    );
  }

  if (/natural|soft|discreto|discreta/i.test(text)) {
    return (
      'O Natural Soft é a nossa técnica mais delicada, indicada para quem deseja cílios que pareçam naturalmente longos e volumosos, sem exageros. Muito confortável para a rotina diária.\n\n' +
      '• Aplicação: R$ 180\n' +
      '• Manutenção: R$ 90'
    );
  }

  if (/premium/i.test(text)) {
    return (
      'O Volume Premium é ideal para quem ama densidade e expressividade. Utiliza leques mais cheios e preenchimento total dos fios aplicáveis.\n\n' +
      '• Aplicação: R$ 170\n' +
      '• Manutenção: R$ 90'
    );
  }

  if (/divino/i.test(text)) {
    return (
      'O Volume Divino possui leques fechados e acabamento reto e alinhado, trazendo definição com excelente custo-benefício.\n\n' +
      '• Aplicação: R$ 140\n' +
      '• Manutenção: R$ 90'
    );
  }

  if (/capping/i.test(text)) {
    return (
      'O Capping é uma técnica especial de acoplagem dupla que proporciona alta retenção e durabilidade extra, ideal para quem tem rotina intensa.\n\n' +
      '• Aplicação: R$ 190'
    );
  }

  // 4. Dor / Medo / Danos aos fios naturais
  if (
    /doi|machuca|incomoda|prejudica|estraga|cai tudo|perde os cilios|faz mal|danifica|arranca/i.test(
      text
    )
  ) {
    return (
      'Fique 100% tranquila: a extensão de cílios no Havilah Studio não dói e não danifica seus fios naturais.\n\n' +
      'O procedimento é totalmente indolor e relaxante (a maioria das clientes aproveita para descansar ou cochilar na maca).\n\n' +
      'Nós realizamos o isolamento estrito fio a fio, respeitando o peso que seu cílio suporta e mantendo uma distância segura da raiz da pálpebra. Assim, o ciclo biológico de renovação do seu fio continua completamente saudável.'
    );
  }

  // 5. Durabilidade & Manutenção
  if (
    /durabilidade|quanto tempo dura|manutencao|de quanto em quanto tempo|quantos dias|retencao/i.test(
      text
    )
  ) {
    return (
      'A extensão permanece bonita e alinhada por cerca de 15 a 20 dias.\n\n' +
      'Esse é o intervalo indicado para a manutenção, onde fazemos a higienização completa, retiramos os fios que cresceram e preenchemos os novos fios que nasceram.\n\n' +
      'Com os cuidados diários de lavagem e escovação, a retenção pode durar com ótimo aspecto até o dia da manutenção.'
    );
  }

  // 6. Tempo da sessão / Quantas horas demora
  if (
    /quanto tempo demora|quantas horas|demora muito|tempo de sessao|duracao da sessao|tempo na maca/i.test(
      text
    )
  ) {
    return (
      'A aplicação completa de uma extensão nova dura em média de 1h30 a 2h, dependendo da técnica e da quantidade de fios naturais.\n\n' +
      'A sessão de manutenção é mais rápida, durando cerca de 1h a 1h15.\n\n' +
      'O ambiente é silencioso, climatizado e com maca anatômica para seu total conforto durante o atendimento.'
    );
  }

  // 7. Cuidados / Molhar / Praia / Piscina / Banho
  if (
    /cuidados|molhar|agua|lavar|banho|praia|piscina|mar|sol|calor|lavagem|pos/i.test(
      text
    )
  ) {
    return (
      'Os cuidados principais são simples e fáceis:\n\n' +
      '1. Primeiras 24 horas: Evite molhar diretamente, vapor muito quente e sauna para a cura completa do adesivo.\n' +
      '2. Após 24 horas: Pode molhar e entrar no mar ou piscina normalmente! Inclusive é recomendado lavar os cílios diariamente com shampoo neutro e água fria para remover impurezas e oleosidade.\n' +
      '3. Penteie suavemente com a escovinha dada no atendimento sempre que estiverem secos.\n' +
      '4. Não use rímel nem produtos à base de óleo na região dos olhos.'
    );
  }

  // 8. Rímel / Maquiagem / Demaquilante
  if (/rimel|mascara de cilios|maquiagem|demaquilante|oleo/i.test(text)) {
    return (
      'Você não deve utilizar rímel (máscara de cílios) sobre a extensão, pois além de ser desnecessário, a remoção do rímel danifica os fios da extensão e quebra o adesivo.\n\n' +
      'Evite também demaquilantes bifásicos ou produtos com óleo na área dos olhos. Para retirar maquiagem da pele, use água micelar sem óleo com um cotonete suavemente ao redor dos olhos.'
    );
  }

  // 9. Localização e Endereço do Estúdio
  if (
    /onde fica|onde e|localizacao|endereco|como chegar|bairro|cidade|praia grande|caicara|rua/i.test(
      text
    )
  ) {
    return (
      'O Havilah Lash Studio fica localizado em:\n\n' +
      'R. Santa Luzia, 581 - Vila Caiçara, Praia Grande - SP, CEP 11706-040.\n\n' +
      'O atendimento é individual e com hora marcada em um espaço privativo e confortável. Você pode ver a rota no Google Maps direto pelo botão na página inicial!'
    );
  }

  // 10. Agendamento / Como marcar
  if (
    /agendar|agendamento|marcar|quero marcar|marcar horario|agendar horario|vaga|disponibilidade/i.test(
      text
    )
  ) {
    return (
      'Para agendar é muito rápido e prático:\n\n' +
      '1. Você pode acessar a aba "Agendar" aqui no menu do site, selecionar o dia, horário disponível e o procedimento desejado;\n' +
      '2. Ou chamar diretamente a Rebecca no WhatsApp pelo número (13) 99700-2356.\n\n' +
      'Nosso atendimento é de Segunda a Sexta das 09h às 19h e Sábados das 09h às 16h, com hora previamente marcada para garantir exclusividade e pontualidade!'
    );
  }

  // 11. Horário de funcionamento
  if (
    /horario|dias|que horas|quando abre|funciona sabado|domingo|abre sabado|abre domingo/i.test(
      text
    )
  ) {
    return (
      'Nosso horário de atendimento é:\n\n' +
      '• Segunda a Sexta: das 09:00 às 19:00\n' +
      '• Sábados: das 09:00 às 16:00\n' +
      '• Domingos e Feriados: Fechado\n\n' +
      'Todos os atendimentos são realizados com hora previamente agendada.'
    );
  }

  // 12. Formas de Pagamento
  if (/pagamento|forma de pagamento|cartao|pix|parcela|dinheiro/i.test(text)) {
    return (
      'Aceitamos as seguintes formas de pagamento:\n\n' +
      '• PIX\n' +
      '• Cartão de Crédito\n' +
      '• Cartão de Débito\n' +
      '• Dinheiro em espécie\n\n' +
      'O acerto é realizado com tranquilidade no final do seu atendimento.'
    );
  }

  // 13. Sobre a Rebecca
  if (/rebecca|quem e|sobre ela|experiencia|dona/i.test(text)) {
    return (
      'Rebecca Havilah é lash designer e visagista com mais de 5 anos de experiência e centenas de atendimentos na Baixada Santista.\n\n' +
      'É a criadora da técnica Volume Havilah, focada em biossegurança, saúde dos fios naturais e harmonização do olhar de acordo com o formato dos olhos de cada cliente.'
    );
  }

  // 14. Consultoria de Visagismo
  if (/consultoria|visagismo|modelo ideal|qual combina|qual modelo/i.test(text)) {
    return (
      'Temos aqui no site a aba "Consultoria IA", onde você pode enviar uma foto do seu rosto e descobrir na hora o modelo que mais harmoniza com o formato dos seus olhos e pálpebras!\n\n' +
      'Além disso, no início da sua sessão no estúdio, a Rebecca também avalia pessoalmente seus fios e te orienta na melhor escolha.'
    );
  }

  // 15. Remoção de cílios
  if (/remocao|tirar|remover/i.test(text)) {
    return (
      'Fazemos remoção química segura com produto dermatológico profissional que dissolve o adesivo sem puxar nem quebrar nenhum fio natural:\n\n' +
      '• Remoção de aplicação feita em outro estúdio: R$ 40\n' +
      '• Remoção de aplicação Havilah: R$ 30\n\n' +
      'Nunca tente arrancar os cílios em casa com pinça ou puxando com os dedos para não lesionar o folículo.'
    );
  }

  // Resposta padrão caso a pergunta seja aberta
  return (
    'Posso te ajudar com qualquer informação sobre o estúdio!\n\n' +
    'Você pode perguntar sobre:\n' +
    '• Modelos disponíveis (Volume Havilah, Fox Eyes, Efeito Princesa...)\n' +
    '• Valores e manutenção\n' +
    '• Como agendar um horário\n' +
    '• Cuidados e durabilidade dos cílios\n' +
    '• Localização na Vila Caiçara\n\n' +
    'Se preferir um atendimento personalizado agora, a Rebecca também atende diretamente no WhatsApp: (13) 99700-2356.'
  );
}
