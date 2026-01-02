import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Style Barba',
    category: 'Landing Page',
    description: 'Landing page moderna e elegante para barbearia, com design premium, tema escuro e detalhes dourados. Integração com WhatsApp para agendamentos.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://style-barba.vercel.app/',
  },
  {
    title: 'Farmácia Vital Care',
    category: 'Landing Page',
    description: 'Landing page institucional para farmácia com foco em conversão via WhatsApp. Design moderno, responsivo e otimizado para dispositivos móveis.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    link: 'https://farm-cia-vital-care.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exemplos de <span className="text-gradient">projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos desenvolvidos internamente e para parceiros. Demonstrações do tipo de solução que entregamos.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">Em breve, projetos reais serão exibidos aqui.</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="glass rounded-2xl overflow-hidden h-full hover:border-primary/50 transition-colors cursor-pointer">
                {/* Project Preview */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-xl bg-background/50 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  {/* Mock UI Elements */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-destructive/50" />
                      <div className="w-3 h-3 rounded-full bg-accent/50" />
                      <div className="w-3 h-3 rounded-full bg-success/50" />
                    </div>
                    <div className="h-2 w-1/2 bg-foreground/10 rounded" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </a>
            </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
