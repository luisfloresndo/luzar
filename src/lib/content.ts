// Contenido REAL de Luzar Consultores — extraído de luzar.com.mx (home, nosotros,
// servicios, casos de éxito, preguntas frecuentes). Sin datos inventados.

export const CONTACT = {
  phones: ["81-1066-0710", "81-1359-4087"],
  whatsapp: "528110660710",
  email: "info@luzar.com.mx",
  address: "Ricardo Margain Zozaya 315, Loft 02, Piso 4",
  city: "San Pedro Garza García, Nuevo León",
  social: {
    facebook: "https://www.facebook.com/LuzarConsultores",
    instagram: "https://www.linkedin.com/company/luzar-consultores/",
    linkedin: "https://www.linkedin.com/company/luzar-consultores/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#faq" },
] as const;

export type Service = {
  title: string;
  description: string;
  points: string[];
};

// Servicios reales con sus listas (página /servicios).
export const SERVICES: Service[] = [
  {
    title: "Contabilidad",
    description:
      "Contadores expertos que analizan tu actividad económica y trabajan tu contabilidad mes con mes para cumplir tus obligaciones ante el SAT.",
    points: [
      "Contabilidad general y fiscal",
      "Contabilidad electrónica",
      "Análisis financiero",
      "Levantamiento físico de inventarios",
    ],
  },
  {
    title: "Asesoría",
    description:
      "Acompañamiento contable, fiscal, financiero y administrativo, con auditorías y medidas conforme a la Ley Anti-Lavado.",
    points: [
      "Contable, fiscal y financiera",
      "Auditorías internas y externas",
      "Control interno",
      "Ley Anti-Lavado",
    ],
  },
  {
    title: "Fiscal y planeación",
    description:
      "Ingeniería fiscal conforme a la Ley para empresa, empleados y socios, aprovechando beneficios de tratados internacionales.",
    points: [
      "Ingeniería fiscal conforme a Ley",
      "Beneficios por tratados internacionales",
      "Cumplimiento de obligaciones",
    ],
  },
  {
    title: "Servicios generales y legales",
    description:
      "Respaldo legal corporativo: constitución de sociedades, contratos, gobierno corporativo y materia laboral, civil y mercantil.",
    points: [
      "Constitución de sociedades",
      "Elaboración de contratos",
      "Gobierno y reestructuración corporativa",
      "Laboral, civil y mercantil",
    ],
  },
  {
    title: "Impuestos y nómina",
    description:
      "Cálculo y presentación de impuestos (ISR, IVA, retenciones) y procesamiento electrónico de sueldos, salarios y prestaciones.",
    points: [
      "ISR, IVA y retenciones",
      "Declaraciones (DIOT, DIMM) y anual",
      "Nómina electrónica",
    ],
  },
  {
    title: "Trámites",
    description:
      "Todo tipo de trámites ante SAT, IMSS, Infonavit y Tesorería: del RFC a la aclaración de requerimientos y créditos fiscales.",
    points: [
      "Inscripción y cambios en RFC",
      "Aclaración de requerimientos y créditos fiscales",
      "SAT, IMSS, Infonavit y Tesorería",
    ],
  },
];

export type Industry = {
  name: string;
  image: string;
  blurb: string;
};

