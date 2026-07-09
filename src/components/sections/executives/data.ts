export type Executive = {
  id: string;
  name: string;
  role: string;
  lga: string;
  initials: string;
  mandate: string;
};

export const EXECUTIVES: Executive[] = [
  {
    id: 'amir',
    name: 'Abdulrahman Yusuf',
    role: 'Amir (President)',
    lga: 'Port Harcourt',
    initials: 'AY',
    mandate:
      'Leads the chapter, represents MCAN Rivers State, and chairs the executive council.',
  },
  {
    id: 'naib-amirah',
    name: 'Fatimah Bello',
    role: "Naib Amirah (Vice President)",
    lga: 'Obio-Akpor',
    initials: 'FB',
    mandate: "Deputises for the Amir and leads the sisters' wing of the chapter.",
  },
  {
    id: 'gen-sec',
    name: 'Ibrahim Suleiman',
    role: 'General Secretary',
    lga: 'Eleme',
    initials: 'IS',
    mandate: 'Keeps chapter records and correspondence, and coordinates EXCO meetings.',
  },
  {
    id: 'asst-sec',
    name: 'Aisha Muhammed',
    role: 'Assistant Secretary',
    lga: 'Okrika',
    initials: 'AM',
    mandate: 'Supports the Secretary and stands in during their absence.',
  },
  {
    id: 'fin-sec',
    name: 'Yusuf Abdullahi',
    role: 'Financial Secretary',
    lga: 'Ikwerre',
    initials: 'YA',
    mandate: 'Tracks dues and donations, and prepares financial reports.',
  },
  {
    id: 'treasurer',
    name: 'Zainab Idris',
    role: 'Treasurer',
    lga: 'Emuoha',
    initials: 'ZI',
    mandate: 'Holds and disburses chapter funds for approved activities.',
  },
  {
    id: 'pro',
    name: 'Musa Aliyu',
    role: 'Public Relations Officer',
    lga: 'Bonny',
    initials: 'MA',
    mandate: 'Manages chapter communications, publicity, and external relations.',
  },
  {
    id: 'welfare',
    name: 'Hadiza Sani',
    role: 'Welfare Officer',
    lga: 'Etche',
    initials: 'HS',
    mandate: 'Coordinates lodging, feeding, and emergency support for members.',
  },
  {
    id: 'dawah',
    name: 'Umar Farouk',
    role: "Da'wah Coordinator",
    lga: 'Tai',
    initials: 'UF',
    mandate: "Organises halaqas, lectures, and outreach in host communities.",
  },
];
