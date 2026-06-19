// Structural content for the portfolio. Text itself lives in translations.ts;
// here we keep only the data needed to render each section dynamically
// (translation keys, icons, image paths, links). Add an entry to an array to
// render a new card/item — no JSX duplication required.

export interface NavItem {
  id: string;
  icon: string;
  labelKey: string;
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { id: 'about', icon: 'fa-solid fa-user', labelKey: 'nav.about' },
  { id: 'experience', icon: 'fa-solid fa-briefcase', labelKey: 'nav.experience' },
  { id: 'education', icon: 'fa-solid fa-graduation-cap', labelKey: 'nav.education' },
  { id: 'projects', icon: 'fa-solid fa-code-branch', labelKey: 'nav.projects' },
  { id: 'contact', icon: 'fa-solid fa-envelope', labelKey: 'nav.contact', cta: true },
];

export interface Language {
  code: string;
  flagCode: string;
  name: string;
}

export const languages: Language[] = [
  { code: 'en', flagCode: 'gb', name: 'EN' },
  { code: 'lv', flagCode: 'lv', name: 'LV' },
  { code: 'ru', flagCode: 'ru', name: 'RU' },
];

export const techIcons: string[] = [
  'fa-brands fa-python',
  'fa-brands fa-java',
  'fa-brands fa-react',
  'fa-brands fa-php',
  'fa-brands fa-js',
];

export type HeroAction = 'contact' | 'download' | 'projects';

export interface HeroButton {
  action: HeroAction;
  icon: string;
  labelKey: string;
  variant: 'primary' | 'secondary';
}

export const heroButtons: HeroButton[] = [
  { action: 'contact', icon: 'fa-solid fa-envelope', labelKey: 'hero.contact', variant: 'primary' },
  { action: 'download', icon: 'fa-solid fa-download', labelKey: 'hero.download', variant: 'secondary' },
  { action: 'projects', icon: 'fa-solid fa-code-branch', labelKey: 'hero.projects', variant: 'secondary' },
];

export const aboutParagraphs: string[] = [
  'about.description1',
  'about.description2',
  'about.description3',
];

export interface ExperienceItem {
  /** Base translation key, e.g. 'experience.gocardless' -> '.title', '.company', etc. */
  key: string;
  logo: string;
  logoAlt: string;
}

export const experience: ExperienceItem[] = [
  { key: 'experience.gocardless', logo: '/static/images/companies/gocardless.png', logoAlt: 'GoCardless Logo' },
  { key: 'experience.qa', logo: '/static/images/companies/testdevlab.png', logoAlt: 'TestDevLab Logo' },
];

export interface EducationItem {
  key: string;
  logo: string;
  logoAlt: string;
}

export const education: EducationItem[] = [
  { key: 'education.masters', logo: '/static/images/via_logo.png', logoAlt: 'Vidzeme University Logo' },
  { key: 'education.bachelors', logo: '/static/images/via_logo.png', logoAlt: 'Vidzeme University Logo' },
];

export interface ProjectItem {
  key: string;
  icon: string;
  videoUrl: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export const projects: ProjectItem[] = [
  {
    key: 'projects.openbanking',
    icon: 'fa-solid fa-university',
    videoUrl: 'https://youtu.be/EmqhcdBvW1s',
    thumbnail: 'https://img.youtube.com/vi/EmqhcdBvW1s/maxresdefault.jpg',
    thumbnailAlt: 'Open Banking Solution Demo',
  },
  {
    key: 'projects.ar_piano',
    icon: 'fa-solid fa-music',
    videoUrl: 'https://youtu.be/KBo5BJZzCt4',
    thumbnail: 'https://img.youtube.com/vi/KBo5BJZzCt4/maxresdefault.jpg',
    thumbnailAlt: 'Piano Learning Solution Demo',
  },
];

export interface ContactDetail {
  icon: string;
  href: string;
  /** Literal text shown to the user (not translated). */
  text: string;
}

export const contactDetails: ContactDetail[] = [
  { icon: 'fa-solid fa-envelope', href: 'mailto:slokaivars@gmail.com', text: 'slokaivars@gmail.com' },
  { icon: 'fa-solid fa-phone', href: 'tel:+37128687728', text: '+371 28687728' },
];

export interface SocialLink {
  icon: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com/in/ivars-sloka' },
  { icon: 'fa-brands fa-github', href: 'https://github.com/ivissivi' },
];

export interface ContactField {
  name: 'name' | 'email' | 'message';
  type: string;
  icon: string;
  placeholderKey: string;
  multiline?: boolean;
}

export const contactFields: ContactField[] = [
  { name: 'name', type: 'text', icon: 'fa-solid fa-user', placeholderKey: 'contact.name' },
  { name: 'email', type: 'email', icon: 'fa-solid fa-envelope', placeholderKey: 'contact.email' },
  { name: 'message', type: 'text', icon: 'fa-solid fa-comment', placeholderKey: 'contact.message', multiline: true },
];
