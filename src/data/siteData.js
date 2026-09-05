/**
 * ============================================================
 * siteData.js — Panel central de contenido de VizNet
 * ============================================================
 * Edita este archivo para actualizar TODA la información del
 * sitio sin tocar componentes ni lógica visual.
 *
 * Busca los comentarios "EDITAR AQUÍ" para ubicar rápidamente
 * cada sección editable.
 * ============================================================
 */

// EDITAR AQUÍ EL NOMBRE DEL PROYECTO Y DATOS GENERALES
export const company = {
  name: 'VizNet',
  tagline: 'Diseño y desarrollo web para negocios que quieren destacar',
  description:
    'VizNet crea páginas web profesionales que generan confianza desde el primer segundo y convierten visitantes en clientes.',
  whatsappNumber: '527721601652', // EDITAR AQUÍ EL NÚMERO DE WHATSAPP (formato internacional, sin +)
  whatsappDisplay: '772 160 1652',
  email: 'proyectos.viznet@gmail.com',
  location: 'Ixmiquilpan, Hidalgo, México',
  logoLight: '/images/logo/viznetlight.png', // EDITAR AQUÍ: logo para fondo claro (usa un logo oscuro/de color)
  logoDark: '/images/logo/viznetdark.png',  // EDITAR AQUÍ LA RUTA DEL LOGO
};

// EDITAR AQUÍ LOS ENLACES DE REDES SOCIALES (dejar '' si aún no existe)
export const socialLinks = {
  facebook: 'https://www.facebook.com/share/18yTFCpFFx/',
  instagram: 'https://www.instagram.com/viznet_?igsh=aDF0NjFrajB5emxt',
  tiktok: '',
  linkedin: '',
};

// EDITAR AQUÍ LOS ELEMENTOS DE NAVEGACIÓN
export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Precios', href: '#precios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

// EDITAR AQUÍ EL CONTENIDO DEL HERO
export const hero = {
  eyebrow: 'Desarrollo web profesional',
  headline: '¿Tu negocio todavía no tiene una página que impresione?',
  subheadline:
    'En VizNet diseñamos y desarrollamos la presencia digital de tu negocio para que cada visitante confíe en ti desde el primer segundo. Nosotros hacemos que tu primera impresión cuente.',
  ctaPrimary: 'Quiero destacar',
  ctaSecondary: 'Ver nuestros proyectos',
};

// EDITAR AQUÍ LOS BENEFICIOS DE "¿POR QUÉ VizNet?"
export const whyViznet = {
  title: '¿Por qué elegir VizNet?',
  subtitle:
    'No construimos páginas web genéricas. Construimos herramientas digitales pensadas para que tu negocio crezca.',
  items: [
    {
      title: 'Diseño que representa tu negocio',
      description:
        'Cada proyecto se diseña desde cero para reflejar la identidad real de tu marca, no una plantilla reciclada.',
    },
    {
      title: 'Experiencias pensadas para tus clientes',
      description:
        'Creamos recorridos claros y sencillos para que tus clientes encuentren lo que buscan y te contacten sin fricción.',
    },
    {
      title: 'Tecnología que trabaja para tu negocio',
      description:
        'Usamos herramientas modernas y escalables para que tu página crezca al mismo ritmo que tu negocio.',
    },
    {
      title: 'Acompañamiento cercano',
      description:
        'Te acompañamos desde la primera conversación hasta después de publicar tu sitio, con soporte real y directo.',
    },
  ],
};

// EDITAR AQUÍ LOS SERVICIOS
export const services = [
  {
    id: 'diseno-web',
    title: 'Diseño Web',
    description:
      'Interfaces modernas y a la medida de tu negocio, pensadas para transmitir profesionalismo desde el primer vistazo.',
  },
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    description:
      'Construcción de sitios rápidos, seguros y funcionales, listos para trabajar en cualquier dispositivo.',
  },
  {
    id: 'hosting',
    title: 'Hosting',
    description: 'Tu página siempre disponible, con hospedaje confiable incluido en tu paquete.',
  },
  {
    id: 'dominio',
    title: 'Dominio',
    description: 'Gestionamos tu dominio para que tu negocio tenga una dirección propia en internet.',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    description:
      'Los primeros 2 cambios después de la entrega están incluidos. Cambios adicionales se cotizan por separado.',
  },
];

