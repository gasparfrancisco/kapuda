import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contactos = () => {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-heading font-bold text-xs px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
            Fale Connosco
          </span>
          <h1 className="section-title text-3xl md:text-4xl text-foreground mb-4">
            Entre em <span className="text-kapuda-orange">Contacto</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tem alguma dúvida sobre os nossos produtos? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="flex flex-col gap-5">
            <div className="product-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="bg-kapuda-blue/10 rounded-xl p-3 shrink-0">
                <Mail className="w-6 h-6 text-kapuda-blue" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground mb-1">Email</p>
                <a
                  href="mailto:joaquim9francisco@gmail.com"
                  className="text-kapuda-orange hover:text-kapuda-orange-light transition-colors text-sm font-medium break-all"
                >
                  joaquim9francisco@gmail.com
                </a>
                <p className="text-muted-foreground text-xs mt-1">Respondemos em até 24 horas</p>
              </div>
            </div>

            <div className="product-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="bg-kapuda-orange/10 rounded-xl p-3 shrink-0">
                <Phone className="w-6 h-6 text-kapuda-orange" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground mb-1">Telefone / WhatsApp</p>
                <a
                  href="tel:+244931929641"
                  className="text-kapuda-orange hover:text-kapuda-orange-light transition-colors text-sm font-medium"
                >
                  931 929 641
                </a>
                <p className="text-muted-foreground text-xs mt-1">Disponível via chamada ou WhatsApp</p>
              </div>
            </div>

            <div className="product-card rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="bg-kapuda-pink/10 rounded-xl p-3 shrink-0">
                <Clock className="w-6 h-6 text-kapuda-pink" />
              </div>
              <div>
                <p className="font-heading font-bold text-foreground mb-1">Horário de Atendimento</p>
                <p className="text-muted-foreground text-sm">Segunda a Sábado</p>
                <p className="text-kapuda-orange text-sm font-semibold">08:00 – 20:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form (visual only / email link) */}
          <div className="product-card rounded-2xl p-8 border border-border">
            <h2 className="font-heading font-bold text-xl text-foreground mb-6">Envie uma Mensagem</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Nome</label>
                <input
                  type="text"
                  placeholder="O seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-kapuda-blue/40 focus:border-kapuda-blue transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="o-seu@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-kapuda-blue/40 focus:border-kapuda-blue transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Como posso ajudar?"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-kapuda-blue/40 focus:border-kapuda-blue transition-all resize-none"
                />
              </div>
              <a
                href="mailto:joaquim9francisco@gmail.com"
                className="btn-cta w-full text-center py-3 rounded-xl text-primary-foreground font-heading font-bold"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactos;
