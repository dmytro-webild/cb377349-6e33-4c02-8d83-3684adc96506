import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavbarProps {
  logoText: string;
  logoImg: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  onClose?.();
};

export default function Navbar({ logoText, logoImg, navItems, ctaButton }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        data-section="navbar"
        className={cls(
          "fixed z-[1000] top-0 left-0 w-full transition-all duration-500 ease-in-out",
          isScrolled ? "h-15 bg-background/80 backdrop-blur-sm" : "h-20 bg-background/0 backdrop-blur-0"
        )}
      >
        <div className="relative mx-auto flex items-center justify-between h-full w-content-width">
          <a href="/" className="flex items-center gap-3 text-xl font-medium text-foreground">
            <img src={logoImg} alt={logoText} className="h-9 w-auto object-contain" />
            <span>{logoText}</span>
          </a>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-base text-foreground hover:opacity-70 transition-opacity"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 xl:gap-3 2xl:gap-4">
            <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />

            <div
              className="flex md:hidden items-center justify-center shrink-0 size-9 rounded cursor-pointer primary-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Plus
                className={cls("w-1/2 h-1/2 text-primary-cta-text transition-transform duration-300", menuOpen ? "rotate-45" : "rotate-0")}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