// EDITAR AQUÍ LOS PASOS DEL PROCESO
export const process = [
  {
    number: '01',
    title: 'Hablamos',
    description: 'Conversamos sobre tu negocio, tus objetivos y lo que necesitas comunicar en línea.',
  },
  {
    number: '02',
    title: 'Diseñamos',
    description: 'Creamos una propuesta visual alineada con tu marca antes de escribir una sola línea de código.',
  },
  {
    number: '03',
    title: 'Desarrollamos',
    description: 'Construimos tu sitio con tecnología moderna, rápida y preparada para crecer.',
  },
  {
    number: '04',
    title: 'Publicamos',
    description: 'Ponemos tu página en línea y verificamos que todo funcione perfectamente.',
  },
  {
    number: '05',
    title: 'Crecemos',
    description: 'Te acompañamos después del lanzamiento para que tu presencia digital siga mejorando.',
  },
];

// EDITAR AQUÍ LOS PAQUETES Y PRECIOS
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    narrative: 'Tu negocio en Internet.',
    price: '999',
    currency: 'MXN',
    priceNote: 'pago único',
    highlighted: false,
    features: [
      'Diseño adaptable para celular',
      'Botón de WhatsApp',
      'Galería de imágenes',
      'Google Maps',
    ],
    ctaLabel: 'Elegir Starter',
    whatsappMessage: 'Hola, VizNet. Me interesa contratar el paquete Starter de $999 MXN.',
  },
  {
    id: 'negocios-plus',
    name: 'Negocios Plus',
    narrative: 'Tu negocio conectado con tu inventario.',
    price: '2,499',
    currency: 'MXN',
    priceNote: '$300 mensuales',
    highlighted: false,
    features: [
      'Todo lo incluido en Starter',
      'Catálogo de productos',
      'Visualización de inventario mediante Excel',
      'Buscador de productos',
    ],
    ctaLabel: 'Elegir Negocios Plus',
    whatsappMessage: 'Hola, VizNet. Me interesa contratar el paquete Negocios Plus de $2,499 MXN.',
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    narrative: 'Tu negocio tomando decisiones con datos.',
    price: '5,000',
    currency: 'MXN',
    priceNote: '$500 mensuales',
    highlighted: true,
    features: [
      'Dashboard interactivo privado',
      'Acceso exclusivo para el manager de la empresa',
      'Ventas por mes',
      'Productos más vendidos',
      'Tendencias y gráficas',
      'Resumen de indicadores',
      'Exportación de reportes',
    ],
    ctaLabel: 'Elegir Business Intelligence',
    whatsappMessage: 'Hola, VizNet. Me interesa contratar el paquete Business Intelligence de $5,000 MXN.',
  },
];

// EDITAR AQUÍ EL CONTENIDO DE LA SECCIÓN BUSINESS INTELLIGENCE
export const businessIntelligence = {
  eyebrow: 'Paquete Business Intelligence',
  title: 'Transformamos los datos de tu negocio en decisiones.',
  description:
    'Un panel privado donde puedes ver, a simple vista, cómo va tu negocio: qué se vende más, cómo cambian tus ventas mes a mes y qué tendencias debes aprovechar.',
  note: 'Vista representativa del servicio. El dashboard final se conecta a los datos reales de tu negocio.',
  kpis: [
    { label: 'Ventas del mes', value: '$184,320', delta: '+12.4%' },
    { label: 'Pedidos', value: '312', delta: '+8.1%' },
    { label: 'Ticket promedio', value: '$591', delta: '+3.6%' },
    { label: 'Productos activos', value: '96', delta: '+4' },
  ],
  monthlySales: [42, 58, 49, 63, 71, 66, 80, 74, 88, 95, 91, 102],
  topProducts: [
    { name: 'Librería Ideal', value: 82 },
    { name: 'NANIXHE', value: 64 },
    { name: 'Consultorio psicoterapéutico', value: 51 },
    { name: 'Curriculum', value: 38 },
  ],
};

