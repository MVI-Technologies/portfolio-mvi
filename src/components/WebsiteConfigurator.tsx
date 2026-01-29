import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ShoppingCart, 
  Send, 
  Plus,
  Minus,
  Globe,
  Database,
  CreditCard,
  Users,
  Mail,
  BarChart3,
  Shield,
  Smartphone,
  Search,
  MessageSquare,
  Calendar,
  FileText,
  Palette,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const features: Feature[] = [
  // Base
  { id: 'landing', name: 'Landing Page', description: 'Página inicial otimizada para conversão', icon: Globe, category: 'Base' },
  { id: 'responsive', name: 'Design Responsivo', description: 'Adaptado para todos os dispositivos', icon: Smartphone, category: 'Base' },
  { id: 'seo', name: 'SEO Básico', description: 'Otimização para buscadores', icon: Search, category: 'Base' },
  
  // Funcionalidades
  { id: 'auth', name: 'Sistema de Login', description: 'Autenticação de usuários', icon: Users, category: 'Funcionalidades' },
  { id: 'database', name: 'Banco de Dados', description: 'Armazenamento de informações', icon: Database, category: 'Funcionalidades' },
  { id: 'payment', name: 'Pagamentos', description: 'Integração com gateways', icon: CreditCard, category: 'Funcionalidades' },
  { id: 'email', name: 'Envio de E-mails', description: 'Notificações automáticas', icon: Mail, category: 'Funcionalidades' },
  { id: 'analytics', name: 'Analytics', description: 'Métricas e relatórios', icon: BarChart3, category: 'Funcionalidades' },
  
  // Integrações
  { id: 'chat', name: 'Chat/WhatsApp', description: 'Atendimento ao cliente', icon: MessageSquare, category: 'Integrações' },
  { id: 'calendar', name: 'Agendamento', description: 'Sistema de reservas', icon: Calendar, category: 'Integrações' },
  { id: 'cms', name: 'Painel Admin', description: 'Gerenciamento de conteúdo', icon: FileText, category: 'Integrações' },
  
  // Extras
  { id: 'custom-design', name: 'Design Personalizado', description: 'Identidade visual única', icon: Palette, category: 'Extras' },
  { id: 'security', name: 'Segurança Avançada', description: 'Proteção extra de dados', icon: Shield, category: 'Extras' },
  { id: 'performance', name: 'Alta Performance', description: 'Otimização de velocidade', icon: Zap, category: 'Extras' },
];

const categories = ['Base', 'Funcionalidades', 'Integrações', 'Extras'];

const WebsiteConfigurator = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getSelectedFeatureNames = () => {
    return features
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => f.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedNames = getSelectedFeatureNames();
    const message = `
*Novo Pedido de Orçamento - Monte seu Site*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}

*Funcionalidades selecionadas:*
${selectedNames.map(name => `• ${name}`).join('\n')}

*Descrição do projeto:*
${formData.description}
    `.trim();

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="monte-seu-site" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
            <ShoppingCart className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Personalize seu projeto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Monte seu <span className="text-gradient">Site Sob Medida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecione as funcionalidades que precisa e receba um orçamento personalizado. 
            Como um cardápio: você escolhe, nós preparamos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Selection */}
          <div className="lg:col-span-2 space-y-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground/90">{category}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features
                    .filter(f => f.category === category)
                    .map((feature) => {
                      const isSelected = selectedFeatures.includes(feature.id);
                      const Icon = feature.icon;
                      
                      return (
                        <motion.button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            relative p-4 rounded-xl border text-left transition-all duration-300
                            ${isSelected 
                              ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]' 
                              : 'bg-card/50 border-border/50 hover:border-border hover:bg-card/80'
                            }
                          `}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`
                              p-2 rounded-lg transition-colors
                              ${isSelected ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}
                            `}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm">{feature.name}</h4>
                              <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                            </div>
                            <div className={`
                              w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                              ${isSelected 
                                ? 'bg-primary border-primary text-primary-foreground' 
                                : 'border-muted-foreground/30'
                              }
                            `}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="glass border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    Seu Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {selectedFeatures.length === 0 ? (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-muted-foreground text-center py-8"
                      >
                        Selecione funcionalidades ao lado para montar seu site
                      </motion.p>
                    ) : (
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {features
                          .filter(f => selectedFeatures.includes(f.id))
                          .map((feature) => {
                            const Icon = feature.icon;
                            return (
                              <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                              >
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-primary" />
                                  <span className="text-sm">{feature.name}</span>
                                </div>
                                <button
                                  onClick={() => toggleFeature(feature.id)}
                                  className="p-1 hover:bg-destructive/20 rounded transition-colors"
                                >
                                  <Minus className="w-3.5 h-3.5 text-destructive" />
                                </button>
                              </motion.div>
                            );
                          })}
                      </div>
                    )}
                  </AnimatePresence>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-muted-foreground">Itens selecionados</span>
                      <span className="font-semibold text-primary">{selectedFeatures.length}</span>
                    </div>

                    {!showForm ? (
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={selectedFeatures.length === 0}
                        onClick={() => setShowForm(true)}
                      >
                        Solicitar Orçamento
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <motion.form
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        onSubmit={handleSubmit}
                        className="space-y-3"
                      >
                        <div>
                          <Label htmlFor="name" className="text-xs">Nome</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-xs">E-mail</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-xs">Telefone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="description" className="text-xs">Sobre o projeto</Label>
                          <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Conte um pouco sobre seu projeto..."
                            className="mt-1 min-h-[80px]"
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setShowForm(false)}
                            className="flex-1"
                          >
                            Voltar
                          </Button>
                          <Button type="submit" size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white">
                            Enviar
                            <Send className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </div>
                      </motion.form>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteConfigurator;
