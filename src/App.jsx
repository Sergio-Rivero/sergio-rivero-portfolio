import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPinned,
  Route,
  ChevronRight,
  Download,
  Cookie,
  X,
  MonitorSmartphone,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  CalendarDays,
  Building2,
  Clock3,
  BadgeCheck,
} from "lucide-react";

import fondo from "./assets/arucas.jpg";
import perfil from "./assets/sergio.jpeg";
import logo from "./assets/srs1.png";

const GOOGLE_MAPS_EMBED_KEY = "AIzaSyCDAudzx6Y6It7TgZvahI-Oo0XV7aPQaPo";

const lightCardClass =
  "rounded-3xl border border-[#d6dfd8] bg-[#f8fbf8]/92 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.055)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white";

const profileConfig = {
  frontend: {
    id: "frontend",
    label: "Frontend",
    icon: MonitorSmartphone,
    accent: "text-emerald-600",
    chip:
      "border-emerald-400/40 bg-emerald-500/10 text-emerald-700 shadow-[0_8px_24px_rgba(16,185,129,0.10)]",
    heading: "Frontend orientado a producto y experiencia de usuario",
    intro:
      "Desarrollo interfaces claras, responsive y visualmente cuidadas. Mi objetivo es convertir ideas en productos web que transmitan orden, confianza y atención al detalle.",
    description:
      "Aporto una combinación de maquetación sólida, mentalidad de mejora y cuidado por la consistencia visual. Me interesa construir soluciones que no solo funcionen, sino que también dejen buena impresión desde el primer vistazo.",
    strengths: [
      "Interfaces modernas y responsive",
      "Componentes reutilizables",
      "Cuidado del detalle visual",
      "Mentalidad de mejora continua",
    ],
    tools: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 74 },
      { name: "Tailwind", level: 82 },
      { name: "Vite", level: 80 },
      { name: "GitHub", level: 68 },
      { name: "SQL", level: 56 },
    ],
  },
  docencia: {
    id: "docencia",
    label: "Docencia",
    icon: GraduationCap,
    accent: "text-sky-600",
    chip:
      "border-sky-400/40 bg-sky-500/10 text-sky-700 shadow-[0_8px_24px_rgba(56,189,248,0.10)]",
    heading: "Docencia con base técnica y comunicación clara",
    intro:
      "Puedo explicar, estructurar y acompañar procesos de aprendizaje con claridad. Mi perfil docente combina organización, capacidad comunicativa y enfoque práctico.",
    description:
      "La docencia refuerza una parte muy valiosa de mi perfil: transformar contenido técnico o complejo en explicaciones claras, ordenadas y útiles para distintos públicos.",
    strengths: [
      "Claridad al explicar",
      "Planificación y orden",
      "Capacidad de adaptación",
      "Comunicación cercana y didáctica",
    ],
    tools: [
      { name: "Presentaciones digitales", level: 90 },
      { name: "Canva / Genially / recursos visuales", level: 80 },
      { name: "YouTube / apoyo audiovisual", level: 72 },
      { name: "Planificación de contenidos", level: 88 },
      { name: "Comunicación oral", level: 86 },
      { name: "Organización del trabajo", level: 90 },
      { name: "Material didáctico", level: 84 },
      { name: "Herramientas online", level: 78 },
    ],
  },
  administracion: {
    id: "administracion",
    label: "Administración",
    icon: BriefcaseBusiness,
    accent: "text-amber-600",
    chip:
      "border-amber-400/40 bg-amber-500/10 text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.10)]",
    heading: "Administración con orden, análisis y fiabilidad",
    intro:
      "Aporto una base sólida en documentación, organización, seguimiento y trabajo metódico. Es un perfil que suma estructura y confianza a cualquier entorno profesional.",
    description:
      "Mi formación en ADE y experiencia administrativa refuerzan habilidades que también aportan valor en el ámbito digital: precisión, constancia, visión analítica y buena gestión de la información.",
    strengths: [
      "Organización y seguimiento",
      "Gestión documental",
      "Visión analítica",
      "Responsabilidad y constancia",
    ],
    tools: [
      { name: "Word / Documentación", level: 92 },
      { name: "Excel / hojas de cálculo", level: 82 },
      { name: "PowerPoint / presentaciones", level: 84 },
      { name: "Google Docs / Drive", level: 88 },
      { name: "Outlook / correo profesional", level: 86 },
      { name: "Gestión de información", level: 90 },
      { name: "Trabajo colaborativo", level: 82 },
      { name: "Planificación y control", level: 85 },
    ],
  },
};

