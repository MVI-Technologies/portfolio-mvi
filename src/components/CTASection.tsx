import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Vamos começar?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos tirar sua ideia do papel com{' '}
            <span className="text-gradient">organização e transparência</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Agende uma conversa gratuita para discutirmos seu projeto. Sem compromisso, apenas uma troca de ideias para entendermos como podemos ajudar.
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href="#contato" className="group">
              Agendar conversa gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
