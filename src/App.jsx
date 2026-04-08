import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPinned,
  Route,
  ChevronRight,
  Download,
  Cookie,
  ShieldCheck,
  ScrollText,
  MonitorSmartphone,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  CalendarDays,
  Building2,
  Clock3,
  BadgeCheck,
  BookOpen,
  Scale,
  Landmark,
  FolderKanban,
  MessagesSquare,
  Brain,
  FileText,
  Presentation,
  Sheet,
  FolderOpen,
  Send,
  Users,
  ClipboardList,
  Code2,
  Palette,
  GitBranch,
  Database,
  Workflow,
  Mic,
  Laptop2,
  LayoutTemplate,
  Languages,
  Sparkles,
  Leaf,
  Sun,
  Map,
  Menu,
  X,
} from "lucide-react";

import fondo from "./assets/arucas.jpg";
import perfil from "./assets/sergio.jpeg";

const surfaceCardClass =
  "rounded-[1.75rem] border border-[#d7e0d8] bg-[#fbfcfa]/95 p-6 shadow-[0_14px_34px_rgba(0,0,0,0.045)] backdrop-blur-sm";

const lightCardClass =
  "rounded-[1.65rem] border border-[#d8e0d9] bg-[#fcfdfb]/95 p-5 shadow-[0_12px_26px_rgba(0,0,0,0.045)] transition duration-200 hover:-translate-y-1 hover:bg-white";

const BRAND_LOGO = "/favicon-96x96.png";