const experienceItems = [
  {
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
  },
  {
    role: "Docente",
    place: "Formavanza",
    year: "2023",
    type: "Prácticas profesionales no laborales",
    duration: "40 horas",
    summary:
      "Prácticas de docencia para la formación para el empleo.",
    points: [
      "Apoyo en entorno formativo",
      "Planificación y acompañamiento docente",
      "Refuerzo de comunicación, estructura y claridad didáctica",
    ],
  },
  {
    role: "Abogado practicante",
    place: "Orbalia",
    year: "2022",
    type: "Prácticas externas",
    duration: "100 horas",
    summary:
      "Prácticas en Derecho con mención en Nuevas Tecnologías.",
    points: [
      "Apoyo en tareas jurídicas y documentales",
      "Análisis de información y seguimiento ordenado",
      "Experiencia en entorno profesional de alta precisión",
    ],
  },
  {
    role: "Programador web",
    place: "MCB Soluciones",
    year: "2021",
    type: "Formación en Centros de Trabajo",
    duration: "80 horas",
    summary:
      "Experiencia orientada a desarrollo y evolución de proyectos web.",
    points: [
      "Apoyo en desarrollo web",
      "Maquetación y adaptación de interfaces",
      "Contacto con trabajo técnico en entorno real",
    ],
  },
  {
    role: "Programador web",
    place: "Formavanza",
    year: "2020",
    type: "Formación en Centros de Trabajo",
    duration: "80 horas",
    summary:
      "Primera experiencia práctica orientada a desarrollo web.",
    points: [
      "Aprendizaje aplicado en entorno profesional",
      "Tareas de desarrollo y revisión",
      "Base práctica para evolución posterior en frontend",
    ],
  },
];

const educationItems = [
  {
    title: "Grado en Administración y Dirección de Empresas (ADE)",
    place: "Universidad Isabel I",
    status: "Graduado",
    year: "2019",
    description:
      "Base sólida en gestión, organización, análisis y visión empresarial.",
  },
  {
    title: "Grado en Derecho",
    place: "Universidad Isabel I",
    status: "En curso",
    year: "Actualidad",
    description:
      "Trayectoria académica complementaria con especial interés en nuevas tecnologías.",
  },
  {
    title: "Técnico Superior en Administración y Finanzas",
    place: "OSCUS",
    status: "Titulado",
    year: "2015",
    description:
      "Formación orientada a administración, documentación, control y trabajo metódico.",
  },
  {
    title: "Bachiller en Humanidades y Ciencias Sociales",
    place: "IES Arucas Domingo Rivero",
    status: "Titulado",
    year: "2013",
    description:
      "Base académica que refuerza análisis, expresión y comprensión estructurada.",
  },
];

