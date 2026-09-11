import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import AboutTestimonial from "@/components/sections/about/AboutTestimonial";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import TeamGlassCards from "@/components/sections/team/TeamGlassCards";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import TestimonialAvatarCard from "@/components/sections/testimonial/TestimonialAvatarCard";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function HomePage() {
  return (
<StyleProvider heroBackground="none" siteBackground="none" buttonVariant="stagger">
        

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            textAnimation="slide-up"
            tag="Professional Landscaping"
            title="Transform Your Outdoor Space Today Today"
            description="Transform your outdoor space with landscaping designed around your vision. From elegant gardens to custom hardscapes, we create and maintain landscapes that make your property stand out.

"
            primaryButton={{ text: "Get Free Estimate", href: "#contact" }}
            secondaryButton={{ text: "Our Services", href: "#services" }}
            imageSrc="https://storage.googleapis.com/webild/default/templates/landscaping/hero.jpg"
            testimonials={[
              {
                name: "Sarah M.",
                handle: "Homeowner",
                text: "YCA Landscaping LLC completely transformed our backyard. The team was professional, creative, and delivered beyond our expectations.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-2.jpg",
              },
              {
                name: "David K.",
                handle: "Property Manager",
                text: "We've used YCA Landscaping LLC for all our commercial properties. Their maintenance plans keep everything looking pristine year-round.",
                rating: 5,
                imageSrc: "https://storage.googleapis.com/webild/default/templates/web-agency-2/team-1.jpg",
              },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <AboutTestimonial
            textAnimation="slide-up"
            tag="About YCA Landscaping LLC"
            quote="We’ve spent years creating outdoor spaces that homeowners love coming home to. From the first design to the final detail, we’re committed to quality landscapes that last."
            author=""
            role=""
            videoSrc="https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4"
          />
        </div>

        <div id="services" data-section="services">
          <FeaturesDetailedSteps
            textAnimation="slide-up"
            tag="Our Services"
            title="What Services We Offer"
            description="From design to maintenance, we handle every aspect of your landscape."
            steps={[
              {
                tag: "Design",
                title: "Lawn Care ",
                subtitle: "Custom Plans",
                description: "IIs your lawn looking rough, thin, or neglected? Let us bring the green back and give your yard the fresh, healthy look it deserves.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-2.jpg",
              },
              {
                tag: "Installation",
                title: "Property Cleanup",
                subtitle: "Cleanups",
                description: "From messy and overgrown to clean and under control. We transform neglected properties into clean, presentable spaces that stand out.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-3.jpg",
              },
              {
                tag: "Maintenance",
                title: "Tree Trimming",
                subtitle: "Tree Service",
                description: "Overgrown trees can quickly take away from your property’s curb appeal. Let us trim, shape, and clean them up so your property can stand out again.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-4.jpg",
              },
              {
                tag: "Irrigation",
                title: "Sod Installations",
                subtitle: "Grass Management",
                description: "Fresh sod, fresh look, fresh start. We turn empty or struggling spaces into beautiful green lawns that make your property stand out.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-5.jpg",
              },
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamGlassCards
            textAnimation="slide-up"
            tag=""
            title="Why Choose YCA Landscaping LLC"
            description="What sets us apart from the rest."
            members={[
              {
                name: "Expert Craftsmanship",
                role: "Decades of combined experience in landscape design and installation.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-6.jpg",
              },
              {
                name: "Eco-Friendly Approach",
                role: "Sustainable practices and native plant selections that thrive naturally.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-7.jpg",
              },
              {
                name: "Full-Service Care",
                role: "From initial design to ongoing maintenance, we handle everything.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-8.jpg",
              },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamOverlayCards
            textAnimation="slide-up"
            tag="Our Team"
            title="Meet the Experts"
            description="The skilled professionals behind every beautiful landscape."
            members={[
              {
                name: "James Carter",
                role: "Lead Designer",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-11.jpg",
              },
              {
                name: "Maria Silva",
                role: "Horticulturist",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-10.jpg",
              },
              {
                name: "Ryan Mitchell",
                role: "Project Manager",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-9.jpg",
              },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialAvatarCard
            textAnimation="slide-up"
            tag="Trusted by Homeowners"
            title="Over 500 happy clients trust YCA Landscaping LLC to transform and maintain their outdoor spaces."
            primaryButton={{ text: "Contact Now", href: "#contact" }}
            avatars={[
              { name: "Sarah M.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-10.jpg" },
              { name: "David K.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-11.jpg" },
              { name: "Emily R.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-4.jpg" },
              { name: "Ryan M.", imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-9.jpg" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqTwoColumn
            textAnimation="slide-up"
            tag=""
            title="Frequently Asked Questions"
            description="Everything you need to know about our landscaping services."
            items={[
              {
                question: "How long does a typical landscaping project take?",
                answer: "Most residential projects take 1-3 weeks depending on scope. We'll provide a detailed timeline during your consultation so you know exactly what to expect.",
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer complimentary on-site consultations where we assess your property, discuss your vision, and provide a detailed estimate — no obligation.",
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater metropolitan area and surrounding suburbs within a 50-mile radius. Contact us to confirm service availability in your location.",
              },
              {
                question: "Do you provide ongoing maintenance?",
                answer: "Absolutely. We offer weekly, bi-weekly, and monthly maintenance plans that include mowing, trimming, fertilization, and seasonal cleanups.",
              },
              {
                question: "Are your practices eco-friendly?",
                answer: "Yes, sustainability is core to our approach. We use native plants, organic fertilizers, smart irrigation, and environmentally responsible methods whenever possible.",
              },
              {
                question: "Do you handle permits and HOA approvals?",
                answer: "We handle all necessary permits and can work directly with your HOA to ensure your project meets community guidelines and gets approved smoothly.",
              },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            textAnimation="slide-up"
            tag="Contact"
            title="Get Your Free Estimate"
            description="Tell us about your project and we'll get back to you within 24 hours."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your project...", rows: 4, required: true }}
            buttonText="Send Message"
            imageSrc="https://storage.googleapis.com/webild/default/templates/landscaping/img-2.jpg"
          />
        </div>

        
      </StyleProvider>
  );
}
