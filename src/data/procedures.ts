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
      'Olhar felino com alongamento estratégico nos cantos externos. Proporciona um efeito lifting suave e moderno que valoriza as linhas do rosto.',
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
  wazeUrl: 'https://waze.com/ul?q=Rua%20Santa%20Luzia%20581%20Praia%20Grande',
  uberUrl:
    'https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=R.%20Santa%20Luzia%2C%20581%20-%20Vila%20Cai%C3%A7ara%2C%20Praia%20Grande%20-%20SP%2C%2011706-040',
  arrivalGuide: {
    title: 'Guia de Chegada & Localização',
    discreetEntry:
      'Nosso estúdio é privativo e intimista para seu máximo conforto e privacidade. O imóvel não possui placa comercial ostensiva na fachada.',
    instructions:
      'Ao chegar ao número 581, basta tocar a campainha ou nos mandar um "Cheguei!" no WhatsApp. Rebecca ou a equipe descerá prontamente para receber você.',
    parking:
      'Estacionamento fácil, gratuito e tranquilo ao longo de toda a Rua Santa Luzia e esquinas da Vila Caiçara.',
  },
  hours: [
    { days: 'Segunda a Sexta', hours: '09:00 às 19:00' },
    { days: 'Sábados', hours: '09:00 às 16:00' },
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

export const testimonials = [
  {
    id: '1',
    name: 'Carolina Mendes',
    role: 'Cliente VIP',
    comment:
      'Faço meus cílios com a Rebecca há mais de 1 ano e não troco por nada! O Volume Havilah é leve, não pesa nos olhos e dura perfeitamente minhas 3 semanas de manutenção. O estúdio na Caiçara é super aconchegante.',
    rating: 5,
    modelUsed: 'Volume Havilah',
    timeAsClient: 'Cliente há 1 ano',
  },
  {
    id: '2',
    name: 'Beatriz Vasconcelos',
    role: 'Advogada',
    comment:
      'Eu tinha muito receio de fazer cílios e ficar artificial. A Rebecca fez um visagismo impecável, escolheu o Fox Eyes e meu olhar abriu de uma forma elegante. Me sinto maquiada e pronta todos os dias!',
    rating: 5,
    modelUsed: 'Fox Eyes',
    timeAsClient: 'Cliente há 8 meses',
  },
  {
    id: '3',
    name: 'Juliana Siqueira',
    role: 'Empresária',
    comment:
      'Atendimento impecável! A maca é super confortável, quase durmo a sessão inteira. Sem falar no Combo Glamour que já vem com o shampoozinho e a primeira manutenção inclusa. Super recomendo!',
    rating: 5,
    modelUsed: 'Combo Glamour',
    timeAsClient: 'Cliente há 1 ano e meio',
  },
  {
    id: '4',
    name: 'Fernanda Rocha',
    role: 'Médica',
    comment:
      'Biossegurança nota mil, material esterilizado e os fios são de seda de verdade. Nunca tive alergia ou irritação. O Efeito Princesa realçou demais meus olhos pequenos.',
    rating: 5,
    modelUsed: 'Efeito Princesa',
    timeAsClient: 'Cliente há 6 meses',
  },
];

export const faqList = [
  {
    question: 'A extensão de cílios dói ou danifica meus fios naturais?',
    answer:
      'De forma alguma! O procedimento é 100% indolor e muito relaxante (muitas clientes aproveitam para dormir). Aplicamos fio a fio com isolamento rigoroso e respeitamos a saúde e o peso suportado pelo seu cílio natural, preservando seu ciclo de crescimento.',
    category: 'procedimento' as const,
  },
  {
    question: 'Quanto tempo dura a sessão de aplicação?',
    answer:
      'Uma primeira aplicação completa dura entre 1h45 a 2h30, dependendo da densidade dos seus fios e do volume escolhido. As manutenções levam cerca de 1h a 1h30.',
    category: 'procedimento' as const,
  },
  {
    question: 'Com que frequência devo fazer a manutenção?',
    answer:
      'O intervalo ideal é entre 15 e 20 dias, com pelo menos 40% a 50% da extensão ainda presente. Passados 21 dias sem manutenção, é cobrado o valor de uma nova aplicação.',
    category: 'cuidados' as const,
  },
  {
    question: 'Posso molhar, tomar banho de mar ou piscina?',
    answer:
      'Sim! Recomendamos apenas esperar 24 horas após a aplicação para que a polimerização da cola esteja 100% curada. Após isso, você pode molhar normalmente, lavando sempre com água fria/morna e shampoo neutro após a praia/piscina.',
    category: 'cuidados' as const,
  },
  {
    question: 'Como funciona o local do estúdio e onde estacionar?',
    answer:
      'Nosso estúdio fica na R. Santa Luzia, 581, na Vila Caiçara (Praia Grande - SP). É um espaço privativo e intimista sem placa ostensiva na rua. Ao chegar, basta tocar a campainha ou avisar no WhatsApp! Há bastante vaga gratuita para estacionar em frente e na própria rua.',
    category: 'estudio' as const,
  },
  {
    question: 'Como faço para pagar e confirmar o agendamento?',
    answer:
      'Aceitamos PIX, Cartão de Crédito, Débito e Dinheiro. Você pode selecionar a melhor data e horário aqui pelo site e finalizar a confirmação diretamente no nosso WhatsApp oficial.',
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
    title: 'Fox Eyes (Olhar Felino)',
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