const trainingItems = [
  {
    title: "Desarrollo de aplicaciones con tecnologías web",
    center: "Certificado de profesionalidad",
    year: "2021",
    hours: "590 horas",
    type: "Nivel 3",
    highlights: [
      "Aplicaciones web en entorno cliente y servidor",
      "Implantación en internet, intranet y extranet",
      "Base técnica sólida para desarrollo web",
    ],
  },
  {
    title: "Desarrollo de soluciones Microsoft Azure",
    center: "Diploma de especialización",
    year: "2021",
    hours: "100 horas",
    type: "Nivel 3",
    highlights: [
      "Entornos cloud en Azure",
      "Hosting y servicios en la nube",
      "Bases de datos SQL y NoSQL en Azure",
    ],
  },
  {
    title: "Docencia digital de la formación profesional",
    center: "Especialidad formativa SSCE31",
    year: "2025",
    hours: "60 horas",
    type: "Formación y Educación",
    highlights: [
      "Diseño e impartición de acciones formativas digitales",
      "Entornos virtuales de aprendizaje y herramientas online",
      "Evaluación de competencias en modalidad digital",
    ],
  },
  {
    title: "Docencia de la formación profesional para el empleo",
    center: "Certificado profesional",
    year: "2023",
    hours: "340 horas",
    type: "Nivel 3",
    highlights: [
      "Planificación y estructura de acciones formativas",
      "Comunicación didáctica y organización",
      "Transmisión clara de conocimientos",
    ],
  },
];

