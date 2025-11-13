import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock, Award } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para Automatizar?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Transforme sua empresa hoje mesmo. Agende uma consulta gratuita e descubra como nossas automações podem revolucionar seus processos.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://form.typeform.com/to/gsiGyHSi"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-primary-foreground font-semibold mb-1">Email</div>
              <div className="text-primary-foreground/80 text-sm">sales@autenium.com.br</div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5519996643174&text=Ol%C3%A1,%20tenho%20interesse%20em%20realizar%20uma%20consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-primary-foreground font-semibold mb-1">WhatsApp</div>
              <div className="text-primary-foreground/80 text-sm">(19) 99664-3174</div>
            </a>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Clock className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <div className="text-primary-foreground font-semibold mb-1">Suporte</div>
              <div className="text-primary-foreground/80 text-sm">24/7 Disponível</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-12 py-7 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://form.typeform.com/to/gsiGyHSi" target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita
            </a>
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-6 h-6 text-primary-foreground" />
                <div className="text-3xl font-bold text-primary-foreground">2 Anos</div>
              </div>
              <div className="text-primary-foreground/80">de Experiência</div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-primary-foreground" />
                <div className="text-3xl font-bold text-primary-foreground">100%</div>
              </div>
              <div className="text-primary-foreground/80">de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
