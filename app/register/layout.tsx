import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Grounded Estates | Join Our Network',
  description: 'Register with Grounded Estates as an investor, client, or broker. Join our exclusive network and discover luxury real estate opportunities with our boutique developer.',
  keywords: 'register grounded estates, luxury real estate network, property investment, real estate broker, exclusive properties',
  openGraph: {
    title: 'Join Grounded Estates Network',
    description: 'Register as an investor, client, or broker and gain access to exclusive luxury properties and investment opportunities.',
    type: 'website',
    images: [{
      url: '/images/projects/A10/Section 0/S0A10 - Slide 1.jpg',
      width: 1200,
      height: 630,
      alt: 'Grounded Estates - Luxury Villa A10'
    }],
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