const navItems = [
  { href: "#sobre", label: "Sobre mí" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#valores", label: "Raíces y valores" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#estudios", label: "Estudios" },
  { href: "#formacion", label: "Formación" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

const profileConfig = {
  frontend: {
    id: "frontend",
    label: "Frontend",
    icon: MonitorSmartphone,
    accentText: "text-emerald-700",
    softText: "text-emerald-600",
    chipActive:
      "border-emerald-300 bg-emerald-50 text-emerald-700 shadow-[0_10px_30px_rgba(16,185,129,0.10)]",
    bar: "bg-emerald-500",
    barTrack: "bg-emerald-100/80",
    strengthIcon: "text-emerald-500",
    skillsTitle: "Habilidades clave",
    heading: "Frontend con base visual sólida y criterio de producto",
    intro:
      "Convierto ideas en interfaces claras, responsive y agradables de usar. Me interesa que cada detalle transmita orden, confianza y una experiencia cuidada.",
    description:
      "Mi mayor fortaleza está en HTML y CSS, apoyado por una evolución real en JavaScript y React. Trabajo bien la parte visual, la estructura de la interfaz y la mejora continua del acabado.",
    strengths: [
      "HTML y CSS como base fuerte",
      "Sensibilidad visual y consistencia UI",
      "Buena adaptación con apoyo en React y JavaScript",
      "GitHub útil dentro del flujo real de trabajo",
    ],
    tools: [
      { name: "HTML y CSS", level: 90, icon: Palette },
      { name: "GitHub", level: 84, icon: GitBranch },
      { name: "JavaScript", level: 80, icon: Code2 },
      { name: "React", level: 79, icon: Workflow },
      { name: "Tailwind CSS", level: 77, icon: LayoutTemplate },
      { name: "Vite y flujo frontend", level: 74, icon: MonitorSmartphone },
      { name: "SQL base", level: 71, icon: Database },
    ],
  },
  docencia: {
    id: "docencia",
    label: "Docencia",
    icon: GraduationCap,
    accentText: "text-sky-700",
    softText: "text-sky-600",
    chipActive:
      "border-sky-300 bg-sky-50 text-sky-700 shadow-[0_10px_30px_rgba(56,189,248,0.11)]",
    bar: "bg-sky-500",
    barTrack: "bg-sky-100/80",
    strengthIcon: "text-sky-500",
    skillsTitle: "Habilidades clave",
    heading: "Docencia con comunicación oral fuerte y base digital",
    intro:
      "Puedo explicar, acompañar y hacer comprensible un contenido con claridad. Mi punto diferencial está en la comunicación oral, el trato cercano y el uso natural de herramientas digitales.",
    description:
      "En este enfoque pesa más mi capacidad para transmitir, apoyar y adaptar mensajes. La parte más estructural de planificación o material didáctico existe, pero mi fortaleza principal está en comunicar y conectar bien.",
    strengths: [
      "Comunicación oral como punto fuerte",
      "Docencia digital aplicada a entornos reales",
      "Uso natural de herramientas online",
      "Capacidad para explicar con claridad y cercanía",
    ],
    tools: [
      { name: "Comunicación oral", level: 91, icon: Mic },
      { name: "Docencia digital", level: 87, icon: Laptop2 },
      { name: "Herramientas online", level: 85, icon: Workflow },
      { name: "Presentaciones digitales", level: 84, icon: Presentation },
      { name: "Comunicación didáctica", level: 84, icon: MessagesSquare },
      { name: "Material didáctico", level: 76, icon: BookOpen },
      { name: "Planificación didáctica", level: 75, icon: ClipboardList },
      { name: "Organización del aula o grupo", level: 73, icon: Users },
    ],
  },
  administracion: {
    id: "administracion",
    label: "Administración",
    icon: BriefcaseBusiness,
    accentText: "text-amber-700",
    softText: "text-amber-600",
    chipActive:
      "border-amber-300 bg-amber-50 text-amber-700 shadow-[0_10px_30px_rgba(245,158,11,0.11)]",
    bar: "bg-amber-500",
    barTrack: "bg-amber-100/80",
    strengthIcon: "text-amber-500",
    skillsTitle: "Habilidades clave",
    heading: "Administración con orden, análisis y fiabilidad",
    intro:
      "Aporto una base sólida en documentación, organización, seguimiento y trabajo metódico. Es un perfil que suma estructura y confianza a cualquier entorno profesional.",
    description:
      "Aquí destacan especialmente mi visión analítica y mi forma de trabajar en equipo, junto con una buena base administrativa y documental reforzada por ADE y por experiencia real en contextos exigentes.",
    strengths: [
      "Visión analítica como fortaleza real",
      "Buen trabajo colaborativo y de equipo",
      "Gestión documental y seguimiento ordenado",
      "Responsabilidad, constancia y criterio práctico",
    ],
    tools: [
      { name: "Visión analítica", level: 90, icon: Brain },
      { name: "Trabajo colaborativo", level: 89, icon: Users },
      { name: "Gestión documental", level: 88, icon: FolderKanban },
      { name: "Organización y seguimiento", level: 87, icon: ClipboardList },
      { name: "Word y documentación", level: 86, icon: FileText },
      { name: "Google Docs / Drive", level: 84, icon: FolderOpen },
      { name: "Excel y hojas de cálculo", level: 82, icon: Sheet },
      { name: "Presentaciones profesionales", level: 80, icon: Presentation },
    ],
  },
};

const experienceItems = [
  {
    id: "biblioteca",
    role: "Auxiliar de biblioteca",
    place: "Excmo. Ayuntamiento de Arucas",
    year: "2024",
    type: "Contrato",
    duration: "109 días · 60% jornada",
    summary:
      "Experiencia real de atención, organización y soporte en entorno público.",
    points: [
      "Atención al público y apoyo diario en biblioteca",
      "Organización documental y control de materiales",
      "Trabajo metódico, trato cercano y responsabilidad constante",
    ],
    relevance: { frontend: 1, docencia: 2, administracion: 3 },
  },
  {
    id: "docencia-practicas",
    role: "Docente",
    place: "Formavanza",
    year: "2023",
    type: "Prácticas profesionales no laborales",
    duration: "40 horas",
    summary: "Prácticas de docencia para la formación para el empleo.",
    points: [
      "Apoyo en entorno formativo",
      "Planificación y acompañamiento docente",
      "Refuerzo de comunicación, estructura y claridad didáctica",
    ],
    relevance: { frontend: 2, docencia: 3, administracion: 1 },
  },
  {
    id: "orbalia",
    role: "Abogado practicante",
    place: "Orbalia",
    year: "2022",
    type: "Prácticas externas",
    duration: "100 horas",
    summary: "Prácticas en Derecho con mención en Nuevas Tecnologías.",
    points: [
      "Apoyo en tareas jurídicas y documentales",
      "Análisis de información y seguimiento ordenado",
      "Experiencia en entorno profesional de alta precisión",
    ],
    relevance: { frontend: 1, docencia: 1, administracion: 2 },
  },
  {
    id: "mcb",
    role: "Programador web",
    place: "MCB Soluciones",
    year: "2021",
    type: "Formación en Centros de Trabajo",
    duration: "80 horas",
    summary:
      "Experiencia orientada a desarrollo y evolución de proyectos web en entorno real.",
    points: [
      "Apoyo en desarrollo web y adaptación de interfaces",
      "Maquetación y revisión visual de pantallas",
      "Contacto directo con dinámica técnica de proyecto",
    ],
    relevance: { frontend: 3, docencia: 1, administracion: 1 },
  },
  {
    id: "fct-formavanza-web",
    role: "Programador web",
    place: "Formavanza",
    year: "2020",
    type: "Formación en Centros de Trabajo",
    duration: "80 horas",
    summary:
      "Primera experiencia práctica orientada a desarrollo web y base para mi evolución posterior en frontend.",
    points: [
      "Aprendizaje aplicado en entorno profesional",
      "Tareas de desarrollo, revisión y soporte técnico",
      "Base práctica para consolidar mentalidad frontend",
    ],
    relevance: { frontend: 2, docencia: 1, administracion: 1 },
  },
];

const educationItems = [
  {
    id: "derecho",
    title: "Grado en Derecho",
    place: "Universidad Isabel I",
    status: "En curso",
    year: "Actualidad",
    description:
      "Trayectoria académica complementaria con especial interés en nuevas tecnologías y actualización constante.",
    relevance: { frontend: 4, docencia: 4, administracion: 2 },
  },
  {
    id: "ade",
    title: "Grado en Administración y Dirección de Empresas (ADE)",
    place: "Universidad Isabel I",
    status: "Graduado",
    year: "2019",
    description:
      "Base sólida en gestión, organización, análisis y visión empresarial.",
    relevance: { frontend: 3, docencia: 3, administracion: 4 },
  },
  {
    id: "afy",
    title: "Técnico Superior en Administración y Finanzas",
    place: "OSCUS",
    status: "Titulado",
    year: "2015",
    description:
      "Formación orientada a administración, documentación, control y trabajo metódico.",
    relevance: { frontend: 1, docencia: 1, administracion: 3 },
  },
  {
    id: "bachiller",
    title: "Bachiller en Humanidades y Ciencias Sociales",
    place: "IES Arucas Domingo Rivero",
    status: "Titulado",
    year: "2013",
    description:
      "Base académica que refuerza análisis, expresión y comprensión estructurada.",
    relevance: { frontend: 1, docencia: 2, administracion: 1 },
  },
];

const certificates = [
  {
    id: "web",
    title: "Desarrollo de aplicaciones con tecnologías web",
    center: "Certificado de profesionalidad · Nivel 3",
    year: "2021",
    hours: "590 horas",
    highlights: [
      "Aplicaciones web en entorno cliente y servidor",
      "Implantación en internet, intranet y extranet",
      "Base técnica sólida para desarrollo web",
    ],
    relevance: { frontend: 5, docencia: 2, administracion: 1 },
  },
  {
    id: "azure",
    title: "Desarrollo de soluciones Microsoft Azure",
    center: "Diploma de especialización",
    year: "2021",
    hours: "100 horas",
    highlights: [
      "Servicios cloud y despliegue en Azure",
      "Bases de datos SQL y NoSQL en Azure",
      "Visión técnica complementaria para entornos web",
    ],
    relevance: { frontend: 4, docencia: 1, administracion: 1 },
  },
  {
    id: "ssce31",
    title: "Docencia digital de la formación profesional",
    center: "Especialidad formativa SSCE31",
    year: "2026",
    hours: "60 horas",
    highlights: [
      "Diseño e impartición de acciones formativas digitales",
      "Entornos virtuales de aprendizaje y herramientas online",
      "Evaluación de competencias en modalidad digital",
    ],
    relevance: { frontend: 2, docencia: 5, administracion: 2 },
  },
  {
    id: "ssce0110",
    title: "Docencia de la formación profesional para el empleo",
    center: "Certificado profesional",
    year: "2023",
    hours: "340 horas",
    highlights: [
      "Planificación y estructura de acciones formativas",
      "Comunicación didáctica y organización",
      "Transmisión clara de conocimientos",
    ],
    relevance: { frontend: 1, docencia: 4, administracion: 2 },
  },
];

const actionsFormativas = [
  {
    id: "sql",
    title: "Introducción a las bases de datos Microsoft SQL",
    center: "Acción formativa",
    year: "2020",
    hours: "90 horas",
    highlights: [
      "Consulta y estructura básica de bases de datos",
      "Refuerzo técnico útil para comprender entornos de desarrollo",
    ],
    relevance: { frontend: 4, docencia: 1, administracion: 2 },
  },
  {
    id: "micro",
    title: "Técnico de sistemas microinformáticos",
    center: "Acción formativa",
    year: "2008",
    hours: "554 horas",
    highlights: [
      "Versatilidad en soporte técnico y entorno informático",
      "Base adicional para resolver incidencias puntuales de hardware o software",
    ],
    relevance: { frontend: 3, docencia: 1, administracion: 1 },
  },
  {
    id: "ofimatica",
    title: "Técnico en software ofimático",
    center: "Acción formativa",
    year: "2008",
    hours: "395 horas",
    highlights: [
      "Base temprana en herramientas ofimáticas y productividad",
      "Apoyo útil para contextos administrativos y documentales",
    ],
    relevance: { frontend: 1, docencia: 1, administracion: 3 },
  },
];

const languageItems = [
  {
    id: "aleman",
    title: "Alemán aplicado a atención al público",
    center: "Idioma complementario",
    year: "2011",
    hours: "210 horas",
    highlights: [
      "Base funcional orientada a comunicación básica en atención al público",
      "Muestra apertura y versatilidad en trato con personas",
    ],
    relevance: { frontend: 1, docencia: 2, administracion: 2 },
  },
];

const legalCopy = {
  privacidad: {
    title: "Política de privacidad",
    content:
      "Este sitio no recopila datos personales a través de formularios internos ni crea perfiles automatizados. El único tratamiento de datos se produce cuando decides contactar voluntariamente por correo electrónico o por WhatsApp, utilizando servicios externos. En ese caso, la información compartida se utilizará solo para responder a tu mensaje o gestionar una posible oportunidad profesional.",
  },
  cookies: {
    title: "Política de cookies",
    content:
      "Esta web utiliza únicamente cookies técnicas o de preferencia local estrictamente necesarias para recordar la aceptación del aviso de cookies y mantener una experiencia básica de navegación. No se emplean cookies publicitarias ni herramientas de seguimiento invasivo dentro del sitio.",
  },
  aviso: {
    title: "Aviso legal",
    content:
      "Portfolio personal de Sergio Rivero Salazar, creado con fines de presentación profesional. Los contenidos, textos, estructura y diseño responden a una finalidad de visibilidad curricular y de marca personal. Cualquier referencia a formación, prácticas o experiencia se muestra con carácter informativo y profesional.",
  },
};

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.03em] text-neutral-950 md:text-6xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-600">
          {text}
        </p>
      )}
    </div>
  );
}

