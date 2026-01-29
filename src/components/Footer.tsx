import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Logo from "@/components/Logo";

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (serviceId === "YOUR_SERVICE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        toast({
          title: "Configuração necessária",
          description: "Por favor, configure as credenciais do EmailJS nas variáveis de ambiente.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        title: formData.message.substring(0, 100) || "Contato através do formulário",
      };

      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";

      if (templateId === "YOUR_TEMPLATE_ID") {
        toast({
          title: "Configuração necessária",
          description: "Por favor, configure o VITE_EMAILJS_TEMPLATE_ID nas variáveis de ambiente.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error: any) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato diretamente pelo email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer id="contato" className="bg-slate-900 text-white pt-20 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Entre em contato</h3>
            <p className="text-slate-400 mb-8">
              Preencha o formulário e retornaremos em até 24 horas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <Textarea
                placeholder="Conte sobre seu projeto..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 resize-none"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    Enviando...
                    <Loader2 className="w-4 h-4 animate-spin ml-2" />
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-16"
          >
            <div className="mb-8">
              <Logo size="lg" variant="light" />
              <p className="text-slate-400 max-w-sm mt-4">
                Desenvolvimento de software sob demanda com processo estruturado, 
                transparência e foco em resultados reais para seu negócio.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-white">Navegação</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Contato</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-400">
                    <Mail className="w-4 h-4 text-primary" />
                    contato@mvitech.dev
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <Phone className="w-4 h-4 text-primary" />
                    (11) 99999-9999
                  </li>
                  <li className="flex items-center gap-3 text-slate-400">
                    <MapPin className="w-4 h-4 text-primary" />
                    São Paulo, Brasil
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MVI Tech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
