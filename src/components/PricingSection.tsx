import { motion } from 'framer-motion';
import { Package, Calendar, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const models = [
  {
    icon: Package,
    title: 'Projeto Fechado',
    description: 'Escopo definido, prazo e valor acordados. Ideal para projetos com requisitos bem definidos.',
    features: [
      'Escopo e prazo fechados',
      'Entregas em marcos',
      'Documentação completa',
    ],
  },
  {
    icon: Calendar,
    title: 'Pacote Mensal',
    description: 'Horas de desenvolvimento recorrentes para evolução contínua do seu produto.',
    features: [
      'Horas flexíveis por mês',
      'Priorização dinâmica',
      'Reuniões de alinhamento',
    ],
    highlighted: true,
  },
  {
    icon: Headphones,
    title: 'Suporte e Manutenção',
    description: 'Acompanhamento pós-entrega para correções, ajustes e pequenas melhorias.',
    features: [
      'Correções de bugs',
      'Pequenas melhorias',
      'Suporte técnico',
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="contratacao" className="py-24 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modelos de <span className="text-gradient">contratação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o formato que melhor se adapta às necessidades do seu projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${model.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {model.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-xs font-semibold text-primary-foreground">
                  Mais popular
                </div>
              )}
              <div className={`glass rounded-2xl p-8 h-full flex flex-col ${model.highlighted ? 'border-primary/50 shadow-glow' : ''}`}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{model.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{model.description}</p>
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-success" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={model.highlighted ? 'hero' : 'heroOutline'} 
                  className="w-full"
                  asChild
                >
                  <a href="#contato">Solicitar proposta</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
