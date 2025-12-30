import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como funciona o início do projeto?',
    answer: 'Começamos com uma conversa inicial para entender suas necessidades. Em seguida, fazemos uma análise e apresentamos uma proposta com escopo, cronograma e investimento. Após aprovação, iniciamos o desenvolvimento com entregas incrementais.',
  },
  {
    question: 'Posso acompanhar o desenvolvimento?',
    answer: 'Sim! Mantemos comunicação constante durante todo o projeto. Você terá acesso a atualizações regulares, demonstrações das entregas parciais e canais diretos para tirar dúvidas e dar feedback.',
  },
  {
    question: 'O código desenvolvido é meu?',
    answer: 'Sim, após a conclusão e pagamento do projeto, todo o código fonte e direitos são transferidos para você. Fornecemos documentação e acesso completo aos repositórios.',
  },
  {
    question: 'Quais tecnologias vocês utilizam?',
    answer: 'Trabalhamos com tecnologias modernas e consolidadas como React, Node.js, TypeScript, PostgreSQL, entre outras. A escolha da stack é feita de acordo com as necessidades específicas de cada projeto.',
  },
  {
    question: 'Existe suporte após a entrega?',
    answer: 'Sim, oferecemos pacotes de suporte e manutenção para acompanhamento pós-entrega. Isso inclui correções de bugs, pequenas melhorias e suporte técnico contínuo.',
  },
  {
    question: 'Qual o prazo médio de desenvolvimento?',
    answer: 'O prazo varia de acordo com a complexidade do projeto. Projetos simples podem levar algumas semanas, enquanto sistemas mais complexos podem levar alguns meses. Sempre definimos prazos realistas na proposta inicial.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
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
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso processo de trabalho e serviços.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
