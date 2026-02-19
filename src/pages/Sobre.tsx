import { ShoppingCart, Globe, TrendingUp, Shield } from "lucide-react";
import kapudaLogo from "@/assets/kapuda-logo.jpg";

const Sobre = () => {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <img
            src={kapudaLogo}
            alt="Kapuda Vendas Online"
            className="w-24 h-24 rounded-full object-cover border-4 border-kapuda-orange shadow-xl mx-auto mb-6"
          />
          <span className="inline-block bg-primary/10 text-primary font-heading font-bold text-xs px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
            A Nossa História
          </span>
          <h1 className="section-title text-3xl md:text-4xl text-foreground mb-4">
            Sobre a <span className="text-kapuda-blue">Kapuda</span>{" "}
            <span className="text-kapuda-orange">Vendas Online</span>
          </h1>
        </div>

        {/* About Content */}
        <div className="product-card rounded-2xl p-8 border border-border mb-8">
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            A <strong className="text-foreground">Kapuda Vendas Online</strong> é uma plataforma dedicada à comercialização de
            produtos e cursos de qualidade a preços acessíveis. Acreditamos que o conhecimento e o acesso a produtos de
            excelência devem estar ao alcance de todos.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-5">
            A nossa missão é proporcionar aos nossos clientes produtos que transformem as suas vidas, oferecendo sempre
            um serviço de atendimento personalizado, transparente e de confiança.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Trabalhamos com produtos digitais e físicos cuidadosamente selecionados para garantir a máxima satisfação
            dos nossos clientes. Cada produto que comercializamos passa por criteriosa análise de qualidade antes de
            ser disponibilizado na nossa loja.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Globe className="w-8 h-8 text-kapuda-blue" />,
              title: "Alcance Global",
              desc: "Vendas online para todo o mundo com produtos de qualidade garantida.",
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-kapuda-orange" />,
              title: "Crescimento",
              desc: "Comprometidos em ajudar os nossos clientes a crescer pessoal e profissionalmente.",
            },
            {
              icon: <Shield className="w-8 h-8 text-kapuda-pink" />,
              title: "Confiança",
              desc: "Segurança e transparência em todas as transações e produtos oferecidos.",
            },
          ].map((v, i) => (
            <div key={i} className="product-card rounded-xl p-6 border border-border text-center hover:border-kapuda-orange/40 transition-all">
              <div className="flex justify-center mb-3">{v.icon}</div>
              <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team / CTA */}
        <div className="hero-section rounded-2xl p-8 text-center">
          <p className="text-primary-foreground/80 text-sm mb-3 uppercase tracking-widest font-heading font-semibold">
            Equipa
          </p>
          <h2 className="section-title text-2xl text-primary-foreground mb-2">
            Kim Francisco & Linda Francisco
          </h2>
          <p className="text-primary-foreground/70 text-sm mb-6 max-w-md mx-auto">
            Fundadores da Kapuda Vendas Online, apaixonados por trazer oportunidades de negócio e produtos de qualidade ao mercado.
          </p>
          <a
            href="https://pay.kuenha.com/855c4e61-9eec-477d-a169-5368ee38ba27?p=75c6bbdd-e493-4bec-8190-efdab3fcd23f"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 px-8 py-3 rounded-full text-primary-foreground font-heading font-bold"
          >
            <ShoppingCart className="w-4 h-4" />
            Ver Produtos
          </a>
        </div>
      </div>
    </main>
  );
};

export default Sobre;
