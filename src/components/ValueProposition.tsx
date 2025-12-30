import { motion } from 'framer-motion';
import { GitBranch, MessageCircle, Sparkles } from 'lucide-react';

const values = [
  {
    icon: GitBranch,
    title: 'Processo bem definido',
    description: 'Planejamento, execução e entregas organizadas em etapas claras. Você sabe exatamente onde estamos a cada momento.',
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento próximo',
    description: 'Comunicação constante e alinhamento durante todo o projeto. Sem surpresas, com total transparência.',
  },
  {
    icon: Sparkles,
    title: 'Flexibilidade e custo-benefício',
    description: 'Soluções sob medida, sem estruturas engessadas. Adaptamos o projeto às suas necessidades reais.',
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que trabalhar <span className="text-gradient">conosco</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa abordagem combina metodologia, transparência e foco nas suas necessidades reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
