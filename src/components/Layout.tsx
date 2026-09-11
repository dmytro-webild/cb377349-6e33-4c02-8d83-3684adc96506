import { Outlet } from 'react-router-dom';
import NavbarCentered from '@/components/ui/NavbarCentered';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarCentered
                logo="GreenScape"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "About", href: "#about" },
                  { name: "Team", href: "#team" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Call Now", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimple
                brand="GreenScape"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Landscape Design", href: "#services" },
                      { label: "Hardscape & Softscape", href: "#services" },
                      { label: "Lawn & Garden Care", href: "#services" },
                      { label: "Smart Irrigation", href: "#services" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About", href: "#about" },
                      { label: "Team", href: "#team" },
                      { label: "Testimonials", href: "#testimonials" },
                      { label: "FAQ", href: "#faq" },
                    ],
                  },
                  {
                    title: "Contact",
                    items: [
                      { label: "(555) 123-4567", href: "tel:5551234567" },
                      { label: "hello@greenscape.com", href: "mailto:hello@greenscape.com" },
                      { label: "Los Angeles, CA" },
                    ],
                  },
                ]}
                copyright="© 2026 GreenScape Landscaping"
                links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
              />
    </StyleProvider>
  );
}
