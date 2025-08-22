export interface CommunityFeature {
  id: number;
  title: string;
  image: string;
  alt: string;
  textPosition: string;
}

export interface LocationItem {
  id: number;
  name: string;
  image: string;
  alt: string;
  travelTime: string;
  isCenter?: boolean;
  width?: string | number; // Add width property for dynamic sizing
}
export interface AmenityItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

export interface MapSectionData {
  heading: {
    text: string;
    isItalic: boolean;
  }[];
  headingHighlight: {
    text: string;
    isItalic: boolean;
  }[];
  description: string;
  ctaText: string;
  ctaLink: string;
  mapImage: string;
  mapAlt: string;
}
export interface AboutPropertyProps {
  heading: string;
  subHeading: string;
  description: string;
  images: {
    familyLivingRoom?: string;
    formalLivingRoom?: string;
    villaA10?: string; // Optional property for villa A10 image
    villaA20?: string; // Optional property for villa A20 image
    villaA15?: string; // Optional property for villa A15 image
    ht32?: string; // Optional property for HT32 image
    extraImage?: string;
  };
}

export interface CommunityItem {
  id: number;
  slug: string;
  name: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutDescription: string;
  features: CommunityFeature[];
  locations?: LocationItem[];
  ammenities: AmenityItem[];
  mapSection?: MapSectionData;
  welcomeData: WelcomeSectionProps["data"];
  aboutProperty: AboutPropertyProps;
}
export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  width?: string | number;
  height?: string | number;
  blur?: boolean;
}

export interface ProjectHeroImage {
  id: number;
  src: string;
  alt: string;
  blur?: boolean;
}
export interface ProjectFeature {
  id: number;
  title: string;
  headline: string;
  description: string;
  image: string;
  nightImage?: string;
  alt: string;
  adImage?: string;
  adImageAlt?: string;
}

export interface PeacefulnessSectionData {
  // image: string;
  mainImage: string;
  topRight: string;
  bottomRight: string;
  topLeft: string;
  rightCenter: string;
  leftCenter: string;
  bottomLeft: string;
  topCenter: string;
  bottomCenter: string;
  imageAlt: string;
  topText: string;
  mainText: string;
  description: string;
}

export interface LuxuryDetailsImages {
  main: string;
  secondary1: string;
  secondary2: string;
  secondary3: string;
}

export interface LuxuryDetailsData {
  tagline: string;
  heading: string;
  description: string;
  discoverMoreText: string;
  downloadText: string;
  images: LuxuryDetailsImages;
}

export interface AboutPropertyImages {
  receptionArea?: string; // Add this new property
  wineCellar?: string;
  familyLivingRoom?: string;
  formalLivingRoom?: string;
  showKitchen?: string;
  loungeView?: string;
  upstairsLounge?: string;
  dinningRoom?: string;
  outsideLounge?: string;
  masterBedroom?: string;
  masterBathroom?: string;
  entranceHall?: string; // Optional property for entrance hall image
  poolHouse?: string; // Optional property for pool house image
  office?: string; // Optional property for office image
  outsidePoolArea?: string;
  bedRoom2?: string;
  cinemaRoom?: string;
  carGarrage?: string;
 
}

export interface AboutPropertyData {
  heading: string;
  subHeading: string;
  description: string;
  images: AboutPropertyImages;
  villaA10?: string; // Optional property for villa A10 image
}

export interface DesigningTextItem {
  text: string;
  italic: boolean;
  bgImage?: string;
}

export interface DesigningHomesData {
  image: string;
  imageAlt: string;
  text1: DesigningTextItem[];
  text2: DesigningTextItem[];
  text3: DesigningTextItem[];
}

export interface ProjectVideoData {
  commingSoon: boolean;
  blurImage?: string;
  src?: string;
  alt: string;
  className?: string;
  buttonPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  buttonSize?: "sm" | "md" | "lg";
}

export interface VillaDetailsData {
  headerLocation: string;
  headerTitle: string;
  headerDescription: string;

  floorPlanImage: string;
  groundFloorImage?: string; // Specific ground floor image
  firstFloorImage?: string; // Specific first floor image

  floorPlanAlt: string;

  layoutExploreTitle: string;
  layoutExploreSubtitle: string;
  layoutExploreDescription: string;
  layoutTabs: string[]; // e.g., ["Ground Floor", "First Floor"]

  threeDSectionTitle: string;
  threeDSectionSubtitle: string;
  threeDSectionDescription: string;
  threeDButtonText: string;
  commingSoon: boolean;
  threeDImage: string;
  threeDImageAlt: string;
}
export interface ProjectItem {
  id: number;
  slug: string;
  location: string;
  country: string;
  image: string;
  alt: string;
  propertyName?: string;
  heroImages: ProjectHeroImage[];
  images?: ProjectImage[];
  description?: string;
  features?: ProjectFeature[];
  communityData?: {
    image: string;
    imageAlt: string;
    topHeading: string;
    subHeading1: string;
    subHeading2: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutDescription: string;
    circleText?: string;
  };
  peacefulnessSection?: PeacefulnessSectionData;
  luxuryDetails?: LuxuryDetailsData;
  aboutProperty?: AboutPropertyData;
  designingHomes?: DesigningHomesData;
  videoSection?: ProjectVideoData;
  villaDetails?: VillaDetailsData;
}

export interface WelcomeSectionProps {
  data: {
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    ctaText: string;
    ctaMobileText: string;
    ctaLink: string;
    heading: string;
    headingHighlight: string;
    headingEnd: string;
    bottomDescription: string;
    images: {
      poolImage: string;
      poolImageAlt: string;
      adImage: string;
      adImageAlt: string;
      livingRoomImage: string;
      livingRoomImageAlt: string;
      openButton: boolean;
    };
  };
  className?: string;
  disableInteractions?: boolean;
}