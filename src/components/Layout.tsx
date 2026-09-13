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
                logo="YCA Landscaping LLC"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "About", href: "#about" },
                  { name: "Team", href: "#team" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Call Now (863) 513-5608", href: "tel:8635135608" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimple
                brand="YCA Landscaping LLC"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Lawn Care", href: "#services" },
                      { label: "Property Cleanup", href: "#services" },
                      { label: "Tree Trimming", href: "#services" },
                      { label: "Sod Installations", href: "#services" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About", href: "#about" },
                      { label: "Team", href: "#team" },
                      { label: "Testimonials", href: "#testimonials" },
                    ],
                  },
                  {
                    title: "Contact",
                    items: [
                      { label: "(863) 513-5608", href: "tel:8635135608" },
                      { label: "Yonathanalonso@icloud.com", href: "mailto:Yonathanalonso@icloud.com" },
                      { label: "Lakeland, FL" },
                    ],
                  },
                ]}
                copyright="© 2026 YCA Landscaping LLC Landscaping"
                links={[{ label: "Privacy Policy" }, { label: "Terms of Service" }]}
              />
    </StyleProvider>
  );
}
