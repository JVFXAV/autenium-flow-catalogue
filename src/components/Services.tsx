import { Bot, Database, MessageSquare, BarChart3, Workflow, Users } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automação de Processos",
    description: "Automatize tarefas repetitivas e libere sua equipe para atividades estratégicas.",
    features: ["RPA (Robotic Process Automation)", "Integração de sistemas", "Fluxos de trabalho inteligentes"]
  },
  {
    icon: Database,
    title: "Integração de Dados",
    description: "Conecte todos os seus sistemas e centralize informações importantes.",
    features: ["APIs personalizadas", "Sincronização em tempo real", "Data warehousing"]
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Atendimento automatizado 24/7 com inteligência artificial avançada.",
    features: ["IA conversacional", "Múltiplos canais", "Análise de sentimentos"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Relatórios",
    description: "Dashboards automáticos e relatórios inteligentes para tomada de decisão.",
    features: ["KPIs em tempo real", "Relatórios automáticos", "Previsões com IA"]
  },
  {
    icon: Workflow,
    title: "Workflow Management",
    description: "Gerencie e otimize todos os fluxos de trabalho da sua empresa.",
    features: ["Aprovações automáticas", "Notificações inteligentes", "Tracking completo"]
  },
  {
    icon: Users,
    title: "Consultoria Especializada",
    description: "Análise completa dos seus processos e estratégia de automação.",
    features: ["Auditoria de processos", "Roadmap de automação", "Suporte contínuo"]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos soluções completas de automação empresarial, desde a análise dos processos até a implementação e suporte contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 p-4 w-fit rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
