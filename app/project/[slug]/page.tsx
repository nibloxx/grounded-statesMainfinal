import { PROJECTS_DATA } from '@/constants';
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';
import type { Metadata } from 'next';

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all projects
export function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
    const projectSlug = (await params).slug;
    const project = PROJECTS_DATA.find(p => p.slug === projectSlug);
    
    if (!project) {
        return {
            title: 'Project Not Found - Grounded Estates',
            description: 'The requested project could not be found.',
        };
    }
    
    // Create SEO-optimized title and description
    const title = `${project.propertyName || 'Luxury Villa'} - Luxury Villa | Grounded Estates`;
    const description = project.description && project.description.length > 160 
        ? project.description.substring(0, 157) + '...'
        : project.description || 'Discover this luxury villa by Grounded Estates, your boutique developer creating architectural masterpieces.';
    
    const keywords = [
        project.propertyName?.toLowerCase() || 'luxury villa',
        'luxury villa',
        'grounded estates',
        project.location?.toLowerCase() || 'premium location',
        'premium property',
        'boutique developer',
        'architectural masterpiece'
    ].join(', ');
    
    return {
        title,
        description,
        keywords,
        openGraph: {
            title: `${project.propertyName} - Luxury Living`,
            description,
            type: 'website',
            images: project.heroImages && project.heroImages.length > 0 ? [{
                url: project.heroImages[0].src,
                width: 1200,
                height: 630,
                alt: project.heroImages[0].alt
            }] : [{
                url: '/images/projects/A10/Section 0/S0A10 - Slide 1.jpg',
                width: 1200,
                height: 630,
                alt: 'Grounded Estates - Luxury Villa'
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.propertyName} - Luxury Villa`,
            description,
            images: project.image ? [project.image] : [],
        },
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const projectSlug = (await params).slug;
    
    // Find the project from the constant data
    const project = PROJECTS_DATA.find(p => p.slug === projectSlug);
    
    // If project not found, return 404
    if (!project) {
        notFound();
    }
    
    return (
        <section>
            <ProjectDetailClient project={project} />
        </section>
    );
} 