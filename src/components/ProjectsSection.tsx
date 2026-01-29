import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "MediConnect",
    category: "Plataforma de Saúde",
    description: "Plataforma de telemedicina conectando pacientes e médicos com consultas online, assinatura digital e IA para prontuários.",
    result: "Aumento de 40% nas consultas online",
    link: "https://mediconnect-pied.vercel.app/",
    previewImage: "/projects/medi-connect.png",
  },
  {
    title: "Motor Metrics",
    category: "Dashboard Analytics",
    description: "Plataforma de análise de métricas com dashboard moderno, visualizações em tempo real e relatórios detalhados.",
    result: "Redução de 60% no tempo de análise",
    link: "https://motor-metrics.vercel.app/",
    previewImage: "/projects/motor-metrics.png",
  },
  {
    title: "Frete Rápido",
    category: "Logística",
    description: "Landing page profissional para empresa de logística com foco em conversão e experiência do usuário.",
    result: "Aumento de 85% em leads qualificados",
    link: "https://freterapido.vercel.app/",
    previewImage: "/projects/frete.png",
  },
  {
    title: "Farmácia Vital Care",
    category: "Saúde & Varejo",
    description: "Landing page institucional para farmácia com design moderno, responsivo e otimizado para conversão.",
    result: "Crescimento de 120% no contato via WhatsApp",
    link: "https://farm-cia-vital-care.vercel.app/",
    previewImage: "/projects/farmacia,png.png",
  },
  {
    title: "Style Barba",
    category: "Serviços",
    description: "Landing page moderna para barbearia premium com design elegante, tema escuro e agendamento integrado.",
    result: "Aumento de 70% nos agendamentos online",
    link: "https://style-barba.vercel.app/",
    previewImage: "/projects/barbearia.png",
  },
  {
    title: "E-commerce Ling",
    category: "E-Commerce",
    description: "Plataforma de e-commerce moderna com catálogo de produtos, carrinho de compras e checkout integrado.",
    result: "Em desenvolvimento",
    link: "#",
    previewImage: "/projects/ecommerce.png",
    isComingSoon: true,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.isComingSoon ? (
        <div className="relative bg-white rounded-2xl overflow-hidden border border-border shadow-soft h-full">
          {/* Image */}
          <div className="aspect-[16/10] relative overflow-hidden bg-muted">
            {project.previewImage && (
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-full object-cover opacity-50 blur-sm"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
              <span className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                Em Breve
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-bold mt-2 mb-3 text-foreground/70">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <div className="relative bg-white rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-xl hover:border-primary/20 transition-all duration-500 h-full">
            {/* Image */}
            <div className="aspect-[16/10] relative overflow-hidden bg-muted">
              {project.previewImage && (
                <motion.img
                  src={project.previewImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              )}
              
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/90 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center text-white p-6">
                  <ExternalLink className="w-10 h-10 mx-auto mb-3" />
                  <span className="font-semibold">Ver Projeto</span>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-600 font-medium">{project.result}</span>
              </div>
            </div>
          </div>
        </a>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Projetos que Entregam Resultados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos para clientes de diversos setores,
            sempre focando em qualidade, performance e resultados mensuráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "Projetos Entregues" },
            { value: "100%", label: "Clientes Satisfeitos" },
            { value: "3+", label: "Anos de Experiência" },
            { value: "24h", label: "Tempo de Resposta" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
