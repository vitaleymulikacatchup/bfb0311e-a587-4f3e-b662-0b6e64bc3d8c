"use client"

import { Award, Calendar, CheckCircle, Clock, Crown, Globe, HelpCircle, Instagram, Linkedin, Mail, Megaphone, Quote, Share2, Sparkles, Star, TrendingUp, Twitter, Users, Video } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="RPRT"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Elite Talent & Sports Management"
          description="From career management to endorsements, contract negotiations to public relations - RPRT manages elite talent and athletes across diverse market niches in the entertainment industry."
          tag="Hollywood Expertise"
          tagIcon={Star}
          buttons={[
            { text: "View Services", href: "services" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/5989941/pexels-photo-5989941.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="RPRT talent management team in action"
          imagePosition="right"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Comprehensive Entertainment Services"
          description="We handle every aspect of talent management and entertainment production with our extensive Hollywood network and decade of experience"
          tag="What We Do"
          tagIcon={Sparkles}
          features={[
            {
              title: "Talent & Athlete Management",
              description: "Complete career management from public relations to contract negotiations for elite talent and athletes across various market niches",
              icon: Users,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Film/TV/UGC Production",
              description: "Utilizing our vast database of talent, brands and studio contacts to package and produce TV, film and User Generated content projects",
              icon: Video,
              button: { text: "Get Started", href: "contact" }
            },
            {
              title: "PR & Product Placement",
              description: "Nearly a decade as the go-to source for placing products in film, TV, music videos, print, web and on celebrities",
              icon: Megaphone,
              button: { text: "View Portfolio", href: "contact" }
            },
            {
              title: "Brand Development & Consulting",
              description: "Years of branding experience helping companies infiltrate the Hollywood landscape and grow exponentially from a marketing standpoint",
              icon: TrendingUp,
              button: { text: "Consult Now", href: "contact" }
            },
            {
              title: "Events Management",
              description: "From red carpet blowouts to product launches and private events - complete event development from concept to completion with media coverage",
              icon: Calendar,
              button: { text: "Plan Event", href: "contact" }
            },
            {
              title: "Micro PR & Social Media Marketing",
              description: "Complete social networking campaigns across Twitter, Facebook, Instagram, TikTok with tremendous results for client promotion",
              icon: Share2,
              button: { text: "Boost Presence", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Hollywood Expertise"
          description={[
            "RPRT Sports + Talent Management represents the pinnacle of entertainment industry expertise, with nearly a decade of reputation as the go-to source for talent management and brand integration.",
            "Our extensive network of studio contacts, talent database, and proven track record in successful fashion showcases, launches, and red carpet events positions us uniquely to elevate your brand and talent in the Hollywood landscape."
          ]}
          buttons={[
            { text: "View Client Roster", href: "contact" },
            { text: "Get Consultation", href: "contact" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Industry Impact"
          description="Our track record speaks for itself - delivering exceptional results across all entertainment verticals"
          tag="Proven Results"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "10+",
              title: "years",
              description: "Industry experience in Hollywood talent management and brand placement",
              icon: Clock
            },
            {
              id: "2",
              value: "500+",
              title: "placements",
              description: "Successful product placements in film, TV, music videos and celebrity endorsements",
              icon: Star
            },
            {
              id: "3",
              value: "100+",
              title: "events",
              description: "Red carpet premieres, product launches and private events managed successfully",
              icon: Calendar
            },
            {
              id: "4",
              value: "1M+",
              title: "reach",
              description: "Social media impressions generated through our strategic campaigns and content",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Industry veterans with deep Hollywood connections and proven track records in talent management"
          tag="Leadership"
          tagIcon={Crown}
          members={[
            {
              id: "1",
              name: "Ryan Patterson",
              role: "Founder & CEO",
              description: "15+ years in Hollywood talent management with extensive network of A-list connections and successful brand integrations.",
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Rachel Thompson",
              role: "VP Talent Relations",
              description: "Former studio executive specializing in career management and contract negotiations for elite entertainment professionals.",
              imageSrc: "https://images.pexels.com/photos/3727462/pexels-photo-3727462.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "3",
              name: "Marcus Rodriguez",
              role: "Head of Production",
              description: "Award-winning producer with 12+ years experience in film/TV production and branded content development.",
              imageSrc: "https://images.pexels.com/photos/7821736/pexels-photo-7821736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://website.com" }
              ]
            },
            {
              id: "4",
              name: "Sarah Chen",
              role: "Brand Strategy Director",
              description: "Strategic brand consultant with proven success helping companies navigate and dominate the Hollywood entertainment landscape.",
              imageSrc: "https://images.pexels.com/photos/7648239/pexels-photo-7648239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by industry leaders, celebrities, and brands for exceptional talent management and entertainment services"
          tag="Client Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Brand Manager",
              company: "Premium Lifestyle Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "David Thompson",
              role: "Entertainment Executive",
              company: "Studio Productions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7971754/pexels-photo-7971754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Lisa Chen",
              role: "Creative Director",
              company: "Fashion Forward Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6896322/pexels-photo-6896322.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Michael Rodriguez",
              role: "Talent Agent",
              company: "Elite Talent Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8462769/pexels-photo-8462769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              name: "Amanda Foster",
              role: "Marketing Director",
              company: "Luxury Brands LLC",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7710229/pexels-photo-7710229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about working with RPRT Sports + Talent Management"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What services does RPRT provide?",
              content: "RPRT offers comprehensive talent and athlete management, including career management, public relations, contract negotiations, endorsement deals, film/TV/UGC production, PR and product placement, brand development consulting, events management, and social media marketing."
            },
            {
              id: "2",
              title: "How can I get my product placed in film or TV?",
              content: "With nearly a decade of experience as the go-to source for product placement, RPRT manages select clients for placement in film, TV, music videos, print, web, and celebrity endorsements. Contact us to discuss your product placement needs."
            },
            {
              id: "3",
              title: "Do you work with emerging talent or only established stars?",
              content: "RPRT manages elite talent and athletes across various market niches, from emerging talent to A-list celebrities. We tailor our services to match the career stage and goals of each client."
            },
            {
              id: "4",
              title: "What makes RPRT different from other talent management companies?",
              content: "Our extensive database of talent, brands, and studio contacts, combined with our proven track record in branded content production and nearly a decade of industry reputation, sets us apart in the Hollywood landscape."
            },
            {
              id: "5",
              title: "Can you help my brand break into the Hollywood market?",
              content: "Yes! With years of branding experience, RPRT advises companies on how to infiltrate the Hollywood landscape and grow exponentially from a marketing standpoint, utilizing our tremendous contacts to build infrastructure."
            },
            {
              id: "6",
              title: "How do I see your complete client roster?",
              content: "For our complete client roster, please contact us directly at info@rp-rt.com or call 310-806-3672. We maintain client confidentiality and share roster information through proper channels."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          title="Ready to Elevate Your Entertainment Career?"
          description="Contact RPRT Sports + Talent Management today to discuss how we can help manage your talent, develop your brand, or create your next entertainment project."
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to discuss potential collaboration opportunities. Call us directly at 310-806-3672 or email info@rp-rt.com"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="RPRT"
          columns={[
            {
              items: [
                { label: "Talent Management", href: "services" },
                { label: "Film/TV Production", href: "services" },
                { label: "Product Placement", href: "services" }
              ]
            },
            {
              items: [
                { label: "Brand Consulting", href: "services" },
                { label: "Events Management", href: "services" },
                { label: "Social Media", href: "services" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}