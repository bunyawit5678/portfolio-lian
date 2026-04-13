import { motion } from 'framer-motion';
import {
  Camera, Code2, Gamepad2, Mail, MapPin, GraduationCap,
  Clapperboard, Trophy, Cpu, Layers,
} from 'lucide-react';
import { PHOTOGRAPHER } from '../constants';

/* ─── Animation Variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut', delay: i * 0.07 },
  }),
};

/* ─── Skill Chip Component ────────────────────────────── */
function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 border border-neutral-700 bg-neutral-900 text-xs font-mono font-bold uppercase tracking-widest text-neutral-300 hover:border-newsroom-crimson hover:text-white transition-colors duration-200 cursor-default">
      {label}
    </span>
  );
}

/* ─── Skill Section ───────────────────────────────────── */
interface SkillGroupProps {
  icon: React.ReactNode;
  title: string;
  chips: string[];
  index: number;
}

function SkillGroup({ icon, title, chips, index }: SkillGroupProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="p-6 border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-colors duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-newsroom-crimson">{icon}</span>
        <h3 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => <Chip key={c} label={c} />)}
      </div>
    </motion.div>
  );
}

/* ─── Timeline Item ───────────────────────────────────── */
interface TimelineItemProps {
  year: string;
  title: string;
  org: string;
  description: string;
  index: number;
}

