export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  github: string;
  linkedin: string;
}

export interface AboutItem {
  icon: string;
  title: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Steven Pratt',
  title: 'Full Stack Developer',
  description: 'Crafting the web, one <div> at a time.',
  github: 'https://github.com/Steven-MP',
  linkedin: 'https://www.linkedin.com/in/steven-mp/',
};

export const aboutItems: AboutItem[] = [
  {
    icon: 'Code',
    title: 'Creative Problem Solving',
    description: 'Approaching challenges with innovative solutions and clean, maintainable code.',
  },
  {
    icon: 'Zap',
    title: 'Performance Focused',
    description: 'Building fast, efficient applications that provide exceptional reliability.',
  },
  {
    icon: 'Users',
    title: 'User Centered Design',
    description: 'Creating intuitive interfaces that prioritise user needs and accessibility.',
  },
];