function SkillBar({ name, level, tone = "emerald" }) {
  const toneMap = {
    emerald: "from-emerald-400 to-green-500",
    sky: "from-sky-400 to-cyan-500",
    amber: "from-amber-400 to-yellow-500",
  };

  return (
    <div className="rounded-2xl border border-[#dde5df] bg-[#fbfcfb] p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-neutral-800">{name}</span>
        <span className="text-xs font-semibold text-neutral-500">{level}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${toneMap[tone]}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold md:text-5xl text-neutral-900">{title}</h2>
      {text && (
        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{text}</p>
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

function TimelineCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="rounded-[1.75rem] border border-[#d7dfd8] bg-[#f8faf8]/95 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            <Building2 size={16} />
            {item.place}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-neutral-900">
            {item.role || item.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          {item.year && (
            <TimelineBadge icon={CalendarDays} text={item.year} color="neutral" />
          )}
          {item.type && (
            <TimelineBadge icon={BadgeCheck} text={item.type} color="emerald" />
          )}
          {item.duration && (
            <TimelineBadge icon={Clock3} text={item.duration} color="amber" />
          )}
          {item.status && (
            <TimelineBadge icon={BadgeCheck} text={item.status} color="sky" />
          )}
          {item.hours && (
            <TimelineBadge icon={Clock3} text={item.hours} color="amber" />
          )}
        </div>
      </div>

      {(item.summary || item.description) && (
        <p className="mt-4 text-base leading-relaxed text-neutral-700">
          {item.summary || item.description}
        </p>
      )}

      {item.center && (
        <p className="mt-3 text-sm font-medium text-neutral-500">{item.center}</p>
      )}

      {item.highlights && (
        <div className="mt-5 grid gap-3">
          {item.highlights.map((point) => (
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

export default function App() {
  const [showCookies, setShowCookies] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("frontend");

  useEffect(() => {
    const accepted = localStorage.getItem("srs-cookies-accepted");
    if (!accepted) setShowCookies(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("srs-cookies-accepted", "true");
    setShowCookies(false);
  };

  const currentProfile = useMemo(
    () => profileConfig[selectedProfile],
    [selectedProfile]
  );

  const currentTone =
    selectedProfile === "docencia"
      ? "sky"
      : selectedProfile === "administracion"
      ? "amber"
      : "emerald";

  return (
    <div className="text-white bg-[#07100c]">
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mt-4 flex items-center justify-between rounded-full border border-white/15 bg-[rgba(35,42,38,0.58)] px-4 py-3 backdrop-blur-xl shadow-[0_10px_34px_rgba(0,0,0,0.28)] md:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo}
                alt="Logo SRS"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
              />
              <span className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-white/90 md:text-sm md:tracking-[0.25em]">
                Sergio Rivero Salazar
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#sobre" className="transition hover:text-white">
                Sobre mí
              </a>
              <a href="#enfoque" className="transition hover:text-white">
                Enfoque
              </a>
              <a href="#valores" className="transition hover:text-white">
                Raíces y valores
              </a>
              <a href="#experiencia" className="transition hover:text-white">
                Experiencia
              </a>
              <a href="#estudios" className="transition hover:text-white">
                Estudios
              </a>
              <a href="#formacion" className="transition hover:text-white">
                Formación
              </a>
              <a href="#contacto" className="transition hover:text-white">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[position:10%_center] md:bg-[position:22%_center]"
          style={{ backgroundImage: `url(${fondo})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.10)_48%,rgba(0,0,0,0.25)_100%)] md:bg-[linear-gradient(to_right,rgba(0,0,0,0.26)_0%,rgba(0,0,0,0.14)_24%,rgba(0,0,0,0.10)_46%,rgba(0,0,0,0.22)_100%)]" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pt-28 pb-16 md:gap-12 md:px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl">
            <motion.p
              className="mb-4 max-w-xl text-sm font-medium uppercase tracking-[0.33em] text-yellow-300/90 md:text-base"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Frontend Developer · React · Portfolio Personal
            </motion.p>

            <motion.h1
              className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sergio Rivero Salazar
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Desarrollo interfaces web modernas con foco en claridad, detalle y
              valor real para el usuario y para el negocio.
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
              className="mt-10 flex flex-wrap gap-3 text-sm text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
                Arucas · Gran Canaria
              </span>
              <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-sm">
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
            <div className="relative mt-4 md:mt-0">
              <div className="absolute inset-0 rounded-full bg-black/20 blur-2xl scale-105" />
              <img
                src={perfil}
                alt="Foto de Sergio Rivero Salazar"
                className="relative h-52 w-52 rounded-full border-2 border-white/85 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:h-60 sm:w-60 md:h-72 md:w-72"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center text-white/75">
            <span className="mb-2 text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/30">
              <motion.div
                className="mt-2 h-2 w-2 rounded-full bg-white"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#dbe4dc]"
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

          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                Me interesa construir productos digitales claros, útiles y bien
                presentados. Cuido tanto la parte visual como la lógica del
                trabajo: estructura, consistencia y mejora continua.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Busco una oportunidad donde seguir creciendo, aportar
                compromiso real y demostrar que un perfil con base diversa puede
                sumar mucho desde el primer día.
              </p>
            </div>

            <div className="grid gap-4">
              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                  Qué aporto
                </p>
                <p className="mt-3 text-neutral-700">
                  Claridad al trabajar, buena base técnica y una mentalidad muy
                  orientada al detalle y a la mejora.
                </p>
              </div>

              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                  Cómo trabajo
                </p>
                <p className="mt-3 text-neutral-700">
                  Con orden, implicación y una forma de hacer las cosas pensada
                  para construir confianza.
                </p>
              </div>

              <div className={lightCardClass}>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
                  Objetivo
                </p>
                <p className="mt-3 text-neutral-700">
                  Incorporarme a un entorno profesional donde crecer y aportar
                  valor real a proyectos y equipos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="enfoque"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#d5ded7]"
        style={{
          background: "linear-gradient(180deg, #edf3ee 0%, #e5ece6 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Enfoque profesional"
            title="Una presentación clara según el tipo de oportunidad."
            text="Mi foco principal está en frontend, pero también puedo aportar valor en docencia y administración. Aquí lo muestro de forma ordenada para que cada empresa vea rápidamente dónde puedo encajar mejor."
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
                      ? profile.chip
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
              className="grid gap-8 rounded-[2rem] border border-[#d4ddd6] bg-[#f6f9f6]/94 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.05)] backdrop-blur-sm md:grid-cols-[1.05fr_0.95fr] md:p-8"
            >
              <div>
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${currentProfile.chip}`}
                >
                  <currentProfile.icon size={18} />
                  {currentProfile.label}
                </div>

                <h3 className="mt-5 text-3xl font-bold md:text-4xl text-neutral-900">
                  {currentProfile.heading}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-neutral-800">
                  {currentProfile.intro}
                </p>

                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  {currentProfile.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentProfile.strengths.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#dce4de] bg-[#fbfcfb] p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className={
                          currentTone === "sky"
                            ? "text-sky-500"
                            : currentTone === "amber"
                            ? "text-amber-500"
                            : "text-emerald-500"
                        }
                      />
                      <span className="text-sm text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rounded-[1.75rem] border border-[#d9e2db] bg-[#fbfcfb] p-5">
                  <div className="mb-5">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.28em] ${currentProfile.accent}`}
                    >
                      Habilidades clave
                    </p>
                    <p className="mt-2 text-neutral-500">
                      Nivel orientativo según el enfoque seleccionado
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {currentProfile.tools.map((tool) => (
                      <SkillBar
                        key={tool.name}
                        name={tool.name}
                        level={tool.level}
                        tone={currentTone}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section
        id="valores"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#d2dbd4]"
        style={{
          background: "linear-gradient(180deg, #dde7de 0%, #e9f0ea 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Raíces y valores"
            title="Trabajo con implicación, criterio y sentido de pertenencia."
            text="He querido que este portfolio no solo muestre habilidades técnicas. También refleja cómo entiendo el trabajo: compromiso, constancia y respeto por las cosas bien hechas."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-neutral-700">
                Arucas forma parte de mi identidad. Por eso esta web también
                comunica una manera de estar en los proyectos: implicarme de
                verdad, cuidar los detalles y construir con seriedad.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Mi objetivo es que una empresa vea en mí no solo a un
                desarrollador, sino a una persona fiable, adaptable y con ganas
                de aportar valor desde dentro.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={lightCardClass}>
                <h3 className="text-xl font-semibold text-neutral-900">Compromiso</h3>
                <p className="mt-3 text-neutral-700">
                  Me implico de forma real en cada proyecto.
                </p>
              </div>

              <div className={lightCardClass}>
                <h3 className="text-xl font-semibold text-neutral-900">Lealtad</h3>
                <p className="mt-3 text-neutral-700">
                  Valoro pertenecer a equipos donde se construye con confianza.
                </p>
              </div>

              <div className={lightCardClass}>
                <h3 className="text-xl font-semibold text-neutral-900">Constancia</h3>
                <p className="mt-3 text-neutral-700">
                  Mejorar cada día forma parte de mi forma de trabajar.
                </p>
              </div>

              <div className={lightCardClass}>
                <h3 className="text-xl font-semibold text-neutral-900">Identidad</h3>
                <p className="mt-3 text-neutral-700">
                  Busco aportar una visión propia, clara y honesta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experiencia"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#d8e0da]"
        style={{
          background: "linear-gradient(180deg, #f4f7f4 0%, #e8efe9 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Experiencia"
            title="Experiencia real y aplicada en entornos diversos."
            text="Mi recorrido combina tecnología, docencia, administración y trabajo estructurado en contextos reales. No es un perfil lineal: es un perfil adaptable, con base sólida y capacidad de aportar en distintos tipos de equipo."
          />

          <div className="grid gap-6">
            {experienceItems.map((item) => (
              <TimelineCard key={`${item.place}-${item.role}-${item.year}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="estudios"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#d2dcd4]"
        style={{
          background: "linear-gradient(180deg, #e7eee8 0%, #f1f5f1 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Estudios"
            title="Base académica sólida, con continuidad y evolución."
            text="Mi formación combina empresa, administración, derecho y aprendizaje técnico. Esa mezcla aporta orden, capacidad analítica, constancia y una visión más completa del trabajo."
          />

          <div className="grid gap-6">
            {educationItems.map((item) => (
              <TimelineCard key={`${item.place}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="formacion"
        className="relative px-4 py-24 md:px-6 text-neutral-900 border-t border-[#d2dcd4]"
        style={{
          background: "linear-gradient(180deg, #edf3ee 0%, #f5f8f5 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Formación complementaria"
            title="Especialización útil, seleccionada por relevancia real."
            text="Aquí muestro la formación que más valor aporta a mi perfil actual: desarrollo web, cloud, docencia y competencias digitales aplicadas."
          />

          <div className="grid gap-6">
            {trainingItems.map((item) => (
              <TimelineCard key={`${item.title}-${item.year}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden px-4 py-24 md:px-6 border-t border-[#d6dfd8]"
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
                <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
                  ¿Hablamos?
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
                  Estoy abierto a oportunidades como desarrollador web y frontend.
                  Si crees que puedo aportar valor a tu proyecto o equipo,
                  estaré encantado de hablar contigo.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="mailto:sergioriverosalazar@gmail.com"
                    className="inline-flex items-center gap-3 rounded-full border border-red-200 bg-[#fbfcfb] px-6 py-3 font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-red-50"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
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
                    className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-[#fbfcfb] px-6 py-3 font-semibold text-neutral-900 shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:bg-neutral-100"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                      <Download size={18} />
                    </span>
                    Descargar CV
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[#d8e1da] bg-[#fbfcfb]/95 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                  <MapPinned size={16} />
                  Ubicación
                </div>

                <h3 className="text-2xl font-semibold text-neutral-900">
                  Arucas · Gran Canaria
                </h3>

                <p className="mt-3 text-neutral-700">
                  Mi identidad visual nace aquí, pero mi trabajo está pensado
                  para cualquier proyecto, equipo o entorno donde pueda aportar
                  valor, detalle y compromiso profesional.
                </p>

                <div className="mt-6 rounded-2xl overflow-hidden border border-[#dbe4dc] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_EMBED_KEY}&q=Arucas,Gran+Canaria`}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Arucas"
                  />
                  <div className="border-t border-[#dbe4dc] bg-[#f6f8f6] p-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href="https://www.google.com/maps/search/Arucas%2C+Espa%C3%B1a/?hl=es"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                      >
                        <MapPinned size={16} />
                        Ver en Google Maps
                      </a>

                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Arucas,+Las+Palmas"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                      >
                        <Route size={16} />
                        Calcular ruta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="footer-legal"
            className="mt-10 flex flex-col items-center gap-4 text-center text-sm text-neutral-600"
          >
            <p>© {new Date().getFullYear()} Sergio Rivero Salazar · Portfolio personal</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#" className="transition hover:text-neutral-900">
                Política de privacidad
              </a>
              <a href="#" className="transition hover:text-neutral-900">
                Política de cookies
              </a>
              <a href="#" className="transition hover:text-neutral-900">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/34687368578"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-400"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {showCookies && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-sm rounded-[2rem] bg-white px-8 pb-8 pt-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <button
              onClick={() => setShowCookies(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800"
              aria-label="Cerrar aviso de cookies"
            >
              <X size={18} />
            </button>

            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-200 shadow-[0_10px_30px_rgba(217,119,6,0.14)]">
                <Cookie size={38} className="text-amber-700" />
              </div>
            </div>

            <h3 className="mt-4 text-[3rem] font-light leading-none text-neutral-800">
              Cookies
            </h3>

            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Las cookies técnicas y funcionales son necesarias y no recopilan
              datos personales en esta web.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={acceptCookies}
                className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-neutral-900 shadow-sm transition hover:bg-amber-400"
              >
                Aceptar
              </button>

              <button
                onClick={acceptCookies}
                className="rounded-full border-2 border-emerald-500 bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Configurar Cookies
              </button>

              <a
                href="#footer-legal"
                className="text-sm text-sky-600 transition hover:text-sky-700"
              >
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
