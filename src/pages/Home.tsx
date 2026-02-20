import { ShoppingCart, Star, CheckCircle2, Zap, Award, Clock, HeadphonesIcon, BookOpen, Brain, TrendingUp } from "lucide-react";
import cursoImg from "@/assets/curso-sobrancelhas.png";
import iaLucroImg from "@/assets/ia-zero-lucro.png";

const PRODUCT_URL = "https://pay.kuenha.com/855c4e61-9eec-477d-a169-5368ee38ba27?p=75c6bbdd-e493-4bec-8190-efdab3fcd23f";
const IA_PRODUCT_URL = "https://pay.kuenha.com/2e7b13ac-b792-4e6c-abf9-bb527f8690c6?p=75c6bbdd-e493-4bec-8190-efdab3fcd23f";

const features = [
  { icon: <Zap className="w-5 h-5 text-kapuda-orange" />, text: "Curso 100% online" },
  { icon: <Award className="w-5 h-5 text-kapuda-orange" />, text: "Certificado profissional" },
  { icon: <Clock className="w-5 h-5 text-kapuda-orange" />, text: "Acesso vitalício" },
  { icon: <HeadphonesIcon className="w-5 h-5 text-kapuda-orange" />, text: "Suporte direto" },
  { icon: <CheckCircle2 className="w-5 h-5 text-kapuda-orange" />, text: "Curso de Maquiagem GRÁTIS" },
  { icon: <CheckCircle2 className="w-5 h-5 text-kapuda-orange" />, text: "Bónus: dicas de vendas" },
];

