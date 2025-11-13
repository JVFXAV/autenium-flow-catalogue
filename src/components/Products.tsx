import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "AutoFlow Pro",
    description: "Automação completa de workflows e processos empresariais",
    plans: [
      {
        name: "Basic",
        price: "R$ 499",
        period: "/mês",
        features: [
          "Até 10 fluxos automatizados",
          "2 integrações de sistemas",
          "Suporte por email",
          "Dashboard básico",
          "1 usuário"
        ]
      },
      {
        name: "Premium",
        price: "R$ 1.499",
        period: "/mês",
        features: [
          "Fluxos ilimitados",
          "10 integrações de sistemas",
          "Suporte prioritário 24/7",
          "Dashboard avançado",
          "Até 5 usuários",
          "Automações com IA",
          "Relatórios personalizados"
        ],
        highlighted: true
      },
      {
        name: "Corporate",
        price: "R$ 3.999",
        period: "/mês",
        features: [
          "Tudo do Premium",
          "Integrações ilimitadas",
          "Suporte dedicado",
          "Dashboard enterprise",
          "Usuários ilimitados",
          "IA avançada",
          "Consultoria mensal inclusa",
          "SLA garantido"
        ]
      }
    ]
  },
  {
    name: "DataSync Hub",
    description: "Sincronização e integração avançada de dados empresariais",
    plans: [
      {
        name: "Basic",
        price: "R$ 399",
        period: "/mês",
        features: [
          "Até 5 fontes de dados",
          "Sincronização diária",
          "5GB de armazenamento",
          "API básica",
          "Suporte por email"
        ]
      },
      {
        name: "Premium",
        price: "R$ 999",
        period: "/mês",
        features: [
          "Até 20 fontes de dados",
          "Sincronização em tempo real",
          "50GB de armazenamento",
          "API avançada",
          "Webhooks",
          "Transformação de dados",
          "Suporte prioritário"
        ],
        highlighted: true
      },
      {
        name: "Corporate",
        price: "R$ 2.499",
        period: "/mês",
        features: [
          "Fontes ilimitadas",
          "Sincronização instantânea",
          "500GB de armazenamento",
          "API enterprise",
          "Webhooks avançados",
          "ETL personalizado",
          "Data warehouse incluso",
          "Suporte dedicado"
        ]
      }
    ]
  },
  {
    name: "AI Assistant Suite",
    description: "Chatbots e assistentes inteligentes com IA avançada",
    plans: [
      {
        name: "Basic",
        price: "R$ 599",
        period: "/mês",
        features: [
          "1 chatbot",
          "1.000 conversas/mês",
          "2 canais de comunicação",
          "IA básica",
          "Templates prontos"
        ]
      },
      {
        name: "Premium",
        price: "R$ 1.299",
        period: "/mês",
        features: [
          "3 chatbots",
          "10.000 conversas/mês",
          "Canais ilimitados",
          "IA avançada",
          "Personalização completa",
          "Análise de sentimentos",
          "Integração com CRM"
        ],
        highlighted: true
      },
      {
        name: "Corporate",
        price: "R$ 3.499",
        period: "/mês",
        features: [
          "Chatbots ilimitados",
          "Conversas ilimitadas",
          "Omnichannel completo",
          "IA enterprise",
          "Treinamento personalizado",
          "Voice assistant",
          "Analytics avançado",
          "White label"
        ]
      }
    ]
  }
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-gradient-to-br from-accent/20 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h2>
          <p className="text-xl text-muted-foreground">
            Soluções digitais completas com planos flexíveis para cada necessidade da sua empresa.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, productIndex) => (
            <div key={productIndex} className="animate-fade-in-up" style={{ animationDelay: `${productIndex * 0.2}s` }}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {product.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                      plan.highlighted
                        ? "border-primary bg-gradient-to-br from-primary/5 to-primary/10 scale-105 shadow-xl hover:shadow-2xl"
                        : "border-border/50 bg-card hover:border-primary/30 hover:shadow-xl"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        Mais Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground mb-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-6 text-base rounded-xl transition-all duration-300 ${
                        plan.highlighted
                          ? "bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg"
                          : "bg-secondary hover:bg-accent text-secondary-foreground"
                      }`}
                      asChild
                    >
                      <a href="https://form.typeform.com/to/gsiGyHSi" target="_blank" rel="noopener noreferrer">
                        Começar Agora
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
