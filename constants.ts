
import type { Project } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Windermere Modern Estate',
    category: 'Custom Home',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/house1/800/600',
    description: 'A stunning custom-built home featuring clean lines, expansive glass walls, and a seamless indoor-outdoor living experience.'
  },
  {
    id: 2,
    title: 'Downtown Office Tower',
    category: 'Commercial',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/comm1/800/600',
    description: 'A state-of-the-art commercial high-rise in the heart of the city, designed for functionality and corporate prestige.'
  },
  {
    id: 3,
    title: 'Glenora Heritage Reno',
    category: 'Residential',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/reno1/800/600',
    description: 'A meticulous renovation of a historic home, preserving its character while introducing modern amenities and luxury finishes.'
  },
  {
    id: 4,
    title: 'The Crestwood Contemporary',
    category: 'Custom Home',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/house2/800/600',
    description: 'This home blends contemporary design with natural materials, creating a warm and inviting atmosphere for family living.'
  },
  {
    id: 5,
    title: 'South Side Retail Plaza',
    category: 'Commercial',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/comm2/800/600',
    description: 'A bustling retail development designed to attract high-end tenants and provide a premium shopping experience.'
  },
  {
    id: 6,
    title: 'Strathcona Loft Conversion',
    category: 'Residential',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/reno2/800/600',
    description: 'Transforming an industrial space into stylish and functional residential lofts with an urban, edgy aesthetic.'
  },
    {
    id: 7,
    title: 'Riverside Luxury Build',
    category: 'Custom Home',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/house3/800/600',
    description: 'An architectural masterpiece overlooking the river valley, designed for ultimate luxury and breathtaking views.'
  },
  {
    id: 8,
    title: 'West Edmonton Multi-Family',
    category: 'Residential',
    location: 'Edmonton, AB',
    imageUrl: 'https://picsum.photos/seed/reno3/800/600',
    description: 'A modern multi-family residential complex offering stylish living spaces and community-focused amenities.'
  }
];
