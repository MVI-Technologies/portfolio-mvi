import { motion } from 'framer-motion';
import { Globe, Server, Palette, Settings, Link2 } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, sistemas web, e-commerces e plataformas completas.',
  },
  {
    icon: Server,
    title: 'APIs e Back-end',
    description: 'Desenvolvimento de APIs robustas e arquiteturas escaláveis para sua aplicação.',
  },
  {
    icon: Palette,
    title: 'Front-end Moderno',
    description: 'Interfaces responsivas e intuitivas com as melhores práticas de UX/UI.',
  },
  {
    icon: Settings,
    title: 'Manutenção e Melhorias',
    description: 'Evolução contínua, correções e novas funcionalidades para sistemas existentes.',
  },
  {
    icon: Link2,
    title: 'Integrações',
    description: 'Conexão com serviços externos, APIs de terceiros e automações.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços <span className="text-gradient">oferecidos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de desenvolvimento para transformar suas ideias em produtos digitais funcionais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
