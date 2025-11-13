import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análise",
    subtitle: "Identificamos oportunidades de automação nos seus processos atuais.",
    description: "Auditoria completa dos fluxos de trabalho, identificação de gargalos e mapeamento de oportunidades."
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia",
    subtitle: "Desenvolvemos uma estratégia personalizada para sua empresa.",
    description: "Criação do roadmap de automação, definição de prioridades e ROI esperado para cada projeto."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementação",
    subtitle: "Colocamos as automações em funcionamento com total segurança.",
    description: "Desenvolvimento, testes rigorosos, treinamento da equipe e go-live com suporte integral."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Otimização",
    subtitle: "Monitoramos e otimizamos continuamente os resultados.",
    description: "Acompanhamento de performance, ajustes contínuos e evolução das automações implementadas."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-muted-foreground">
            Nossa metodologia comprovada garante resultados excepcionais em cada etapa do processo de automação.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 md:left-20 top-24 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
              )}

              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-foreground/90 font-medium mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