// EDITAR AQUÍ LOS PROYECTOS DEL PORTAFOLIO (placeholders, no inventar datos reales)
export const portfolio = [
  {
    id: 'proyecto-1',
    name: 'Librería Ideal',
    client: 'Oscar Cruz Villar',
    category: 'Starter',
    description: 'Catálogo de libros, seccionado por categorías.',
    technologies: ['React', 'Tailwind CSS'],
    // 1. Usa barras normales (/)
    // 2. Omite "public" o el nombre de tu carpeta local de la ruta
    image: '/images/portfolio/libreriaideal.jpg',
    imageSecondary: '/images/portfolio/libreriaideal.jpg',
    url: '[INSERTAR URL DEL PROYECTO 1]',
    buttonLabel: 'Ver proyecto',
  },
  {
    id: 'proyecto-2',
    name: 'NANIXHE',
    client: 'Esmeralda',
    category: 'Starter',
    description:
      'Sabores auténticos que viajan directo desde Oaxaca hasta tu mesa. Cada platillo es una tradición que se come, una historia que se comparte.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    image: '/images/portfolio/NANIXHE.jpg',
    imageSecondary: '/images/portfolio/NANIXHE.jpg',
    url: 'https://a01713728-max.github.io/NANIXHE/',
    buttonLabel: 'Ver proyecto',
  },
  {
    id: 'proyecto-3',
    name: 'Consultorio psicoterapéutico',
    client: 'María Zoraida Cruz Villar',
    category: 'Starter',
    description:
      'Acompañamiento psicológico para niños, adolescentes y adultos mediante un enfoque terapéutico, cognitivo, conductual desde la ética y lo humano.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    image: '/images/portfolio/terapeuta.jpg',
    imageSecondary: '/images/portfolio/terapeuta.jpg',
    url: 'https://a01713728-max.github.io/Psicoterapia_Cruz_Villar/',
    buttonLabel: 'Ver proyecto',
  },
  {
    id: 'proyecto-4',
    name: 'Curriculum',
    client: 'Fernando Zavala Domínguez',
    category: 'Starter',
    description:
      'Curriculum en línea, donde se puede ver de forma interactiva, quién es, su formación, las tecnologías que sabe usar, los proyectos en los que está involucrado, sus certificaciones, y su contacto.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    image: '/images/portfolio/fercho.jpg',
    imageSecondary: '/images/portfolio/fercho.jpg',
    url: 'https://a01713728-max.github.io/Fernando/',
    buttonLabel: 'Ver proyecto',
  },
];

// EDITAR AQUÍ LA INFORMACIÓN DEL EQUIPO Y CURRÍCULUMS
export const team = [
  {
    id: 'integrante-1',
    name: 'José Arturo Pérez Cruz',
    role: 'Líder de programación',
    shortDescription:
      'Soy estudiante de Ingeniería en Robótica y Sistemas Digitales en el Tecnológico de Monterrey, con formación enfocada en el desarrollo de soluciones tecnológicas aplicadas, programación y análisis de sistemas.',
    photo: '/images/team/R2D2.jpg',
    // EDITAR AQUÍ EL CURRÍCULUM
    resume: 'Me especializo en desarrollo web, inteligencia artificial y automatización, creando soluciones tecnológicas para impulsar el crecimiento de pequeñas y medianas empresas.',
  },
  {
    id: 'integrante-2',
    name: 'Eduardo Andrés Ontiveros Angeles',
    role: 'Líder de estadística',
    shortDescription:
      'Soy estudiante de la licenciatura en Física y Tecnología Avanzada en la Universidad Autónoma del Estado de Hidalgo, con una formación enfocada al desarrollo de redes neuronales, análisis de datos, y modelación matemática.',
    photo: '/images/team/Lalo.jpg',
    // EDITAR AQUÍ EL CURRÍCULUM
resume: 'Mi fortaleza está en el análisis matemático, la resolución de problemas complejos y la programación, con una sólida base en cálculo y álgebra lineal. Combino el rigor de las ciencias exactas con el desarrollo de soluciones tecnológicas para crear sitios web y herramientas de análisis de datos respaldadas por una lógica precisa y orientadas a resolver problemas de negocio.',  
},
  {
    id: 'integrante-3',
    name: 'Juan Jordan',
    role: 'Líder de comunicación',
    shortDescription:
      'Estudiante con perfil técnico y creativo, con experiencia en ingeniería, producción audiovisual y artes escénicas. Destaco por mi rápida adaptación, trabajo en equipo y enfoque en soluciones prácticas.',
    photo: '/images/team/Juan.jpg',
    // EDITAR AQUÍ EL CURRÍCULUM
    resume: 'Líder y fundador de equipos de robótica con experiencia en competencias nacionales e internacionales. Ha trabajado como líder de campamentos de robótica, mentor juvenil y actor de teatro en Canadá. Destaca por su liderazgo, comunicación, gestión de proyectos y enseñanza de conceptos técnicos. Reconocido por su impacto comunitario y excelencia académica. Idiomas: Español (C2), Inglés (C1) y Alemán (A1).',
  },
];

