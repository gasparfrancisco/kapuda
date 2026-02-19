import { Shield, Eye, Database, Cookie, Mail } from "lucide-react";

const Privacidade = () => {
  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-kapuda-blue/10 rounded-full p-4">
              <Shield className="w-10 h-10 text-kapuda-blue" />
            </div>
          </div>
          <h1 className="section-title text-3xl md:text-4xl text-foreground mb-4">
            Política de <span className="text-kapuda-blue">Privacidade</span>
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Section 1 */}
          <div className="product-card rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kapuda-blue/10 rounded-lg p-2">
                <Eye className="w-5 h-5 text-kapuda-blue" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">1. Informações que Recolhemos</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Kapuda Vendas Online pode recolher informações pessoais quando visita o nosso site ou realiza uma compra,
              incluindo: nome, endereço de email, número de telefone e informações de pagamento. Estas informações são
              utilizadas exclusivamente para processar os seus pedidos e melhorar a sua experiência.
            </p>
          </div>

          {/* Section 2 */}
          <div className="product-card rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kapuda-orange/10 rounded-lg p-2">
                <Database className="w-5 h-5 text-kapuda-orange" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">2. Como Utilizamos os seus Dados</h2>
            </div>
            <ul className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-2">
              {[
                "Processar transações e enviar confirmações de compra",
                "Responder a perguntas e prestar suporte ao cliente",
                "Enviar informações sobre produtos e promoções (com o seu consentimento)",
                "Melhorar o nosso site e serviços",
                "Cumprir obrigações legais e regulamentares",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-kapuda-orange font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 - Cookies */}
          <div className="product-card rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kapuda-pink/10 rounded-lg p-2">
                <Cookie className="w-5 h-5 text-kapuda-pink" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">3. Política de Cookies</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              O nosso site utiliza cookies para melhorar a sua experiência de navegação. Os cookies são pequenos ficheiros
              de texto armazenados no seu dispositivo que nos ajudam a:
            </p>
            <ul className="text-muted-foreground text-sm leading-relaxed flex flex-col gap-2 mb-3">
              {[
                "Lembrar as suas preferências",
                "Analisar como o site é utilizado",
                "Personalizar conteúdo e anúncios",
                "Garantir o funcionamento correto do site",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-kapuda-pink font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pode gerir as suas preferências de cookies através do banner apresentado na primeira visita. Ao recusar os
              cookies, algumas funcionalidades do site poderão não estar disponíveis.
            </p>
          </div>

          {/* Section 4 */}
          <div className="product-card rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kapuda-blue/10 rounded-lg p-2">
                <Shield className="w-5 h-5 text-kapuda-blue" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">4. Segurança dos Dados</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as suas informações
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Os pagamentos são processados
              de forma segura através de plataformas certificadas.
            </p>
          </div>

          {/* Section 5 */}
          <div className="product-card rounded-2xl p-7 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-kapuda-orange/10 rounded-lg p-2">
                <Mail className="w-5 h-5 text-kapuda-orange" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">5. Os seus Direitos e Contacto</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Tem o direito de aceder, corrigir ou eliminar os seus dados pessoais. Para exercer estes direitos ou
              colocar qualquer questão relacionada com a privacidade, contacte-nos:
            </p>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm font-semibold text-foreground">Kapuda Vendas Online</p>
              <a href="mailto:joaquim9francisco@gmail.com" className="text-kapuda-orange text-sm hover:underline">
                joaquim9francisco@gmail.com
              </a>
              <br />
              <a href="tel:+244931929641" className="text-kapuda-orange text-sm hover:underline">
                931 929 641
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Privacidade;
