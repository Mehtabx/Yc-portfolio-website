
export type ProjectCategory = 'Custom Home' | 'Residential' | 'Commercial';

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
