export interface MenuItem {
    id: string;
    title: string;
    type: 'villa' | 'community' | 'about';
    image?: string;
    status?: 'new' | 'soon';
    code?: string;
    link?: string;
}

export const menuItems: MenuItem[] = [
    {
        id: 'villa-a10',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/A10/A10-hero-1.jpg',
        code: 'A10',
        link: '/project/lime-tree-valley-villa-a10'  
    },
    {
        id: 'villa-c14',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/C14/C14-slider-5.png',
        code: 'C14',
           status: 'soon',
           link: '/project/redwood-villa-c14'  
    },
    {
        id: 'villa-a20',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/A20/A20-hero-1.jpg',
        code: 'A20',
        status: 'new',
        link: '/project/lime-tree-valley-villa-a20'  
    },
    {
        id: 'villa-a15',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/A15/A15-hero-1.jpg',
        code: 'A15',
        link: '/project/lime-tree-valley-villa-a15'  
    },
    {
        id: 'villa-EH',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/EH/EH-hero-1.jpg',
        code: 'EH',
        link: '/project/emirates-hills-villa-ht32'  
    },
    {
        id: 'villa-SF72',
        title: 'Villa',
        type: 'villa',
        image: '/images/projects/SH/SH-hero-1.png',
        code: 'SF72',
        status: 'soon',
        link: '/project/sanctuary-falls-villa-72'  
    },
    {
        id: 'communities',
        title: 'Communities',
        type: 'community',
        image: '/images/communities/community-1.jpg',
        link: '/community/jumeirah-golf-estates'  
    },
    {
        id: 'about-us',
        title: 'About us',
        type: 'about',
        link: '/about'  
    }
]; 