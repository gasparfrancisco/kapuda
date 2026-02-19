import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import kapudaLogo from "@/assets/kapuda-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-kapuda-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={kapudaLogo}
              alt="Kapuda Vendas Online"
              className="h-20 w-20 rounded-full object-cover border-2 border-kapuda-orange"
            />
            <div>
              <p className="font-heading font-black text-xl text-primary-foreground">KAPUDA</p>
              <p className="font-heading font-semibold text-kapuda-orange text-xs tracking-widest">VENDAS ONLINE</p>
            </div>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              A sua loja online de confiança para produtos de qualidade com os melhores preços.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-kapuda-orange mb-4 text-sm tracking-widest uppercase">Navegação</h3>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Início" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/contactos", label: "Contactos" },
                { to: "/privacidade", label: "Política de Privacidade" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-kapuda-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-kapuda-orange mb-4 text-sm tracking-widest uppercase">Contacto</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:joaquim9francisco@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-kapuda-orange transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0 text-kapuda-orange" />
                  joaquim9francisco@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+244931929641"
                  className="flex items-center gap-2 text-muted-foreground hover:text-kapuda-orange transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0 text-kapuda-orange" />
                  931 929 641
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Kapuda Vendas Online. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Criado por{" "}
            <span className="text-kapuda-orange font-semibold">Kim Francisco</span>{" "}
            &{" "}
            <span className="text-kapuda-orange font-semibold">Linda Francisco</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
