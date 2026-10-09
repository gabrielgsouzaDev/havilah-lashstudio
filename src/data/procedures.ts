import { Procedure, ProcedureId, AdditionalService, CareTip } from '../types';

export const procedures: Procedure[] = [
  {
    id: ProcedureId.VOLUME_HAVILAH,
    name: 'Volume Havilah',
    description:
      'Assinatura exclusiva do estúdio. Resultado natural, delicado e elegante. Indicado para quem busca destacar o olhar com leveza, equilíbrio e sofisticação.',
    imagePlaceholder: '/ciliosfioafio.jpg',
    price: 170,
    maintenancePrice: 100,
  },
  {
    id: ProcedureId.FOX_EYES,
    name: 'Fox Eyes',
    description:
      'Alongamento estratégico nos cantos externos com transição suave. Proporciona um efeito lifting elegante e moderno que valoriza as linhas do rosto.',
    imagePlaceholder: '/ciliosfox.jpg',
    price: 190,
    maintenancePrice: 100,
  },
  {
    id: ProcedureId.PRINCESS_EFFECT,
    name: 'Efeito Princesa',
    description:
      'Traz elevação no centro e curvatura expressiva que abrem o olhar com elegância. Favorece olhos menores e pálpebras que buscam maior destaque.',
    imagePlaceholder: '/ciliosled.jpg',
    price: 150,
    maintenancePrice: 90,
  },
  {
    id: ProcedureId.VOLUME_PREMIUM,
    name: 'Volume Premium',
    description:
      'Volume marcante e denso criado com leques ultra leves. Ideal para quem ama presença forte, olhos destacados e acabamento impecável.',
    imagePlaceholder: '/volume_premium.jpg',
    price: 170,
    maintenancePrice: 90,
  },
  {
    id: ProcedureId.VOLUME_DIVINE,
    name: 'Volume Divino',
    description:
      'Efeito molhado (wet look) com leques fechados e alinhamento contemporâneo. O modelo queridinho para quem ama tendências de estética.',
    imagePlaceholder: '/volume_divine.jpg',
    price: 140,
    maintenancePrice: 90,
  },
  {
    id: ProcedureId.NATURAL_SOFT,
    name: 'Natural Soft',
    description:
      'Efeito extremamente suave, simulando cílios naturais porém mais longos e curvados. Ideal para quem busca discrição e minimalismo no dia a dia.',
    imagePlaceholder: '/natural_soft.jpg',
    price: 180,
    maintenancePrice: 90,
  },
  {
    id: ProcedureId.CAPPING,
    name: 'Capping',
    description:
      'Combinação de camadas que confere preenchimento e textura equilibrada. Meio-termo perfeito entre o clássico e o volume russo.',
    imagePlaceholder: '/capping.jpg',
    price: 190,
  },
  {
    id: ProcedureId.COMBO_GLAMOUR,
    name: 'Combo Glamour',
    description:
      'Experiência completa com aplicação do Volume Havilah, kit especial de cuidados para levar para casa e a 1ª manutenção já inclusa.',
    imagePlaceholder: '/gringa.jpg',
    price: 230,
  },
];

export const additionalServices: AdditionalService[] = [
  { id: 'rem_out', name: 'Remoção de Cílios (outro profissional)', price: 40 },
  { id: 'rem_our', name: 'Remoção (nossa aplicação)', price: 30 },
  { id: 'hygiene', name: 'Higienização Profunda', price: 20 },
];

export const careTips: CareTip[] = [
  {
    title: 'Primeiras 24 Horas',
    text: 'Evite molhar os cílios, vapor excessivo (sauna, banho muito quente) e não use maquiagem na região dos olhos.',
    icon: 'clock',
  },
  {
    title: 'Higienização Diária',
    text: 'Lave os cílios diariamente com shampoo neutro (de bebê) ou espuma de limpeza específica, usando um pincel macio.',
    icon: 'droplet',
  },
  {
    title: 'O que Evitar',
    text: "Não use rímel à prova d'água, curvex ou demaquilantes à base de óleo. Evite esfregar os olhos com força.",
    icon: 'shield',
  },
  {
    title: 'Escovação',
    text: 'Escove os cílios delicadamente todas as manhãs com a escovinha fornecida para mantê-los alinhados.',
    icon: 'feather',
  },
];

export const careTipImages: Record<string, string> = {
  clock:
    'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop',
  droplet: '/lash_cleaning.jpg',
  shield:
    'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=800&auto=format&fit=crop',
  feather:
    'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop',
};

export const carouselImages = [
  '/ciliosfioafio.jpg',
  '/ciliosfox.jpg',
  '/ciliosfox2.jpg',
  '/ciliosled.jpg',
  '/gringa.jpg',
];

export const studioLogo = '/assets/logo-DY0ZDsHN.jpeg';
export const rebeccaPhoto = '/rebecca.jpeg';
export const whatsappNumber = '5513997002356';

