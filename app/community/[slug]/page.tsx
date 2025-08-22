import { COMMUNITIES_DATA } from '@/constants';
import { notFound } from 'next/navigation';
import { CommunityDetailHero } from '@/components/community';
import { Footer, WelcomeSection, AmenitiesSection, MapSection } from '@/components';
import { AboutProperty } from '@/components/project-detail';
import Features from '@/components/community/CommunityFeatures';
import UltimateLocation from '@/components/community/UltimateLocation';
import { WelcomeSectionProps } from '@/types';
import type { Metadata } from 'next';

interface CommunityDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}
const welcomeData: WelcomeSectionProps['data'] = {
    title: "Welcome to Jumeirah Golf Estates, your family community designed to foster peaceful living.",
    subtitle: "Creating spaces that inspire",
    description1: "Nestled in nature and built around world-class golf courses, Jumeirah Golf Estates is more than a gated community, it's a haven where families grow, unwind, and reconnect with what truly matters.",
    description2: "Surrounded by trees, birdsong, and quiet paths, every day feels slower here, in the best way. With thoughtful amenities and leisure at your door, peaceful living becomes second nature.",
    ctaText: "",
    ctaLink: "/about",
    ctaMobileText: "Learn more",
    heading: "EXPLORE THE HILLS OF A",
    headingHighlight: "VIBRANT OASIS",
    headingEnd: "NESTED IN THE CITY.",
    bottomDescription: "A place where time softens and life unfolds with grace. Mornings begin on the court with your children, afternoons drift into golden walks through quiet hills, and evenings end in soft laughter over drinks at the clubhouse. In this oasis, every moment feels gently considered, effortlessly complete.",
    images: {
        poolImage: "/images/welcome/pool-architecture.png",
        poolImageAlt: "Modern pool architecture with water",
        adImage: "",
        adImageAlt: "AD",
        livingRoomImage: "/images/welcome/luxury-living-room.jpg",
        livingRoomImageAlt: "Luxury living room with modern furniture",
        openButton: false
    }
};
// Generate static params for all communities
export function generateStaticParams() {
    return COMMUNITIES_DATA.map((community) => ({
        slug: community.slug,
    }));
}

// Generate metadata for each community
export async function generateMetadata({ params }: CommunityDetailPageProps): Promise<Metadata> {
    const communitySlug = (await params).slug;
    const community = COMMUNITIES_DATA.find(c => c.slug === communitySlug);
    
    if (!community) {
        return {
            title: 'Community Not Found - Grounded Estates',
            description: 'The requested community could not be found.',
        };
    }
    
    // Create SEO-optimized title and description
    const title = `${community.name} - ${community.aboutSubtitle || 'Luxury Community'} | Grounded Estates`;
    const description = community.aboutDescription && community.aboutDescription.length > 160 
        ? community.aboutDescription.substring(0, 157) + '...'
        : community.aboutDescription || `Discover ${community.name}, a luxury community by Grounded Estates fostering peaceful living and architectural excellence.`;
    
    const keywords = [
        community.name?.toLowerCase() || 'luxury community',
        'grounded estates',
        community.location?.toLowerCase() || 'premium location',
        'luxury community',
        'peaceful living',
        'golf estates',
        'family community',
        'boutique developer'
    ].join(', ');
    
    return {
        title,
        description,
        keywords,
        openGraph: {
            title: `${community.name} Community - Luxury Living`,
            description,
            type: 'website',
            images: community.image ? [{
                url: community.image,
                width: 1200,
                height: 630,
                alt: community.alt
            }] : [{
                url: '/images/projects/A10/Section 0/S0A10 - Slide 1.jpg',
                width: 1200,
                height: 630,
                alt: 'Grounded Estates - Luxury Villa'
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${community.name} - Luxury Community`,
            description,
            images: community.image ? [community.image] : [],
        },
    };
}

export default async function CommunityDetailPage({ params }: CommunityDetailPageProps) {
    const communitySlug = (await params).slug;

    // Find the community from the constant data
    const community = COMMUNITIES_DATA.find(c => c.slug === communitySlug);

    // If community not found, return 404
    if (!community) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <CommunityDetailHero community={community} />
            <Features features={community.features} />

            <WelcomeSection data={community.welcomeData} className="bg-mobileWelcome md:bg-desktopCommunityWelcome bg-cover bg-center" disableInteractions />



            {/* Ultimate Location Section */}
            {community.locations && (
                <UltimateLocation locations={community.locations} />
            )}
            <AmenitiesSection amenities={community.ammenities} />
            {community.mapSection && (
                <MapSection data={community.mapSection} communityId={community.id} />
            )}
            {/* About Property Section */}
            <AboutProperty
                heading={community.aboutProperty.heading}
                subHeading={community.aboutProperty.subHeading}
                description={community.aboutProperty.description}
                images={community.aboutProperty.images}
            />
            <Footer />
        </div>
    );
} 