function TimelineItem({ year, title, org, description, index }: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="flex gap-6 group"
    >
      {/* Line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-newsroom-crimson mt-1.5 ring-4 ring-newsroom-crimson/20 group-hover:ring-newsroom-crimson/40 transition-all duration-300" />
        <div className="w-px flex-1 bg-neutral-800 mt-2" />
      </div>
      {/* Content */}
      <div className="pb-10">
        <span className="text-xs font-mono font-bold tracking-widest text-newsroom-crimson">
          {year}
        </span>
        <h4 className="text-lg font-display font-black uppercase tracking-tight text-white mt-1">
          {title}
        </h4>
        <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">{org}</p>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">{description}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────── */
export default function About() {
  const skills = [
    {
      icon: <Camera className="w-5 h-5" />,
      title: 'Visual Storytelling',
      chips: ['Sony Alpha', 'Adobe Lightroom', 'Capture One', 'DaVinci Resolve', 'Photojournalism'],
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Technical Development',
      chips: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Cursor AI'],
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: 'eSports & Production',
      chips: ['OBS Studio', 'Tournament Ops', 'Live Streaming', 'Event Direction'],
    },
  ];

  const timeline = [
    {
      year: '2024 – Present',
      title: 'Hybrid Photojournalist & Developer',
      org: 'Freelance / Self-directed',
      description:
        'Building production-grade web apps (restaurant management, automated certificate systems) with React, Firebase, and Next.js — while simultaneously shooting documentary and eSports events across Southeast Asia.',
    },
    {
      year: '2024',
      title: 'Lead Organizer — Horwang ROV Tournament',
      org: 'Horwang School, Bangkok',
      description:
        'Conceptualised, planned, and executed a full-scale inter-school eSports tournament during teaching internship. Managed brackets, live-stream production, and on-stage presentation for 100+ student participants.',
    },
    {
      year: '2023 – 2024',
      title: 'Teaching Intern — Matthayom 3 & 4',
      org: 'Horwang School, Bangkok',
      description:
        'Delivered structured lesson plans and mentored students aged 14–16. Channelled natural leadership into extracurricular programming, bridging formal education with technology and media literacy.',
    },
    {
      year: '2020 – 2024',
      title: 'BSc — Education / Computer & Communication Technology',
      org: 'Kasetsart University (KU82)',
      description:
        'Graduated with a dual foundation in pedagogy and technology. Developed the "Hybrid Edge" — the ability to teach, build, and capture stories across disciplines.',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* ── Hero: Two-column ────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 border-b border-neutral-800 pb-24">

        {/* Left — Portrait */}
        <motion.div variants={fadeUp} custom={0} className="relative aspect-[3/4] lg:aspect-auto lg:h-[600px] overflow-hidden border border-neutral-800 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop"
            alt={`${PHOTOGRAPHER.name} — Portrait`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover brightness-90"
          />
          {/* Accent stripe */}
          <div className="absolute left-0 top-0 h-full w-1 bg-newsroom-crimson" />
          {/* Name tag */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-newsroom-dark via-newsroom-dark/60 to-transparent">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-newsroom-crimson">
              {PHOTOGRAPHER.role}
            </p>
            <p className="text-2xl font-display font-black uppercase tracking-tighter text-white">
              {PHOTOGRAPHER.name} Pawarophat
            </p>
            <div className="flex items-center gap-2 mt-1 text-neutral-400 text-xs font-mono">
              <MapPin className="w-3 h-3" />
              {PHOTOGRAPHER.location}
            </div>
          </div>
        </motion.div>

        {/* Right — Bio */}
        <div className="flex flex-col justify-center gap-8">
          <motion.div variants={fadeUp} custom={1}>
            <p className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-newsroom-crimson mb-3">
              — Who I Am
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tighter text-white leading-none mb-6">
              The{' '}
              <span className="text-newsroom-crimson">Hybrid</span>{' '}
              Creative
            </h1>
            <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
              <p>
                I'm <strong className="text-white">Bunyawit Pawarophat</strong> — a Kasetsart University (KU82) alumnus who refuses to fit into a single lane. Where most creatives choose between the camera or the keyboard, I've spent the last few years mastering both.
              </p>
              <p>
                My career began in a classroom — teaching Matthayom 3 & 4 at Horwang School. While there, I didn't just teach; I built. I organised the{' '}
                <strong className="text-white">Horwang ROV Tournament</strong>, running every phase from bracket logic and venue setup to on-stage live-stream production. That event crystallised something important: I execute best at the intersection of <em className="text-white">vision, technology, and storytelling.</em>
              </p>
              <p>
                Today I deploy that hybrid skill set across documentary photography, eSports event coverage, and production-grade web development — building tools that are as polished as the stories I shoot.
              </p>
            </div>
          </motion.div>

          {/* Stat pills */}
          <motion.div variants={fadeUp} custom={2} className="grid grid-cols-3 gap-4">
            {[
              { icon: <Clapperboard className="w-4 h-4" />, value: '3+', label: 'Years Shooting' },
              { icon: <Layers className="w-4 h-4" />, value: '10+', label: 'Apps Shipped' },
              { icon: <Trophy className="w-4 h-4" />, value: '1', label: 'Tournament Directed' },
            ].map(({ icon, value, label }) => (
              <div key={label} className="border border-neutral-800 p-4 flex flex-col items-center text-center gap-1 hover:border-newsroom-crimson transition-colors duration-300">
                <span className="text-newsroom-crimson">{icon}</span>
                <span className="text-2xl font-display font-black text-white">{value}</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact pill */}
          <motion.div variants={fadeUp} custom={3}>
            <a
              href={`mailto:${PHOTOGRAPHER.email}`}
              className="inline-flex items-center gap-3 px-5 py-3 border border-newsroom-crimson text-newsroom-crimson text-sm font-bold uppercase tracking-widest hover:bg-newsroom-crimson hover:text-white transition-all duration-200 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              {PHOTOGRAPHER.email}
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── The Hybrid Edge — Skills Grid ───────────────── */}
      <motion.section variants={fadeUp} custom={4} className="mb-24">
        <div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6">
          <Cpu className="w-5 h-5 text-newsroom-crimson" />
          <h2 className="text-2xl font-display font-black uppercase tracking-tighter text-white">
            The Hybrid Edge
          </h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skills.map((s, i) => (
            <SkillGroup key={s.title} index={i} {...s} />
          ))}
        </motion.div>
      </motion.section>

      {/* ── Experience Timeline ──────────────────────────── */}
      <motion.section variants={fadeUp} custom={5}>
        <div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6">
          <GraduationCap className="w-5 h-5 text-newsroom-crimson" />
          <h2 className="text-2xl font-display font-black uppercase tracking-tighter text-white">
            The Journey
          </h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="pl-2"
        >
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} index={i} {...item} />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