// Industrias reales (home /servicios: "Apoyo a diversas industrias").
export const INDUSTRIES: Industry[] = [
  {
    name: "Comercio",
    image: "/images/industry-comercio.webp",
    blurb:
      "Empresas comerciales: control de inventarios, márgenes y flujo para negocios que venden todos los días.",
  },
  {
    name: "Construcción",
    image: "/images/industry-construccion.webp",
    blurb:
      "Empresas del ramo de la construcción: costos por obra, anticipos y estimaciones con el tratamiento fiscal correcto.",
  },
  {
    name: "Industria",
    image: "/images/industry-industria.webp",
    blurb:
      "Empresas industriales: costeo de producción, activos fijos y depreciación para plantas en operación.",
  },
  {
    name: "Autotransporte",
    image: "/images/industry-transporte.webp",
    blurb:
      "Empresas de autotransporte: flotillas, combustible y carta porte con el cumplimiento que exige la autoridad.",
  },
  {
    name: "Restaurantes",
    image: "/images/industry-restaurantes.webp",
    blurb:
      "Industria restaurantera: nómina rotativa, propinas y control de costos de insumos sin perder de vista el SAT.",
  },
  {
    name: "Salud",
    image: "/images/industry-salud.webp",
    blurb:
      "Empresas del sector salud: consultorios y clínicas con deducciones, honorarios y cumplimiento profesional.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

// Representa el flujo de "Consultoría 360" del sitio original.
export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico de tu situación",
    body: "Analizamos tu situación contable y fiscal actual, revisamos pendientes por presentar e identificamos riesgos y oportunidades.",
  },
  {
    step: "02",
    title: "Regularización",
    body: "Actualizamos obligaciones fiscales, regularizamos declaraciones pendientes y gestionamos la cancelación de requerimientos y multas.",
  },
  {
    step: "03",
    title: "Operación mensual",
    body: "Contabilidad, nómina e impuestos en tiempo y forma, con estados financieros oportunos para la toma de decisiones.",
  },
  {
    step: "04",
    title: "Consultoría 360",
    body: "Asesoría contable, fiscal, financiera y administrativa continua, con proyecciones y supervisión de control interno.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
};

// "¿Por qué confiar en nosotros?" + valores (home / nosotros).
export const WHY_LUZAR: Differentiator[] = [
  {
    title: "Equipo especialista",
    body: "Contamos con un equipo especialista en cada servicio que te quita las preocupaciones en temas contables, fiscales y laborales.",
  },
  {
    title: "Más de 25 años de experiencia",
    body: "Nos respalda más de 25 años de experiencia asesorando a empresas y personas en el noreste de México.",
  },
  {
    title: "Trato excepcional",
    body: "Personas apasionadas y comprometidas que garantizan un servicio y trato excepcional a cada uno de nuestros clientes.",
  },
  {
    title: "Regularización y defensa fiscal",
    body: "Regularizamos tu situación fiscal y contestamos requerimientos del SAT, IMSS y Tesorería para mantenerte en regla.",
  },
];

// Misión / Visión / Valores reales (página /nosotros).
export const ABOUT = {
  intro:
    "Somos una empresa con valores basados en la confianza, la colaboración y el respeto mutuo.",
  mission:
    "Proveemos soluciones contables, fiscales y administrativas. Nos distingue nuestra ética profesional, experiencia y calidad, con una atención cercana a los tomadores de decisiones. Estamos comprometidos con el crecimiento rentable de nuestros socios y clientes.",
  vision:
    "Ser una firma de contadores referente en el noreste de México, ofreciendo soluciones innovadoras y adecuadas para el momento empresarial de nuestros clientes.",
  values: [
    "Ética profesional",
    "Atención cercana y oportuna",
    "Calidad en el servicio",
    "Innovación",
    "Integridad",
  ],
  clients: "Personas físicas, morales y PYMES",
} as const;

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "¿Por qué elegir un despacho contable?",
    answer:
      "Ante las transformaciones constantes del sistema financiero, contar con contadores públicos profesionales te permite definir prioridades y estrategias, cimentar bases sólidas de gestión del capital y evitar crisis financieras. Nos interesa impulsar el crecimiento de tu empresa.",
  },
  {
    question: "Tengo declaraciones atrasadas, ¿pueden ayudarme?",
    answer:
      "Sí. La regularización de declaraciones pendientes es una de nuestras especialidades. Revisamos tu situación, corregimos los cálculos y presentamos lo omitido con la estrategia que menos te afecte —en varios casos, recuperando saldos a favor.",
  },
  {
    question: "Me llegó un requerimiento o una multa del SAT, ¿qué hago?",
    answer:
      "Contáctanos antes de responder por tu cuenta. Contestamos requerimientos de obligaciones ante el SAT, IMSS y Tesorería del Estado y, cuando procede, gestionamos la cancelación de la multa o el requerimiento.",
  },
  {
    question: "Estoy arrancando un negocio, ¿en qué me ayudan?",
    answer:
      "Apoyamos la apertura de negocios (trámite ante la Secretaría de Economía y registro ante notarios), el registro ante SAT, IMSS y Tesorería, la facturación, el cálculo de nóminas y la asesoría administrativa desde el día uno.",
  },
  {
    question: "¿Trabajan con empresas de mi industria?",
    answer:
      "Atendemos empresas comerciales, de construcción, industriales, de autotransporte, restauranteras y del sector salud, además de personas físicas, morales y PYMES.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "En Ricardo Margain Zozaya 315, Loft 02, Piso 4, San Pedro Garza García, Nuevo León. Atendemos de forma presencial y a distancia.",
  },
];

export type CaseStudy = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Casos de éxito REALES (página /casos-de-exito), resumidos.
export const TESTIMONIALS: CaseStudy[] = [
  {
    quote:
      "Persona física con requerimientos y multas del SAT por declaraciones omitidas. Corregimos los cálculos mensuales, presentamos lo pendiente y la declaración anual, y recuperamos un saldo a favor en sólo 10 días.",
    name: "Persona física",
    designation: "Regularización ante el SAT",
    src: "/images/case-meeting.webp",
  },
  {
    quote:
      "Empresa exportadora (80% de exportación) con socios extranjeros y saldos de IVA sin recuperar. Regularizamos su contabilidad, gestionamos el registro IMMEX y la certificación de IVA, y recuperamos saldos a favor que financiaron su crecimiento.",
    name: "Persona moral exportadora",
    designation: "IMMEX y recuperación de IVA",
    src: "/images/industry-industria.webp",
  },
  {
    quote:
      "Empresa con requerimientos por declaraciones presentadas en ceros. Regularizamos los registros contables y las declaraciones, con estados financieros mensuales y trámite de créditos de capital de trabajo.",
    name: "Persona moral",
    designation: "Regularización y financiamiento",
    src: "/images/about-office.webp",
  },
];
// Alias para claridad semántica en componentes nuevos.
export const CASES = TESTIMONIALS;

// Métricas reales / defendibles (sin cifras inventadas).
export const METRICS = [
  { value: 25, suffix: "+", label: "Años de experiencia" },
  { value: 6, suffix: "", label: "Industrias atendidas" },
  { value: 40, suffix: "+", label: "Servicios específicos" },
  { value: 360, suffix: "°", label: "Consultoría integral" },
] as const;
