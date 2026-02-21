const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-extrabold tracking-tight text-primary">
            Sparsio Design
          </span>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@sparsiodesign.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            hello@sparsiodesign.com
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sparsio Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