function TimelineBadge({ icon: Icon, text, color = "neutral" }) {
  const styles = {
    neutral: "border-neutral-300 bg-white text-neutral-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    sky: "border-sky-200 bg-sky-50 text-sky-700",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${styles[color]}`}
    >
      <Icon size={14} />
      {text}
    </span>
  );
}

function SkillBar({ name, level, icon: Icon, profileId }) {
  const styles = {
    frontend: {
      line: "bg-emerald-500",
      soft: "bg-emerald-100/80",
      icon: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    docencia: {
      line: "bg-sky-500",
      soft: "bg-sky-100/80",
      icon: "bg-sky-50 text-sky-600 border-sky-100",
    },
    administracion: {
      line: "bg-amber-500",
      soft: "bg-amber-100/80",
      icon: "bg-amber-50 text-amber-600 border-amber-100",
    },
  };

  const palette = styles[profileId];

  return (
    <div className="rounded-3xl border border-[#dde5df] bg-[#fcfdfb] p-4 shadow-[0_10px_22px_rgba(0,0,0,0.03)]">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${palette.icon}`}>
            <Icon size={18} />
          </span>
          <span className="text-sm font-medium text-neutral-800">{name}</span>
        </div>
        <span className="text-xs font-semibold text-neutral-500">{level}%</span>
      </div>

      <div className={`h-2 overflow-hidden rounded-full ${palette.soft}`}>
        <div className={`h-full rounded-full ${palette.line}`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function TimelineCard({ item, type = "default" }) {
  const pointIconColor = type === "docencia" ? "text-sky-500" : "text-emerald-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="rounded-[1.9rem] border border-[#d7dfd8] bg-[#f8faf8]/95 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.045)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            <Building2 size={16} />
            {item.place || item.center}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-neutral-900">
            {item.role || item.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 text-sm md:justify-end">
          {item.year && <TimelineBadge icon={CalendarDays} text={item.year} color="neutral" />}
          {item.status && <TimelineBadge icon={BadgeCheck} text={item.status} color="sky" />}
          {item.type && <TimelineBadge icon={BadgeCheck} text={item.type} color="emerald" />}
          {item.duration && <TimelineBadge icon={Clock3} text={item.duration} color="amber" />}
          {item.hours && <TimelineBadge icon={Clock3} text={item.hours} color="amber" />}
        </div>
      </div>

      {(item.summary || item.description) && (
        <p className="mt-4 text-base leading-relaxed text-neutral-600">
          {item.summary || item.description}
        </p>
      )}

      {item.highlights && (
        <div className="mt-5 grid gap-3">
          {item.highlights.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-[#dfe6e0] bg-[#fbfcfb] p-4"
            >
              <CheckCircle2 size={18} className={`mt-0.5 ${pointIconColor}`} />
              <span className="text-sm text-neutral-700">{point}</span>
            </div>
          ))}
        </div>
      )}

      {item.points && (
        <div className="mt-5 grid gap-3">
          {item.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-[#dfe6e0] bg-[#fbfcfb] p-4"
            >
              <CheckCircle2 size={18} className="mt-0.5 text-emerald-500" />
              <span className="text-sm text-neutral-700">{point}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function LegalPanelCard({ title, content, icon: Icon, accentClasses, expanded, onToggle }) {
  return (
    <div className={`rounded-[1.5rem] border bg-white/90 p-5 shadow-[0_10px_26px_rgba(0,0,0,0.035)] transition ${accentClasses}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-current/10 bg-current/10">
            <Icon size={18} />
          </span>
          <span className="text-lg font-semibold text-neutral-900">{title}</span>
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9e1db] bg-[#f7faf7] text-neutral-500 transition">
          <span className={`text-2xl leading-none transition ${expanded ? "rotate-45" : "rotate-0"}`}>+</span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <p className="text-sm leading-7 text-neutral-600">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function sortByProfile(items, profileId) {
  return [...items].sort((a, b) => (b.relevance?.[profileId] || 0) - (a.relevance?.[profileId] || 0));
}

export default function App() {
  const MAPS_EMBED_KEY = import.meta.env.VITE_GOOGLE_MAPS_EMBED_KEY;
  const [showCookies, setShowCookies] = useState(false);
  const [showCookieDetails, setShowCookieDetails] = useState(false);
  const [legalExpanded, setLegalExpanded] = useState(false);
  const [showContactTooltip, setShowContactTooltip] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("frontend");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeroPhotoVisible, setIsHeroPhotoVisible] = useState(false);
  const heroPhotoRef = useRef(null);

  useEffect(() => {
    const accepted = localStorage.getItem("srs-cookie-consent");
    if (!accepted) setShowCookies(true);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const node = heroPhotoRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroPhotoVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("srs-cookie-consent", "accepted-tech-only");
    setShowCookies(false);
    setShowCookieDetails(false);
  };

  const closeCookies = () => {
    localStorage.setItem("srs-cookie-consent", "info-closed-tech-only");
    setShowCookies(false);
    setShowCookieDetails(false);
  };

  const currentProfile = useMemo(() => profileConfig[selectedProfile], [selectedProfile]);
  const CurrentIcon = currentProfile.icon;

  const orderedExperience = useMemo(
    () => sortByProfile(experienceItems, selectedProfile),
    [selectedProfile]
  );
  const orderedEducation = useMemo(
    () => sortByProfile(educationItems, selectedProfile),
    [selectedProfile]
  );
  const orderedCertificates = useMemo(
    () => sortByProfile(certificates, selectedProfile),
    [selectedProfile]
  );
  const orderedActions = useMemo(
    () => sortByProfile(actionsFormativas, selectedProfile),
    [selectedProfile]
  );
  const orderedLanguages = useMemo(
    () => sortByProfile(languageItems, selectedProfile),
    [selectedProfile]
  );

  const studiesIntro =
    selectedProfile === "administracion"
      ? "En perfil administrativo se prioriza ADE por encaje directo, manteniendo Derecho como continuidad valiosa y actual."
      : "En frontend y docencia se sitúa primero Derecho por actualidad y continuidad formativa, manteniendo ADE como una base muy sólida.";

  const formationIntro =
    selectedProfile === "frontend"
      ? "Aquí gana peso la parte técnica y de desarrollo, seguida por la formación que aporta versatilidad útil al perfil digital."
      : selectedProfile === "docencia"
        ? "En docencia se prioriza la formación formativa y digital, dejando visible también la base técnica que refuerza credibilidad y versatilidad."
        : "En administración se muestra primero la formación que refuerza gestión, documentación, análisis y orden operativo, sin perder la parte tecnológica que suma valor.";

  const hasMapsKey = Boolean(MAPS_EMBED_KEY);
  const shouldShowFloatingAvatar = !isHeroPhotoVisible;

  const mapsEmbedSrc = `https://www.google.com/maps/embed/v1/view?key=${MAPS_EMBED_KEY}&center=28.1186923,-15.52317&zoom=17&maptype=satellite`;

  return (
    <div className="bg-[#07100c] text-white">
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-[rgba(48,56,52,0.55)] px-4 py-3 backdrop-blur-xl shadow-[0_10px_34px_rgba(0,0,0,0.28)] md:px-5">
            <a href="#inicio" className="flex min-w-0 items-center gap-3">
              <img
                src={BRAND_LOGO}
                alt="Logo SRS"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/90"
              />
              <span className="hidden truncate text-xs font-semibold uppercase tracking-[0.22em] text-white/90 md:block md:text-sm md:tracking-[0.25em]">
                Sergio Rivero Salazar
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:bg-white/15 md:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Cerrar menú"
                className="fixed inset-0 bg-black/45 backdrop-blur-[2px] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="mx-4 mt-3 rounded-[1.8rem] border border-white/12 bg-[rgba(36,43,40,0.92)] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl md:hidden"
              >
                <div className="mb-4 flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-3 py-3">
                  <img src={BRAND_LOGO} alt="Logo SRS" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/90" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.26em] text-white/55">Menú</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">Sergio Rivero Salazar</p>
                  </div>
                </div>

                <nav className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/88 transition hover:bg-white/10"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} className="text-white/55" />
                    </a>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden scroll-mt-28">
        <div
          className="absolute inset-0 bg-cover bg-[position:12%_center] md:bg-[position:22%_center]"
          style={{ backgroundImage: `url(${fondo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/12 to-black/72" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.10)_52%,rgba(0,0,0,0.22)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 pb-14 pt-28 md:grid-cols-[1.02fr_0.98fr] md:gap-12 md:px-6">
          <div className="max-w-4xl">
            <motion.p
              className="mb-4 max-w-xl text-sm font-medium uppercase tracking-[0.33em] text-yellow-300/95 md:text-base"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Frontend Developer · React · Portfolio personal
            </motion.p>

            <motion.h1
              className="max-w-4xl text-5xl font-extrabold leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sergio Rivero Salazar
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 md:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Desarrollo interfaces web modernas con foco en claridad, detalle y valor real para el usuario y para el negocio.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 font-semibold text-white shadow-[0_8px_30px_rgba(16,185,129,0.35)] transition duration-200 hover:scale-[1.02] hover:bg-green-500"
              >
                <Mail size={18} />
                Contactar
              </a>

              <a
                href="/sergio-rivero-salazar-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <Download size={18} />
                Descargar CV
              </a>

              <a
                href="#enfoque"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <ChevronRight size={18} />
                Ver enfoque
              </a>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-3 text-sm text-white/82"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="rounded-full border border-white/15 bg-black/18 px-4 py-2 backdrop-blur-sm">
                Arucas · Gran Canaria
              </span>
              <span className="rounded-full border border-white/15 bg-black/18 px-4 py-2 backdrop-blur-sm">
                Compromiso · Claridad · Mejora continua
              </span>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <div ref={heroPhotoRef} className="relative mt-2 md:mt-0">
              <div className="absolute inset-0 scale-105 rounded-full bg-black/18 blur-2xl" />
              <img
                src={perfil}
                alt="Foto de Sergio Rivero Salazar"
                className="relative h-40 w-40 rounded-full border-2 border-white/85 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:h-52 sm:w-52 md:h-72 md:w-72"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="sobre"
        className="relative border-t border-[#dbe4dc] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #e7efe8 0%, #f1f5f1 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Sobre mí"
            title="Un perfil técnico, versátil y orientado a aportar valor."
            text="Mi base principal está en el desarrollo web frontend, pero también puedo aportar en docencia y en entornos administrativos. Esa combinación me permite trabajar con visión práctica, orden y capacidad de adaptación."
          />

          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                Me interesa construir productos digitales claros, útiles y bien presentados. Cuido tanto la parte visual como la lógica del trabajo: estructura, consistencia y mejora continua.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                Busco una oportunidad donde seguir creciendo, aportar compromiso real y demostrar que un perfil con base diversa puede sumar mucho desde el primer día.
              </p>
            </div>

            <div className="grid gap-4 md:pt-1">
              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Qué aporto</p>
                <p className="mt-3 text-neutral-700">
                  Claridad al trabajar, buena base técnica y una mentalidad muy orientada al detalle y a la mejora.
                </p>
              </div>

              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Cómo trabajo</p>
                <p className="mt-3 text-neutral-700">
                  Con orden, implicación y una forma de hacer las cosas pensada para construir confianza.
                </p>
              </div>

              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">Objetivo</p>
                <p className="mt-3 text-neutral-700">
                  Incorporarme a un entorno profesional donde crecer, sumar y consolidar un perfil con proyección real.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 rounded-[2rem] border border-[#d8e1da] bg-[linear-gradient(180deg,rgba(255,255,255,0.46),rgba(255,255,255,0.2))] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.035)] md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
                La idea detrás de este portfolio
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-neutral-900 md:text-3xl">
                Una presentación construida con identidad, criterio y sentido profesional.
              </h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                Este portfolio no busca solo mostrar habilidades. También quiere reflejar una forma de entender el trabajo: claridad, implicación, mejora continua y sentido de pertenencia.
              </p>
              <p>
                El verde conecta con identidad y esperanza, el amarillo con esfuerzo y trabajo, y Arucas con origen y personalidad propia. La idea es sencilla: presentar un perfil técnico con raíces, cercanía y voluntad real de aportar valor a un equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="enfoque"
        className="relative border-t border-[#d5ded7] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #edf3ee 0%, #e5ece6 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Enfoque profesional"
            title="Una presentación clara según el tipo de oportunidad."
            text="El selector reorganiza experiencia, estudios y formación para resaltar primero lo más relevante según el perfil elegido, manteniendo una presentación limpia y profesional."
          />

          <div className="mb-8 flex flex-wrap gap-3">
            {Object.values(profileConfig).map((profile) => {
              const Icon = profile.icon;
              const isActive = selectedProfile === profile.id;

              return (
                <button
                  key={profile.id}
                  onClick={() => setSelectedProfile(profile.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? profile.chipActive
                      : "border-[#ccd7cf] bg-[#f7faf7] text-neutral-700 hover:bg-white"
                  }`}
                >
                  <Icon size={18} />
                  {profile.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProfile.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid gap-8 rounded-[2rem] border border-[#d4ddd6] bg-[#f6f9f6]/94 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm md:grid-cols-[1.03fr_0.97fr] md:p-8"
            >
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${currentProfile.chipActive}`}>
                  <CurrentIcon size={18} />
                  {currentProfile.label}
                </div>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">
                  {currentProfile.heading}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-neutral-700">{currentProfile.intro}</p>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">{currentProfile.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentProfile.strengths.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#dce4de] bg-[#fbfcfb] p-4"
                    >
                      <CheckCircle2 size={18} className={`mt-0.5 ${currentProfile.softText}`} />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-[#d7dfd8] bg-[#fbfcfa]/95 p-5 shadow-[0_12px_26px_rgba(0,0,0,0.04)]">
                <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${currentProfile.accentText}`}>
                  {currentProfile.skillsTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  Nivel orientativo según el enfoque seleccionado.
                </p>

                <div className="mt-5 grid gap-4">
                  {currentProfile.tools.map((tool) => (
                    <SkillBar
                      key={tool.name}
                      name={tool.name}
                      level={tool.level}
                      icon={tool.icon}
                      profileId={selectedProfile}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section
        id="valores"
        className="relative border-t border-[#d8e0da] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #e4ece5 0%, #edf3ee 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Raíces y valores"
            title="Trabajo con implicación, criterio y sentido de pertenencia."
            text="He querido que este portfolio no solo muestre habilidades técnicas. También refleja cómo entiendo el trabajo: compromiso, constancia y respeto por las cosas bien hechas."
          />

          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div className="space-y-5 text-lg leading-relaxed text-neutral-700">
              <p>
                Arucas forma parte de mi identidad. Por eso esta web también comunica una manera de estar en los proyectos: implicarme de verdad, cuidar los detalles y construir con seriedad.
              </p>
              <p>
                Mi objetivo es que una empresa vea en mí no solo a un desarrollador, sino a una persona fiable, adaptable y con ganas de aportar valor desde dentro.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:pt-2">
              {[
                {
                  title: "Compromiso",
                  text: "Me implico de forma real en cada proyecto.",
                  icon: Leaf,
                  accent: "from-emerald-50 to-white text-emerald-700",
                },
                {
                  title: "Lealtad",
                  text: "Valoro pertenecer a equipos donde se construye con confianza.",
                  icon: Sun,
                  accent: "from-amber-50 to-white text-amber-700",
                },
                {
                  title: "Constancia",
                  text: "Mejorar cada día forma parte de mi forma de trabajar.",
                  icon: Sparkles,
                  accent: "from-sky-50 to-white text-sky-700",
                },
                {
                  title: "Identidad",
                  text: "Busco aportar una visión propia, clara y honesta.",
                  icon: Map,
                  accent: "from-emerald-50 to-amber-50 text-emerald-700",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-[1.7rem] border border-[#d8e0d9] bg-white/90 p-5 shadow-[0_14px_32px_rgba(0,0,0,0.045)]"
                  >
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e7ece8] bg-gradient-to-br ${card.accent}`}>
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-neutral-900">{card.title}</h3>
                    <p className="mt-3 text-neutral-700">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="relative border-t border-[#d8e0da] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #f4f7f4 0%, #e8efe9 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Experiencia"
            title="Experiencia real y aplicada en entornos diversos."
            text="El orden cambia según el enfoque seleccionado para dar más peso a la experiencia que mejor conecta con el tipo de oportunidad, sin recargar la lectura con etiquetas innecesarias."
          />

          <div className="grid gap-6">
            {orderedExperience.map((item) => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="estudios"
        className="relative border-t border-[#d2dcd4] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #e7eee8 0%, #f1f5f1 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Estudios"
            title="Base académica sólida, con continuidad y evolución."
            text={studiesIntro}
          />

          <div className="grid gap-6">
            {orderedEducation.map((item) => (
              <TimelineCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="formacion"
        className="relative border-t border-[#d2dcd4] px-4 py-24 text-neutral-900 md:px-6"
        style={{
          background: "linear-gradient(180deg, #edf3ee 0%, #f5f8f5 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Formación complementaria"
            title="Especialización útil, ordenada por relevancia profesional."
            text={formationIntro}
          />

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-4xl">
                Certificados profesionales y especialización
              </h3>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-neutral-600">
                Formación con impacto directo en mis áreas principales de trabajo y en el posicionamiento profesional del perfil.
              </p>
              <div className="mt-6 grid gap-6">
                {orderedCertificates.map((item) => (
                  <TimelineCard key={item.id} item={item} type="docencia" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-4xl">
                Acciones formativas útiles
              </h3>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-neutral-600">
                Formación complementaria que aporta versatilidad técnica, capacidad de adaptación y una base más amplia de trabajo.
              </p>
              <div className="mt-6 grid gap-6">
                {orderedActions.map((item) => (
                  <TimelineCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 md:text-4xl">
                Idiomas
              </h3>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-neutral-600">
                Competencias complementarias que suman contexto de atención, comunicación y versatilidad personal.
              </p>
              <div className="mt-6 grid gap-6">
                {orderedLanguages.map((item) => (
                  <TimelineCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden border-t border-[#d6dfd8] px-4 py-24 md:px-6"
        style={{
          background: "linear-gradient(180deg, #e8ece8 0%, #f3f5f2 22%, #f5f7f4 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(140,140,140,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(140,140,140,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-[#d8e0d9] bg-[#f9faf8]/92 px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-md md:px-8 md:py-12">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
                  Contacto
                </p>
                <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">¿Hablamos?</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
                  Estoy abierto a oportunidades como desarrollador web y frontend. Si crees que puedo aportar valor a tu proyecto o equipo, estaré encantado de hablar contigo.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:sergioriverosalazar@gmail.com"
                    className="inline-flex items-center gap-3 rounded-full border border-rose-200 bg-[#fbfcfb] px-6 py-3 font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-rose-50"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <Mail size={18} />
                    </span>
                    Envíame un email
                  </a>

                  <a
                    href="https://wa.me/34687368578"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-[#fbfcfb] px-6 py-3 font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-green-50"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MessageCircle size={18} />
                    </span>
                    WhatsApp
                  </a>

                  <a
                    href="/sergio-rivero-salazar-cv.pdf"
                    download
                    className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-[#fbfcfb] px-6 py-3 font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-neutral-50"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                      <Download size={18} />
                    </span>
                    Descargar CV
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/70">
                  <MapPinned size={16} />
                  <span>Ubicación</span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-neutral-950">Arucas · Gran Canaria</h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-neutral-700">
                  Mi identidad visual nace aquí, pero mi trabajo está pensado para cualquier proyecto, equipo o entorno donde pueda aportar valor, detalle y compromiso profesional.
                </p>

                <div className="mt-6 rounded-[1.75rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,249,246,0.94))] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                  <div className="overflow-hidden rounded-[1.35rem] border border-[#dbe3dc] bg-[#eef3ee] shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
                    {!hasMapsKey ? (
                      <div className="flex min-h-[285px] items-center justify-center px-6 py-10 text-center text-sm leading-7 text-neutral-600">
                        Añade tu clave en <strong className="mx-1">.env.local</strong> con <strong>VITE_GOOGLE_MAPS_EMBED_KEY</strong> para mostrar aquí el mapa embebido de Arucas.
                      </div>
                    ) : (
                      <iframe
                        title="Mapa de Arucas"
                        src={mapsEmbedSrc}
                        width="100%"
                        height="285"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="block w-full"
                      />
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/maps/place/Parroquia+de+San+Juan+Bautista+de+Arucas/@28.1186923,-15.52317,17z"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:scale-[1.01] hover:bg-emerald-50"
                    >
                      <MapPinned size={16} />
                      Ver en Google Maps
                    </a>

                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Parroquia+de+San+Juan+Bautista+de+Arucas,+Arucas,+Gran+Canaria"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:scale-[1.01] hover:bg-neutral-50"
                    >
                      <Route size={16} />
                      Calcular ruta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 text-center text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} Sergio Rivero Salazar · Portfolio personal</p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-600">
              <button
                onClick={() => setLegalExpanded((prev) => !prev)}
                className="rounded-full border border-[#d7dfd8] bg-white/80 px-5 py-3 font-medium transition hover:bg-white"
              >
                {legalExpanded ? "Ocultar información legal" : "Mostrar información legal"}
              </button>
            </div>

            <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
              <LegalPanelCard
                title={legalCopy.privacidad.title}
                content={legalCopy.privacidad.content}
                icon={ShieldCheck}
                accentClasses="border-sky-100 text-sky-700"
                expanded={legalExpanded}
                onToggle={() => setLegalExpanded((prev) => !prev)}
              />
              <LegalPanelCard
                title={legalCopy.cookies.title}
                content={legalCopy.cookies.content}
                icon={Cookie}
                accentClasses="border-amber-100 text-amber-700"
                expanded={legalExpanded}
                onToggle={() => setLegalExpanded((prev) => !prev)}
              />
              <LegalPanelCard
                title={legalCopy.aviso.title}
                content={legalCopy.aviso.content}
                icon={ScrollText}
                accentClasses="border-emerald-100 text-emerald-700"
                expanded={legalExpanded}
                onToggle={() => setLegalExpanded((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </section>

      <>
        <style>{`
          @keyframes srsPulseAvatar {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes srsRotateRing {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <a
          href="https://wa.me/34687368578?text=Hola,%20he%20visto%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactar%20contigo"
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          onMouseEnter={() => setShowContactTooltip(true)}
          onMouseLeave={() => setShowContactTooltip(false)}
          className={`fixed bottom-5 right-5 z-50 transition duration-200 md:bottom-6 md:right-6 ${shouldShowFloatingAvatar ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <div className="relative">
            <AnimatePresence>
              {showContactTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 18, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-[78px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[#dce4de] bg-white/95 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.10)] backdrop-blur md:block"
                >
                  ¡Hola! ¿Hablamos?
                </motion.div>
              )}
            </AnimatePresence>
            <div className="relative h-[65px] w-[65px] md:h-[85px] md:w-[85px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 90deg, rgba(16,185,129,0.95), rgba(245,158,11,0.9), rgba(14,165,233,0.9), rgba(16,185,129,0.95))",
                  animation: "srsRotateRing 8s linear infinite",
                  filter: "drop-shadow(0 12px 30px rgba(16,185,129,0.28))",
                }}
              />
              <div className="absolute inset-[2.5px] rounded-full bg-white/90 backdrop-blur" />
              <div
                className="absolute inset-[6px] overflow-hidden rounded-full border border-white/70"
                style={{ animation: "srsPulseAvatar 3.2s ease-in-out infinite" }}
              >
                <img src={perfil} alt="Avatar de Sergio Rivero" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </a>
      </>

      {showCookies && (
        <div className="fixed inset-x-0 bottom-4 z-[100] px-4">
          <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-[#d9e0da] bg-white/96 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl md:p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 md:inline-flex">
                  <Cookie size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Cookies técnicas y funcionamiento básico</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Esta web utiliza únicamente almacenamiento local y cookies técnicas necesarias para recordar este aviso y mantener una navegación básica. No se usan cookies publicitarias ni analíticas de terceros.
                  </p>

                  <AnimatePresence initial={false}>
                    {showCookieDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 rounded-2xl border border-[#e2e8e3] bg-[#f7faf7] p-4 text-sm leading-6 text-neutral-600">
                          <p>
                            <strong className="font-semibold text-neutral-800">Técnicas:</strong> siempre activas para recordar la preferencia del aviso de cookies.
                          </p>
                          <p className="mt-2">
                            <strong className="font-semibold text-neutral-800">Analíticas y publicidad:</strong> no utilizadas en esta versión del portfolio.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:min-w-[210px]">
                <button
                  onClick={acceptCookies}
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                  Entendido
                </button>
                <button
                  onClick={() => setShowCookieDetails((prev) => !prev)}
                  className="rounded-full border border-[#d8dfd9] bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50"
                >
                  {showCookieDetails ? "Ocultar detalles" : "Ver detalles"}
                </button>
                <button
                  onClick={closeCookies}
                  className="rounded-full border border-[#d8dfd9] bg-white px-5 py-3 text-sm font-semibold text-neutral-600 transition hover:bg-neutral-50"
                >
                  Cerrar aviso
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}