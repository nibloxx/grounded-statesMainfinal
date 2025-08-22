import { WelcomeSection } from '@/components';
import { AboutUsHero, Footer } from '@/components/shared';
import { WelcomeSectionProps } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Grounded Estates | Creating Design Masterpieces',
  description: 'Discover Grounded Estates, your boutique developer creating masterpieces that foster peaceful living. Every residence begins with a blank canvas, shaped by the land and guided by feeling.',
  keywords: 'about grounded estates, boutique developer, design masterpieces, luxury architecture, peaceful living, bespoke homes',
  openGraph: {
    title: 'About Grounded Estates - Design Masterpieces',
    description: 'More than architecture, we create sanctuaries. Spaces where nature flows inward, and stillness is designed in.',
    type: 'website',
    images: [{
      url: '/images/projects/A10/Section 0/S0A10 - Slide 1.jpg',
      width: 1200,
      height: 630,
      alt: 'Grounded Estates - Luxury Villa A10'
    }],
  },
};

const welcomeData: WelcomeSectionProps['data'] = {
    title: "Welcome to Grounded Estates, your boutique developer creating masterpieces that foster peaceful living.",
    subtitle: "Creating spaces that inspire",
    description1: "Every Grounded Estates residence begins with a blank canvas, shaped by the land, guided by feeling. No two are alike. Each home is a quiet reflection of purpose, place, and lasting beauty.",
    description2: "More than architecture, we create sanctuaries. Spaces where nature flows inward, and stillness is designed in. Homes that feel personal, to return to, to live slowly in, to feel fully at ease.",
    ctaText: "Explore our projects",
    ctaLink: "/",
    ctaMobileText: "Explore",
    heading: "LED BY DESIGN, CREATING",
    headingHighlight: "UNIQUE",
    headingEnd: "MASTERPIECES.",
    bottomDescription: "Each of our projects begins with a singular vision : Create a design masterpiece rooted in place and purpose. Inspired by the land’s natural rhythm and framed by its most peaceful views, our homes become timeless statements, often celebrated in AD, Vogue, and beyond.",
    images: {
        poolImage: "/images/about/about-us-1.jpg",
        poolImageAlt: "Modern pool architecture with water",
        adImage: "",
        adImageAlt: "",
        livingRoomImage: "/images/welcome/luxury-living-room.jpg",
        livingRoomImageAlt: "Luxury living room with modern furniture",
        openButton: false
    }
}; 
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <AboutUsHero />
      <WelcomeSection className='bg-white'  data={welcomeData} />
      {/* Footer */}
      <Footer />
    </main>
  );
} 