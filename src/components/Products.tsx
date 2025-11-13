import { MessageSquare, Share2, Wrench, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: MessageSquare,
    name: "Chatbot MultiAgente Vendas+Suporte",
    description: "Sistema inteligente de atendimento automatizado que combina vendas e suporte em uma única solução integrada.",
    price: "300",
    features: [
      "Atendimento 24/7 automatizado",
      "IA conversacional avançada",
      "Integração com WhatsApp, Instagram e Facebook",
      "Sistema de vendas integrado",
      "Suporte técnico automatizado",
      "Analytics e relatórios detalhados",
      "Personalização completa do bot",
      "Treinamento contínuo com IA"
    ],
    highlighted: true
  },
  {
    icon: Share2,
    name: "Agente Gerenciador de Redes Sociais",
    description: "Rede social completamente autônoma com IA que cria, agenda e publica conteúdo relevante automaticamente.",
    price: "300",
    features: [
      "Criação automática de conteúdo",
      "Agendamento inteligente de posts",
      "Gerenciamento multi-plataformas",
      "Análise de engajamento em tempo real",
      "Respostas automáticas a comentários",
      "Hashtags otimizadas por IA",
      "Relatórios de performance",
      "Sugestões de melhorias contínuas"
    ],
    highlighted: true
  },
  {
    icon: Wrench,
    name: "Projetos Customizados",
    description: "Solução sob medida desenvolvida especificamente para as necessidades únicas do seu negócio.",
    price: "700",
    features: [
      "Análise completa do seu negócio",
      "Desenvolvimento personalizado",
      "Integração com sistemas existentes",
      "Automações específicas do seu fluxo",
      "Suporte dedicado prioritário",
      "Consultoria estratégica inclusa",
      "Atualizações e melhorias contínuas",
      "SLA garantido e documentação completa"
    ],
    highlighted: false
  }
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-gradient-to-br from-accent/20 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground">
            Soluções digitais inteligentes com IA avançada para automatizar e transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 animate-fade-in-up ${
                product.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/5 to-accent/10 hover:shadow-2xl hover:scale-105"
                  : "border-border/50 bg-card hover:border-primary/30 hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {product.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Popular
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-sm text-muted-foreground">A partir de</span>
                </div>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">R$ {product.price}</span>
                  <span className="text-muted-foreground mb-1">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${product.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base rounded-xl transition-all duration-300 ${
                  product.highlighted
                    ? "bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl"
                    : "bg-secondary hover:bg-accent text-secondary-foreground"
                }`}
                asChild
              >
                <a href="https://form.typeform.com/to/gsiGyHSi" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
