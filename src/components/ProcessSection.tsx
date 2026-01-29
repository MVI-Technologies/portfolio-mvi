import { motion } from 'framer-motion';
import { Search, FileText, Code, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Entendimento da necessidade',
    description: 'Conversamos para entender seu negócio, objetivos e desafios. Identificamos juntos a melhor solução.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Definição de escopo e prazos',
    description: 'Documentamos requisitos, funcionalidades e cronograma. Tudo de forma clara e acordada.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Desenvolvimento com entregas parciais',
    description: 'Construímos de forma incremental, com validações frequentes. Você acompanha a evolução em tempo real.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Ajustes, evolução e suporte',
    description: 'Refinamos o produto, implementamos melhorias e oferecemos suporte contínuo após a entrega.',
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 relative">
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
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado para garantir entregas de qualidade com total transparência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="glass rounded-2xl p-6 h-full relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white">
            <a href="#contato" className="group">
              Vamos conversar sobre seu projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
