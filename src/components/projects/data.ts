export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  priority: number;
  raised: number;
  goal: number;
};

export const PROJECTS: Project[] = [
  {
    id: 'lodge-project',
    title: 'The Rivers State Lodge Project',
    tagline: 'A permanent home for every corps member',
    description:
      'Secure accommodation, a musallah, and a community under one roof — built phase by phase, funded by the ummah.',
    image: '/images/project-image.jpg',
    priority: 1,
    raised: 800_000,
    goal: 100_000_000,
  },
  {
    id: 'dawah-fund',
    title: "Da'wah & Outreach Fund",
    tagline: 'Weekly halaqas, wherever you’re posted',
    description:
      'Funds Jumu’ah logistics, study materials, and outreach across every local government area.',
    image: '/images/dawah.jpg',
    priority: 2,
    raised: 620_000,
    goal: 1_500_000,
  },
  {
    id: 'sisters-welfare',
    title: "Sisters' Wing Welfare Support",
    tagline: 'Dedicated care for our sisters in service',
    description:
      'Transport, feeding, and emergency support for female corps members across the state.',
    image: '/images/welfare.jpg',
    priority: 3,
    raised: 340_000,
    goal: 900_000,
  },
  {
    id: 'alumni-mentorship',
    title: 'Alumni Mentorship Network',
    tagline: 'Guidance beyond the service year',
    description:
      'Connects graduating corps members with alumni for career, business, and deen guidance.',
    image: '/images/mentorship.jpg',
    priority: 4,
    raised: 210_000,
    goal: 600_000,
  },
  {
    id: 'orientation-kits',
    title: 'New Corper Orientation Kits',
    tagline: 'A warm welcome to every new arrival',
    description:
      'Prayer mats, Qur’ans, and camp essentials for freshly deployed Muslim corps members.',
    image: '/images/feature.png',
    priority: 5,
    raised: 180_000,
    goal: 500_000,
  },
  {
    id: 'ramadan-eid-outreach',
    title: 'Ramadan & Eid Outreach',
    tagline: 'No one celebrates alone',
    description:
      'Iftar packs and Eid gifts for corps members serving far from home during the blessed seasons.',
    image: '/images/sisterhood.jpg',
    priority: 6,
    raised: 95_000,
    goal: 400_000,
  },
];
