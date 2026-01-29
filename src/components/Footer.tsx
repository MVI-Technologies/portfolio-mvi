import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";
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
      // Configuração do EmailJS
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      // Validação das credenciais
      if (serviceId === "YOUR_SERVICE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        toast({
          title: "Configuração necessária",
          description:
            "Por favor, configure as credenciais do EmailJS nas variáveis de ambiente.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Parâmetros do email - correspondem ao template do EmailJS
      const templateParams = {
        from_name: formData.name,
        email: formData.email, // Usado no campo "To Email" do template
        title:
          formData.message.substring(0, 100) || "Contato através do formulário",
      };

      // Use o template ID da variável de ambiente ou substitua pelo seu template ID
      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";

      if (templateId === "YOUR_TEMPLATE_ID") {
        toast({
          title: "Configuração necessária",
          description:
            "Por favor, configure o VITE_EMAILJS_TEMPLATE_ID nas variáveis de ambiente com o ID do seu template.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error: any) {
      console.error("Erro ao enviar email:", error);

      let errorMessage =
        "Por favor, tente novamente ou entre em contato diretamente pelo email.";

      // Tratamento específico para erro 422
      if (error?.status === 422) {
        errorMessage =
          "Erro na configuração do template. Verifique se os nomes dos parâmetros no template correspondem aos enviados (from_name, email, title).";
      } else if (error?.text) {
        errorMessage = `Erro: ${error.text}`;
      }

      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Como Trabalhamos", href: "#processo" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contratação", href: "#contratacao" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer id="contato" className="pt-24 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Entre em contato</h3>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário ou use nossos canais diretos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <Textarea
                placeholder="Conte sobre seu projeto..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-secondary border-border resize-none"
              />
              <Button
                variant="hero"
                type="submit"
                className="w-full sm:w-auto"
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
              <div className="mb-4">
                <Logo size="lg" />
              </div>
              <p className="text-muted-foreground max-w-sm">
                Time dedicado de desenvolvedores criando soluções digitais com
                processo estruturado e acompanhamento próximo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Navegação</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contato</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    mvitech.contato@gmail.com
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    Remoto - Brasil
                  </li>
                </ul>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MVI Tech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
