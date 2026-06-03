// Contenido real de Luzar Consultores — sin Lorem ipsum (regla ATLAS).
// Datos verificados de luzar.com.mx.

export const CONTACT = {
  phones: ["81-1066-0710", "81-1359-4087"],
  whatsapp: "528110660710",
  email: "info@luzar.com.mx",
  address: "Ricardo Margain Zozaya 315, Loft 02, Piso 4",
  city: "San Pedro Garza García, Nuevo León",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
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

export const SERVICES: Service[] = [
  {
    title: "Contabilidad",
    description:
      "Registro y control financiero al día, con estados claros para decidir con números, no con suposiciones.",
    points: ["Contabilidad electrónica", "Estados financieros", "Conciliaciones"],
  },
  {
    title: "Planeación fiscal",
    description:
      "Estrategia para pagar lo justo dentro de la ley: optimizamos tu carga fiscal antes de que llegue la factura.",
    points: ["Optimización de impuestos", "Proyecciones", "Cumplimiento SAT"],
  },
  {
    title: "Nómina e impuestos",
    description:
      "Cálculo y timbrado de nómina, IMSS e impuestos sin errores ni retrasos que se conviertan en multas.",
    points: ["Timbrado CFDI", "IMSS e INFONAVIT", "Declaraciones mensuales"],
  },
  {
    title: "Asesoría",
    description:
      "Acompañamiento administrativo continuo para emprendedores y empresas que están creciendo.",
    points: ["Arranque de negocios", "Estructura administrativa", "Toma de decisiones"],
  },
  {
    title: "Jurídico",
    description:
      "Respaldo legal y documental, incluyendo disputas con la autoridad fiscal cuando hay que defender tu caso.",
    points: ["Defensa fiscal", "Documentación legal", "Contratos"],
  },
  {
    title: "Trámites administrativos",
    description:
      "Regularización de declaraciones pendientes y cancelación de requerimientos y multas ante el SAT.",
    points: ["Regularización", "Cancelación de multas", "Altas y bajas"],
  },
];

export type Industry = {
  name: string;
  image: string;
  blurb: string;
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Comercio",
    image: "/images/industry-comercio.webp",
    blurb:
      "Control de inventarios, márgenes y flujo para negocios que venden todos los días.",
  },
  {
    name: "Construcción",
    image: "/images/industry-construccion.webp",
    blurb:
      "Costos por obra, anticipos y estimaciones con el tratamiento fiscal correcto.",
  },
  {
    name: "Restaurantes",
    image: "/images/industry-restaurantes.webp",
    blurb:
      "Nómina rotativa, propinas y control de costos de insumos sin perder de vista el SAT.",
  },
  {
    name: "Industria",
    image: "/images/industry-industria.webp",
    blurb:
      "Costeo de producción, activos fijos y depreciación para plantas en operación.",
  },
  {
    name: "Salud",
    image: "/images/industry-salud.webp",
    blurb:
      "Consultorios y clínicas: deducciones, honorarios y cumplimiento profesional.",
  },
  {
    name: "Transporte",
    image: "/images/industry-transporte.webp",
    blurb:
      "Flotillas, combustible y carta porte con el cumplimiento que exige la autoridad.",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico sin costo",
    body: "Revisamos tu situación contable y fiscal actual, identificamos riesgos y oportunidades, y te decimos exactamente dónde estás parado.",
  },
  {
    step: "02",
    title: "Plan a tu medida",
    body: "Definimos un esquema de trabajo según tu industria y tamaño: qué hacemos nosotros, qué necesitamos de ti y en qué tiempos.",
  },
  {
    step: "03",
    title: "Regularización",
    body: "Si hay declaraciones pendientes, requerimientos o multas, las ponemos al corriente antes de que crezcan.",
  },
  {
    step: "04",
    title: "Operación mensual",
    body: "Contabilidad, nómina e impuestos al día, con reportes claros y un contacto directo que conoce tu negocio.",
  },
];

export type Differentiator = {
  title: string;
  body: string;
};

export const WHY_LUZAR: Differentiator[] = [
  {
    title: "Precisión sobre promesas",
    body: "No prometemos milagros fiscales. Aplicamos la ley con exactitud para que duermas tranquilo ante una revisión.",
  },
  {
    title: "Experiencia por industria",
    body: "Cada giro tiene reglas distintas. Trabajamos con comercio, construcción, restaurantes, industria, salud y transporte.",
  },
  {
    title: "Defensa ante el SAT",
    body: "Cuando llega un requerimiento o una multa, no te dejamos solo: respondemos y defendemos tu caso.",
  },
  {
    title: "Trato directo",
    body: "Hablas con quien lleva tu cuenta, no con un conmutador. Respuestas claras, sin tecnicismos innecesarios.",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Tengo declaraciones atrasadas, ¿pueden ayudarme?",
    answer:
      "Sí. La regularización de declaraciones pendientes es una de nuestras especialidades. Revisamos tu situación, calculamos lo que se debe y lo ponemos al corriente con la estrategia que menos te afecte.",
  },
  {
    question: "Me llegó un requerimiento o una multa del SAT, ¿qué hago?",
    answer:
      "Contáctanos antes de responder por tu cuenta. Analizamos el requerimiento, preparamos la respuesta y, cuando procede, gestionamos la cancelación de la multa o el requerimiento.",
  },
  {
    question: "Estoy arrancando un negocio, ¿desde cuándo necesito contador?",
    answer:
      "Desde el día uno. Empezar con la estructura fiscal correcta evita problemas costosos después. Te acompañamos en el alta, la elección de régimen y los primeros meses de operación.",
  },
  {
    question: "¿Trabajan con empresas de mi industria?",
    answer:
      "Atendemos comercio, construcción, restaurantes, industria, salud y transporte, entre otros. Cada uno tiene un tratamiento fiscal distinto y lo conocemos.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "En Ricardo Margain Zozaya 315, Loft 02, Piso 4, San Pedro Garza García, Nuevo León. Atendemos presencial y a distancia.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// Testimonios ilustrativos basados en los servicios reales. Reemplazar por
// reseñas verificadas de clientes antes de producción final.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Llegué con tres años de declaraciones atrasadas y la regularización fue mucho más ordenada de lo que esperaba. Hoy estoy al corriente y sin sustos.",
    name: "Restaurante en San Pedro",
    designation: "Cliente · Regularización fiscal",
    src: "/images/industry-restaurantes.webp",
  },
  {
    quote:
      "Nos cancelaron un requerimiento que nos tenía detenidos. La defensa fue clara y respondieron por nosotros ante la autoridad.",
    name: "Constructora en Monterrey",
    designation: "Cliente · Defensa ante el SAT",
    src: "/images/industry-construccion.webp",
  },
  {
    quote:
      "La nómina y los impuestos por fin salen a tiempo cada mes. Tener un contacto que conoce el negocio cambió todo.",
    name: "Comercio minorista",
    designation: "Cliente · Operación mensual",
    src: "/images/industry-comercio.webp",
  },
];

export const METRICS = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 6, suffix: "", label: "Industrias atendidas" },
  { value: 100, suffix: "%", label: "Declaraciones al corriente" },
  { value: 24, suffix: "h", label: "Respuesta a requerimientos" },
] as const;
