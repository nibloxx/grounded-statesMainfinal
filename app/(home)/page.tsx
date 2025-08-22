import { Hero } from '@/components'
import { PropertyGallery, ProjectsSection, WelcomeSection, CommunitySection, Footer } from '@/components/shared/DynamicComponents'
import { WelcomeSectionProps } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grounded Estates - Boutique Developer Creating Unforgettable Destinations',
  description: 'Welcome to Grounded Estates, your trusted boutique developer creating spaces that inspire. We blend architectural elegance with emotional depth to create places that feel deeply personal and undeniably lasting.',
  keywords: 'grounded estates, boutique developer, luxury real estate, architectural elegance, unique masterpieces, luxury homes, premium properties',
  openGraph: {
    title: 'Grounded Estates - Creating Unique Masterpieces',
    description: 'Discover luxury properties that blend architectural elegance with emotional depth. Each home begins with a vision, not a template.',
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
    title: "Welcome to Grounded Estates, your trusted boutique developer creating unforgettable destinations.",
    subtitle: "Creating spaces that inspire",
    description1: "We see every new development as a story waiting to be told, one that blends architectural elegance with emotional depth. Our purpose is simple: to create places that feel deeply personal and undeniably lasting.",
    description2: "Designed for those who seek more, each property reimagines hospitality while fostering private spaces that soothe, inspire, and feel intuitively like home. Rediscover places that pause, breathe, elegantly.",
    ctaText: "Discover more about us",
    ctaMobileText: "Discover more",
    ctaLink: "/about",
    heading: "LED BY DESIGN, CREATING",
    headingHighlight: "UNIQUE",
    headingEnd: "MASTERPIECES.",
    bottomDescription: "Each of our home begins with a vision, not a template. Design leads every step of our process, shaping spaces that are as thoughtful as they are timeless. From layout to finish, each detail is intentional, balancing beauty with purpose to create a home that doesn't just look different but lives differently. Simply creating unique masterpieces.",
    images: {
        poolImage: "/images/welcome/pool-architecture.png",
        poolImageAlt: "Modern pool architecture with water",
        adImage: "/images/welcome/AD.png",
        adImageAlt: "AD",
        livingRoomImage: "/images/welcome/luxury-living-room.jpg",
        livingRoomImageAlt: "Luxury living room with modern furniture",
        openButton: false
    }
}; 
export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <PropertyGallery />
            <WelcomeSection data={welcomeData} className="bg-mobileWelcome md:bg-desktopWelcome bg-cover bg-center" />
            <ProjectsSection />
            <CommunitySection />
            <Footer />
        </main>
    )
} 