// EDITAR AQUÍ LOS TESTIMONIOS (placeholders, no inventar testimonios reales)
export const testimonials = [
  {
    id: 'testimonio-1',
    name: 'Esme',
    company: 'NANIXHE',
    photo: '/images/testimonials/testimonio-1.jpg',
    // EDITAR AQUÍ EL TESTIMONIO
    quote: 'Muy confiable',
  },
  {
    id: 'testimonio-2',
    name: 'Cruz Villar',
    company: 'Cruz Villar',
    photo: '/images/testimonials/testimonio-2.jpg',
    quote: 'Muy buen trabajo y comprometidos',
  },
  {
    id: 'testimonio-3',
    name: 'Fernando',
    company: 'Fernando Zavala',
    photo: '/images/testimonials/testimonio-3.jpg',
    quote: 'Gran trabajo!',
  },
  
];

// EDITAR AQUÍ LAS PREGUNTAS FRECUENTES
export const faqs = [
  {
    question: '¿Cuánto tarda en hacerse una página?',
    answer:
      'El tiempo depende del paquete y la complejidad del proyecto, pero en promedio entregamos un sitio Starter en 1 a 2 semanas y proyectos más completos en 2 a 4 semanas.',
  },
  {
    question: '¿El dominio está incluido?',
    answer:
      'Sí, te ayudamos a gestionar tu dominio como parte del proceso. Los costos de renovación futura se te explican con total transparencia.',
  },
  {
    question: '¿El hosting está incluido?',
    answer: 'Sí, el hospedaje de tu sitio está incluido para que tu página esté siempre disponible.',
  },
  {
    question: '¿Puedo modificar mi catálogo?',
    answer:
      'Con el paquete Negocios Plus puedes actualizar tu inventario cargando un archivo de Excel, sin depender de conocimientos técnicos.',
  },
  {
    question: '¿Qué ocurre después de los primeros 2 cambios?',
    answer:
      'Los primeros 2 cambios posteriores a la entrega están incluidos sin costo. A partir del tercero, los cambios adicionales se cotizan por separado.',
  },
  {
    question: '¿La página funciona en celulares?',
    answer: 'Sí, todos nuestros sitios se diseñan primero para móvil y después se adaptan a tablet y escritorio.',
  },
  {
    question: '¿Puedo solicitar funciones personalizadas?',
    answer:
      'Sí, cada negocio es distinto. Cuéntanos qué necesitas y evaluamos la mejor forma de integrarlo a tu proyecto.',
  },
];

// EDITAR AQUÍ LOS TIPOS DE PROYECTO DEL FORMULARIO DE COTIZACIÓN
export const projectTypes = [
  'Página informativa',
  'Catálogo de productos',
  'Tienda en línea',
  'Dashboard / Business Intelligence',
  'Otro',
];

// EDITAR AQUÍ EL TEXTO DEL FOOTER
export const footer = {
  description:
    'Creamos experiencias digitales profesionales para negocios que quieren destacar, dentro y fuera de Ixmiquilpan.',
  copyright: `© ${new Date().getFullYear()} VizNet. Todos los derechos reservados.`,
};

// EDITAR AQUÍ LA METADATA DE SEO
export const seo = {
  title: 'VizNet | Diseño y Desarrollo Web Profesional en Ixmiquilpan, Hidalgo',
  description:
    'VizNet diseña y desarrolla páginas web profesionales para PyMEs en Ixmiquilpan, Hidalgo y cualquier lugar. Solicita tu cotización por WhatsApp.',
  keywords:
    'diseño web Ixmiquilpan, desarrollo web Ixmiquilpan, páginas web para negocios, diseño de páginas web para PyMEs',
};
