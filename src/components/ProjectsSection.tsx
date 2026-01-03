import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Wrench, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Style Barba",
    category: "Landing Page",
    description:
      "Landing page moderna e elegante para barbearia, com design premium, tema escuro e detalhes dourados. Integração com WhatsApp para agendamentos.",
    link: "https://style-barba.vercel.app/",
    previewImage: "/projects/barbearia.png",
    gradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
  },
  {
    title: "Farmácia Vital Care",
    category: "Landing Page",
    description:
      "Landing page institucional para farmácia com foco em conversão via WhatsApp. Design moderno, responsivo e otimizado para dispositivos móveis.",
    link: "https://farm-cia-vital-care.vercel.app/",
    previewImage: "/projects/farmacia,png.png",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "AmoPet",
    category: "Landing Page",
    description:
      "Landing page para pet shop, destacando serviços e produtos. Design amigável e responsivo, com integração ao WhatsApp para contato rápido.",
    link: "https://amopetshop.vercel.app/",
    previewImage: "/projects/amopet.png",
    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
  },
  {
    title: "Flavour Forge",
    category: "Landing Page",
    description:
      "Landing page para empresa de gastronomia, destacando pratos e serviços. Design moderno e responsivo, com integração ao WhatsApp para agendamentos.",
    link: "https://flavour-forge-pages.vercel.app/",
    previewImage: "/projects/restaurante.png",
    gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20",
  },
  {
    title: "Frete Rápido",
    category: "Landing Page",
    description:
      "Landing page para empresa de logística, com foco em entrega rápida e eficiente. Design profissional e otimizado para conversão.",
    link: "https://freterapido.vercel.app/",
    previewImage: "/projects/frete.png",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/20",
  },
  {
    title: "MediConnect",
    category: "Plataforma",
    description:
      "Plataforma moderna de telemedicina conectando pacientes e médicos. Consultas online, assinatura digital de documentos, IA para prontuários e histórico médico completo.",
    link: "https://mediconnect-pied.vercel.app/",
    previewImage: "/projects/medi-connect.png",
    gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  },
  {
    title: "Motor Metrics",
    category: "Plataforma",
    description:
      "Plataforma para análise e métricas de desempenho. Dashboard moderno com visualizações em tempo real e relatórios detalhados.",
    link: "https://motor-metrics.vercel.app/",
    previewImage: "/projects/motor-metrics.png",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-pink-500/20",
  },
  {
    title: "Ling",
    category: "E-Commerce",
    description:
      "E-commerce moderno em construção com interface elegante e funcional. Sistema completo de catálogo de produtos, carrinho de compras e checkout integrado.",
    link: "#",
    previewImage: "/projects/ecommerce.png",
    isUnderConstruction: true,
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
  },
];

const ProjectCard = ({ project, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const isUnderConstruction = project.isUnderConstruction;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      {isUnderConstruction ? (
        <div className="relative h-full">
          <div className="relative glass-premium rounded-[2rem] overflow-hidden h-full border border-white/10 bg-gradient-to-br from-background/80 via-background/50 to-background/80 backdrop-blur-2xl">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-[2rem] opacity-50">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-xl`}
              />
            </div>

            {/* Construction badge premium */}
            <div className="absolute top-6 right-6 z-20">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-xl shadow-2xl shadow-amber-500/30 border border-amber-400/50"
              >
                <Wrench className="w-4 h-4 text-white animate-pulse" />
                <span className="text-xs font-black text-white tracking-wider uppercase">
                  Em Breve
                </span>
              </motion.div>
            </div>

            {/* Diagonal stripes pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(255,255,255,0.1) 20px,
                    rgba(255,255,255,0.1) 40px
                  )`,
                }}
              />
            </div>

            {/* Preview */}
            <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-background/20 to-background/40">
              {project.previewImage && (
                <>
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 blur-sm scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </>
              )}

              {/* Construction icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 blur-3xl" />
                  <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-2xl">
                    <Wrench
                      className="w-12 h-12 text-amber-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-8">
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground/70 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground/60 leading-relaxed line-clamp-3 font-medium">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative glass-premium rounded-[2rem] overflow-hidden h-full border border-white/10 hover:border-white/20 bg-gradient-to-br from-background/80 via-background/50 to-background/80 backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_20px_80px_-20px] hover:shadow-primary/30">
            {/* Animated gradient border on hover */}
            <motion.div
              className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={isHovered ? { rotate: 360 } : {}}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-2xl`}
              />
            </motion.div>

            {/* Sparkle effect */}
            <motion.div
              className="absolute top-8 right-8 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>

            {/* Preview with parallax */}
            <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-background/20 to-background/40">
              {project.previewImage && (
                <>
                  <motion.img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isHovered ? "scale(1.15)" : "scale(1)",
                      transition:
                        "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                  {/* Color overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </>
              )}

              {/* Icon with magnetic effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl shadow-primary/20">
                    <ArrowUpRight
                      className="w-9 h-9 text-primary"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={
                  isHovered
                    ? {
                        background: [
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                          "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)",
                        ],
                        x: ["-100%", "100%"],
                      }
                    : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            {/* Content with better hierarchy */}
            <div className="relative p-8">
              <div className="mb-5">
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-sm group-hover:from-primary/30 group-hover:to-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {project.category}
                  </span>
                </motion.span>
              </div>

              <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90 leading-relaxed line-clamp-3 font-medium transition-colors">
                {project.description}
              </p>

              {/* Hover arrow indicator */}
              <motion.div
                className="flex items-center gap-2 mt-6 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                animate={isHovered ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="uppercase tracking-wider">Ver projeto</span>
                <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
              </motion.div>
            </div>
          </div>
        </motion.a>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-40 relative overflow-hidden">
      {/* Premium background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {/* Premium header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Portfólio Premium
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Nossos{" "}
            </span>
            <span className="bg-gradient-to-br from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Experiências digitais que combinam{" "}
            <span className="text-primary font-bold">design excepcional</span>{" "}
            com{" "}
            <span className="text-primary font-bold">
              performance impecável
            </span>
          </p>
        </motion.div>

        {/* Premium grid */}
        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              Em breve, projetos reais serão exibidos aqui.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
