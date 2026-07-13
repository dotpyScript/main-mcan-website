import {
  Building2,
  Tent,
  Briefcase,
  MapPin,
  Users,
  Radio,
  type LucideIcon,
} from 'lucide-react';
import { SITE } from '@/lib/constants';

export type FeatureSlide = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  image: string;
  href: string;
  external?: boolean;
};

const WELFARE_WHATSAPP_URL = `https://wa.me/${SITE.emergencyWhatsapp}`;
const PORT_HARCOURT_MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=4.8156,7.0498';

export const FEATURES: FeatureSlide[] = [
  {
    id: 'lodge-finder',
    icon: Building2,
    title: 'Upland & Riverine Lodge Finder',
    description:
      'Navigate accommodation seamlessly across PH, Obio-Akpor & riverine LGAs.',
    cta: 'Launch Lodge Map',
    image: '/images/dawah.jpg',
    href: '/projects#lodges',
  },
  {
    id: 'camp-guide',
    icon: Tent,
    title: 'Nonwa-Gbam Camp Guide',
    description:
      'Freshly deployed? Access our survival guide, Halal food spots & camp mosque.',
    cta: 'Read Camp Guide',
    image: '/images/ummah.jpg',
    href: SITE.nyscCampMapUrl,
    external: true,
  },
  {
    id: 'oil-maritime',
    icon: Briefcase,
    title: 'Oil & Maritime Professional Hub',
    description:
      'Connect with elite Muslim professionals in local Oil & Gas/Maritime sectors.',
    cta: 'Join Network',
    image: '/images/sisterhood.png',
    href: WELFARE_WHATSAPP_URL,
    external: true,
  },
  {
    id: 'halal-directory',
    icon: MapPin,
    title: 'Halal Port Harcourt Directory',
    description:
      'An interactive map detailing certified dining spots, central mosques & shops.',
    cta: 'View Directory',
    image: '/images/welfare.png',
    href: PORT_HARCOURT_MAP_URL,
    external: true,
  },
  {
    id: 'alumni-network',
    icon: Users,
    title: 'Rivers Alumni Network',
    description:
      'Access job postings, real estate tips, and mentorship from ex-corpers.',
    cta: 'Access Database',
    image: '/images/mentorship.jpg',
    href: WELFARE_WHATSAPP_URL,
    external: true,
  },
  {
    id: 'khutbahs',
    icon: Radio,
    title: 'Spiritual Growth & Khutbahs',
    description:
      'Download audio archives and text summaries of weekly Friday sermons.',
    cta: 'Browse Archives',
    image: '/images/feature.png',
    href: '/events',
  },
];
