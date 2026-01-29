import { motion } from 'framer-motion';
import { Globe, Server, Palette, Settings, Link2, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites & Landing Pages',
    description: 'Sites institucionais e landing pages otimizadas para conversão com design profissional e responsivo.',
  },
  {
    icon: Server,
    title: 'Sistemas Web & APIs',
    description: 'Plataformas completas, dashboards, CRMs e APIs robustas para seu negócio.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces modernas e intuitivas focadas na melhor experiência do usuário.',
  },
  {
    icon: Smartphone,
    title: 'Aplicações Responsivas',
    description: 'Soluções que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.',
  },
  {
    icon: Link2,
    title: 'Integrações & Automações',
    description: 'Conexão com ERPs, CRMs, gateways de pagamento e serviços externos.',
  },
  {
    icon: Settings,
    title: 'Manutenção & Suporte',
    description: 'Evolução contínua, atualizações de segurança e suporte técnico dedicado.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções completas de desenvolvimento para transformar suas ideias 
            em produtos digitais que geram resultados.
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
              <div className="bg-white rounded-2xl p-6 h-full border border-border shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
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