const iaFeatures = [
  { icon: <Brain className="w-5 h-5 text-kapuda-pink" />, text: "IA do zero ao avançado" },
  { icon: <TrendingUp className="w-5 h-5 text-kapuda-pink" />, text: "Gerar lucro com IA" },
  { icon: <Clock className="w-5 h-5 text-kapuda-pink" />, text: "Trabalhos em menos de 1h" },
  { icon: <BookOpen className="w-5 h-5 text-kapuda-pink" />, text: "+20 páginas de conteúdo" },
  { icon: <CheckCircle2 className="w-5 h-5 text-kapuda-pink" />, text: "Sem capital inicial" },
  { icon: <Award className="w-5 h-5 text-kapuda-pink" />, text: "Acesso imediato" },
];

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-kapuda-orange/20 text-kapuda-orange font-heading font-bold text-xs px-4 py-1.5 rounded-full tracking-widest mb-4 uppercase">
            ✨ Kapuda Vendas Online — Os Melhores Produtos ao Seu Alcance
          </span>
          <h1 className="section-title text-3xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Transforme a Sua Vida<br />
            <span className="text-kapuda-orange">com os Nossos Produtos!</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Cursos e e-books que transformam conhecimento em dinheiro — mesmo começando do zero.
          </p>
          <a
            href="#produtos"
            className="btn-cta inline-flex items-center gap-3 px-8 py-4 rounded-full text-primary-foreground text-lg animate-pulse-glow"
          >
            <ShoppingCart className="w-5 h-5" />
            Ver Produtos
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl text-foreground mb-3">
              Os Nossos <span className="text-kapuda-orange">Produtos</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Escolha o produto que vai transformar a sua vida e comece hoje mesmo
            </p>
          </div>

          {/* Product 1 — Sobrancelhas */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-kapuda-orange/20 blur-xl"></div>
              <div className="relative product-card rounded-2xl overflow-hidden border border-kapuda-orange/20">
                <img
                  src={cursoImg}
                  alt="Curso de Designer de Sobrancelhas e Maquiagem Profissional"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-kapuda-pink text-primary-foreground font-heading font-black text-sm px-4 py-2 rounded-full shadow-lg rotate-6">
                GRÁTIS + Maquiagem!
              </div>
            </div>

            {/* Product 1 Info */}
            <div className="animate-fade-in-up">
              <span className="inline-block bg-kapuda-orange/10 text-kapuda-orange font-heading font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Curso em Destaque
              </span>
              <h2 className="section-title text-2xl md:text-3xl text-foreground mb-3">
                Curso de <span className="text-kapuda-blue">Designer de Sobrancelhas</span> e <span className="text-kapuda-pink">Maquiagem</span>
              </h2>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kapuda-orange text-kapuda-orange" />
                ))}
                <span className="text-muted-foreground text-sm ml-2">(Profissional)</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                💄 Já pensou em ganhar de <strong>150.000kz a 300.000kz</strong> por mês trabalhando com sobrancelhas e maquiagem?
                Com o nosso <strong>Curso de Designer de Sobrancelhas PROFISSIONAL</strong>, você aprende tudo do zero e ainda ganha
                o Curso Completo de Maquiagem totalmente <strong>GRÁTIS!</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                    {f.icon}
                    <span className="text-foreground text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-kapuda-blue/5 border border-kapuda-blue/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">Preço</p>
                    <p className="text-4xl font-heading font-black text-kapuda-blue">5.500 Kz</p>
                    <p className="text-kapuda-orange text-xs font-semibold">Acesso imediato após pagamento</p>
                  </div>
                  <div className="bg-kapuda-pink/10 text-kapuda-pink font-heading font-bold text-xs px-3 py-1 rounded-full border border-kapuda-pink/20">
                    OFERTA ESPECIAL
                  </div>
                </div>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full flex items-center justify-center gap-3 py-4 rounded-xl text-primary-foreground font-heading font-bold text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Comprar Agora — 5.500 Kz
                </a>
                <p className="text-center text-muted-foreground text-xs mt-3">
                  🔒 Pagamento seguro • Acesso imediato
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-5xl mx-auto border-t border-border mb-20"></div>

          {/* Product 2 — IA do Zero ao Lucro */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product 2 Info — left on desktop */}
            <div className="animate-fade-in-up order-2 lg:order-1">
              <span className="inline-block bg-kapuda-pink/10 text-kapuda-pink font-heading font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                E-book em Destaque
              </span>
              <h2 className="section-title text-2xl md:text-3xl text-foreground mb-3">
                <span className="text-kapuda-pink">IA do Zero</span> ao <span className="text-kapuda-orange">Lucro</span>
              </h2>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kapuda-pink text-kapuda-pink" />
                ))}
                <span className="text-muted-foreground text-sm ml-2">(Novidade)</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                🤖 Vivemos numa era em que quem domina a <strong>Inteligência Artificial</strong> sai da pobreza mais rápido — e quem ignora, fica para trás.
                Este e-book vai transformar conhecimento em dinheiro, mesmo começando do zero, <strong>sem capital, sem computador caro, sem contatos influentes.</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {iaFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                    {f.icon}
                    <span className="text-foreground text-sm font-medium">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-kapuda-pink/5 border border-kapuda-pink/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide font-semibold">Preço</p>
                    <p className="text-4xl font-heading font-black text-kapuda-pink">7.100 Kz</p>
                    <p className="text-kapuda-orange text-xs font-semibold">Acesso imediato após pagamento</p>
                  </div>
                  <div className="bg-kapuda-orange/10 text-kapuda-orange font-heading font-bold text-xs px-3 py-1 rounded-full border border-kapuda-orange/20">
                    NOVO
                  </div>
                </div>
                <a
                  href={IA_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-primary-foreground font-heading font-bold text-lg"
                  style={{ background: "linear-gradient(135deg, hsl(var(--kapuda-pink)), hsl(var(--kapuda-orange)))" }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Comprar Agora
                </a>
                <p className="text-center text-muted-foreground text-xs mt-3">
                  🔒 Pagamento seguro • Acesso imediato
                </p>
              </div>
            </div>

            {/* Product 2 Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-2 rounded-2xl bg-kapuda-pink/20 blur-xl"></div>
              <div className="relative product-card rounded-2xl overflow-hidden border border-kapuda-pink/20">
                <img
                  src={iaLucroImg}
                  alt="E-book IA do Zero ao Lucro — Inteligência Artificial para gerar renda"
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-kapuda-orange text-primary-foreground font-heading font-black text-sm px-4 py-2 rounded-full shadow-lg -rotate-6">
                NOVO PRODUTO!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 bg-kapuda-blue/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-2xl md:text-3xl text-foreground mb-3">
            O que você vai <span className="text-kapuda-orange">receber?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Tudo o que precisa para começar uma carreira de sucesso na área da beleza
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: "🎓", title: "Curso Online Completo", desc: "Aprenda no seu ritmo, a qualquer hora e em qualquer lugar" },
              { emoji: "📜", title: "Certificado Profissional", desc: "Receba um certificado reconhecido para alavancar a sua carreira" },
              { emoji: "💄", title: "Maquiagem GRÁTIS", desc: "Curso completo de maquiagem incluído sem custo adicional" },
              { emoji: "♾️", title: "Acesso Vitalício", desc: "Acesso permanente ao conteúdo, incluindo actualizações futuras" },
              { emoji: "🎧", title: "Suporte Directo", desc: "Apoio personalizado durante a sua jornada de aprendizagem" },
              { emoji: "💰", title: "Dicas de Vendas", desc: "Bónus exclusivo com estratégias para rentabilizar as suas competências" },
            ].map((item, i) => (
              <div key={i} className="product-card rounded-xl p-6 text-center border border-border hover:border-kapuda-orange/40 transition-all hover:shadow-lg">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-heading font-bold text-foreground text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center gap-3 px-10 py-4 rounded-full text-primary-foreground font-heading font-bold text-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Curso de Sobrancelhas
            </a>
            <a
              href={IA_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-primary-foreground font-heading font-bold text-lg"
              style={{ background: "linear-gradient(135deg, hsl(var(--kapuda-pink)), hsl(var(--kapuda-orange)))" }}
            >
              <ShoppingCart className="w-5 h-5" />
              E-book IA do Zero ao Lucro
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
