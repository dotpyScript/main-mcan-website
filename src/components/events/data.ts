export type EventItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string; // 'YYYY-MM-DD'
  startTime: string; // 24hr 'HH:MM'
  endTime: string; // 24hr 'HH:MM'
  displayTime: string;
  location: string;
  type: string;
  featured?: boolean;
};

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'general-assembly',
    title: 'General Assembly & EXCO Inauguration',
    description:
      "Every member is expected. We're inaugurating the incoming executive council and reviewing the lodge project's progress.",
    image: '/images/ummah.jpg',
    date: '2026-07-18',
    startTime: '10:00',
    endTime: '13:00',
    displayTime: '10:00 AM – 1:00 PM',
    location: 'MCAN Lodge, off Aba Road, Port Harcourt',
    type: 'Assembly',
    featured: true,
  },
  {
    id: 'weekly-halaqa',
    title: 'Weekly Halaqa: Tafsir of Surah Al-Kahf',
    description: 'A weekly tafsir circle open to all corps members and alumni.',
    image: '/images/dawah.jpg',
    date: '2026-07-10',
    startTime: '17:30',
    endTime: '19:00',
    displayTime: '5:30 PM – 7:00 PM',
    location: 'PH Central Lodge Musallah',
    type: 'Lecture',
  },
  {
    id: 'welcome-night',
    title: 'Newly Deployed Corps Members Welcome Night',
    description:
      'Meet the chapter, get your lodge assignment, and settle in before camp closes.',
    image: '/images/mentorship.jpg',
    date: '2026-07-25',
    startTime: '18:00',
    endTime: '20:30',
    displayTime: '6:00 PM – 8:30 PM',
    location: 'Nonwa-Gbam Orientation Camp',
    type: 'Social',
  },
  {
    id: 'sisters-workshop',
    title: "Sisters' Career & Skills Workshop",
    description:
      'CV clinics, interview prep, and a panel of alumni professionals.',
    image: '/images/sisterhood.png',
    date: '2026-08-02',
    startTime: '11:00',
    endTime: '15:00',
    displayTime: '11:00 AM – 3:00 PM',
    location: 'Obio-Akpor Lodge',
    type: 'Workshop',
  },
  {
    id: 'interlga-outreach',
    title: "Inter-LGA Da'wah Outreach",
    description:
      'Door-to-door outreach and free medical screening in partnership with host communities.',
    image: '/images/welfare.png',
    date: '2026-08-15',
    startTime: '08:00',
    endTime: '14:00',
    displayTime: '8:00 AM – 2:00 PM',
    location: 'Ahoada East',
    type: 'Outreach',
  },
];

export type PastEvent = {
  id: string;
  title: string;
  recap: string;
  image: string;
  date: string;
  location: string;
};

export const PAST_EVENTS: PastEvent[] = [
  {
    id: 'agm-2025',
    title: '2025 Annual General Meeting & Elections',
    recap:
      'The chapter elected its 2025/2026 executive council in a peaceful, well-attended election.',
    image: '/images/feature.png',
    date: '2025-12-14',
    location: 'Port Harcourt',
  },
  {
    id: 'iftar-nights-2026',
    title: 'Ramadan Iftar Nights 2026',
    recap:
      'Nightly iftar for over 300 corps members across four lodges throughout Ramadan.',
    image: '/images/ummah.jpg',
    date: '2026-03-20',
    location: 'Port Harcourt',
  },
  {
    id: 'eid-celebration-2026',
    title: 'Eid-el-Fitr Celebration',
    recap:
      'A joyful Eid prayer and breakfast bringing together corps members from every LGA.',
    image: '/images/dawah.jpg',
    date: '2026-04-01',
    location: 'MCAN Lodge, Port Harcourt',
  },
  {
    id: 'ansar-homecoming',
    title: 'Ansar Alumni Homecoming',
    recap:
      'Alumni returned to mentor the current EXCO and tour the lodge project site.',
    image: '/images/mentorship.jpg',
    date: '2026-05-10',
    location: 'Port Harcourt',
  },
];
