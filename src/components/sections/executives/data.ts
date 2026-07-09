export type Executive = {
  id: string;
  name: string;
  role: string;
  lga: string;
  initials: string;
};

export const EXECUTIVES: Executive[] = [
  {
    id: 'amir',
    name: 'Abdulrahman Yusuf',
    role: 'Amir (President)',
    lga: 'Port Harcourt',
    initials: 'AY',
  },
  {
    id: 'naib-amirah',
    name: 'Fatimah Bello',
    role: "Naib Amirah (Vice President)",
    lga: 'Obio-Akpor',
    initials: 'FB',
  },
  {
    id: 'gen-sec',
    name: 'Ibrahim Suleiman',
    role: 'General Secretary',
    lga: 'Eleme',
    initials: 'IS',
  },
  {
    id: 'asst-sec',
    name: 'Aisha Muhammed',
    role: 'Assistant Secretary',
    lga: 'Okrika',
    initials: 'AM',
  },
  {
    id: 'fin-sec',
    name: 'Yusuf Abdullahi',
    role: 'Financial Secretary',
    lga: 'Ikwerre',
    initials: 'YA',
  },
  {
    id: 'treasurer',
    name: 'Zainab Idris',
    role: 'Treasurer',
    lga: 'Emuoha',
    initials: 'ZI',
  },
  {
    id: 'pro',
    name: 'Musa Aliyu',
    role: 'Public Relations Officer',
    lga: 'Bonny',
    initials: 'MA',
  },
  {
    id: 'welfare',
    name: 'Hadiza Sani',
    role: 'Welfare Officer',
    lga: 'Etche',
    initials: 'HS',
  },
  {
    id: 'dawah',
    name: 'Umar Farouk',
    role: "Da'wah Coordinator",
    lga: 'Tai',
    initials: 'UF',
  },
];
