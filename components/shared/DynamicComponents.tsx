import dynamic from 'next/dynamic';

// Lazy load heavy components that are not immediately visible
export const PropertyGallery = dynamic(() => import('../home/PropertyGallery'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96" />,
  ssr: true,
});

export const ProjectsSection = dynamic(() => import('../home/ProjectsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96" />,
  ssr: true,
});

export const CommunitySection = dynamic(() => import('../home/CommunitySection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96" />,
  ssr: true,
});

export const WelcomeSection = dynamic(() => import('../home/WelcomeSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96" />,
  ssr: true,
});

export const Footer = dynamic(() => import('../shared/Footer'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
});
