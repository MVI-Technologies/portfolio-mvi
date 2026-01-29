import { motion } from 'framer-motion';
import { Shield, Clock, Users, Lightbulb, Target, Headphones } from 'lucide-react';

const differentials = [
  {
    icon: Shield,
    title: 'Transparência Total',
    description: 'Processo claro com atualizações constantes. Você acompanha cada etapa do desenvolvimento.'
  },
  {
    icon: Clock,
    title: 'Entregas Pontuais',
    description: 'Cumprimos prazos com planejamento estruturado e gestão eficiente de projetos.'
  },
  {
    icon: Users,
    title: 'Equipe Dedicada',
    description: 'Profissionais comprometidos com a qualidade e o sucesso do seu projeto.'
  },
  {
    icon: Lightbulb,
    title: 'Soluções Inovadoras',
    description: 'Tecnologias modernas e boas práticas para resultados de alto impacto.'
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Desenvolvemos pensando no retorno real para o seu negócio e seus clientes.'
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento pós-entrega para garantir o funcionamento ideal da solução.'
  }
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos metodologia sólida, comunicação transparente e expertise técnica 
            para entregar soluções que realmente fazem a diferença.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-border shadow-soft hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