export const studioInfo = {
  name: 'Havilah Lash Studio',
  owner: 'Rebecca Havilah',
  instagram: '@byrebeccahavilah',
  instagramUrl:
    'https://www.instagram.com/byrebeccahavilah?igsi=MXE5N2p6MzEwYmZhMA%3D%3D&utm_source=qr',
  phoneFormatted: '(13) 99700-2356',
  whatsappUrl: 'https://wa.me/5513997002356',
  address: {
    street: 'R. Santa Luzia, 581',
    neighborhood: 'Vila Caiçara',
    city: 'Praia Grande',
    state: 'SP',
    cep: '11706-040',
    fullFormatted:
      'R. Santa Luzia, 581 - Vila Caiçara, Praia Grande - SP, 11706-040',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/HWhdxEb5MvZbbJyF6',
  hours: [
    { days: 'Segunda a Sexta', hours: '09:00 às 18:00' },
    { days: 'Sábados', hours: '09:00 às 14:00' },
    { days: 'Domingos e Feriados', hours: 'Fechado' },
  ],
};

export const preAppointmentChecklist = [
  {
    title: 'Sem maquiagem na região dos olhos',
    desc: 'Venha sem rímel, delineador ou corretivo nas pálpebras nas últimas 24h para melhor aderência.',
  },
  {
    title: 'Lentes de contato',
    desc: 'Se você usa lentes, recomendamos retirar antes da sessão para maior conforto ao descansar.',
  },
  {
    title: 'Evite cafeína em excesso',
    desc: 'Café ou energéticos antes do horário podem deixar os olhos agitados ou pálpebras tremendo.',
  },
  {
    title: 'Pontualidade de 5 a 10 min',
    desc: 'Chegue alguns minutinhos antes para respirar, relaxar e usufruir da experiência Havilah com calma.',
  },
];

export const faqList = [
  {
    question: 'A extensão de cílios dói ou prejudica meus fios naturais?',
    answer:
      'Não dói nada e não prejudica. O procedimento é 100% indolor, seguro e relaxante. Cada extensão é colada fio a fio com distância de segurança da raiz, respeitando o peso que seu fio suporta e preservando o crescimento biológico saudável.',
    category: 'procedimento' as const,
  },
  {
    question: 'Quanto tempo dura e quando devo fazer a manutenção?',
    answer:
      'A extensão permanece cheia e alinhada por 15 a 20 dias. Esse é o intervalo ideal para a manutenção, onde repomos os fios novos que nasceram e retiramos os que se soltaram no ciclo natural de renovação.',
    category: 'cuidados' as const,
  },
  {
    question: 'Quanto tempo dura a sessão no estúdio?',
    answer:
      'A primeira aplicação leva em média de 1h30 a 2h. Já a sessão de manutenção é mais rápida, durando cerca de 1h. O atendimento é individual em espaço privativo, climatizado e com maca anatômica.',
    category: 'procedimento' as const,
  },
  {
    question: 'Posso molhar, lavar o rosto e ir à praia ou piscina?',
    answer:
      'Sim! É necessário apenas aguardar as primeiras 24 horas para a secagem completa do adesivo. Depois desse período, molhar e lavar os cílios diariamente com água fria e shampoo neutro é recomendado e aumenta a durabilidade.',
    category: 'cuidados' as const,
  },
  {
    question: 'Posso usar rímel ou produtos com óleo na área dos olhos?',
    answer:
      'Não utilize rímel sobre a extensão nem demaquilantes à base de óleo, pois a oleosidade dissolve a cola. A maquiagem na pele está liberada, devendo ser retirada com água micelar sem óleo ao redor dos olhos.',
    category: 'cuidados' as const,
  },
  {
    question: 'Como agendar meu horário e quais as formas de pagamento?',
    answer:
      'O atendimento é exclusivo com hora marcada. Você pode escolher seu dia e horário aqui no site ou falar direto no WhatsApp (13) 99700-2356. Aceitamos PIX, cartões de crédito, débito e dinheiro.',
    category: 'agendamento' as const,
  },
];

export const beforeAfterItems = [
  {
    id: 'ba-havilah',
    title: 'Volume Havilah',
    technique: 'Assinatura Havilah',
    description:
      'Preenchimento uniforme com densidade suave, realçando a expressividade sem perder a delicadeza.',
    beforeImage: '/sobrancelhahenna.jpg',
    afterImage: '/ciliosfioafio.jpg',
  },
  {
    id: 'ba-fox',
    title: 'Fox Eyes',
    technique: 'Efeito Lifting nos Cantos',
    description:
      'Alongamento estratégico nas extremidades externas para levantar e esticar o olhar com sensualidade.',
    beforeImage: '/sobrancelha2.jpg',
    afterImage: '/ciliosfox.jpg',
  },
  {
    id: 'ba-princess',
    title: 'Efeito Princesa',
    technique: 'Curvatura & Abertura',
    description:
      'Destaque no centro e elevação harmoniosa para abrir o olhar e dar acabamento de boneca.',
    beforeImage: '/gringa.jpg',
    afterImage: '/ciliosled.jpg',
  },
];

