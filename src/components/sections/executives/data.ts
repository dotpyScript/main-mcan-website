export type Executive = {
  id: string;
  name: string;
  role: string;
  lga: string;
  initials: string;
  mandate: string;
  image?: string;
};

export const EXECUTIVES: Executive[] = [
  {
    id: 'amir',
    name: 'Umar Abubakar',
    role: 'Amir (President)',
    lga: 'Phalga LGA',
    initials: 'UA',
    mandate:
      'Leads the chapter, represents MCAN Rivers State, and chairs the executive council.',
  },
  {
    id: 'naib-amir',
    name: 'Ismail Ajibade',
    role: 'Naib Amir',
    lga: 'Port Harcourt',
    initials: 'IA',
    mandate: 'Deputises for the Amir and steps in to lead in his absence.',
    image: '/Excos/2.jpeg',
  },
  {
    id: 'amirah',
    name: 'Abdullahi Aminat',
    role: 'Amirah',
    lga: 'Obio-Akpor',
    initials: 'AA',
    mandate:
      "Leads the sisters' wing of the chapter and represents its members on the executive council.",
    image: '/Excos/4.jpeg',
  },
  {
    id: 'naib-amirah',
    name: 'Adewoyin Ameenat',
    role: 'Naib Amirah',
    lga: 'Eleme',
    initials: 'AM',
    mandate:
      "Deputises for the Amirah and supports coordination within the sisters' wing.",
    image: '/Excos/3.jpeg',
  },
  {
    id: 'gen-sec',
    name: 'Adeyemi Nurudeen',
    role: 'Secretary General',
    lga: 'Phalga LGA',
    initials: 'AN',
    mandate:
      'Keeps chapter records and correspondence, and coordinates EXCO meetings.',
    image: '/Excos/1.jpeg',
  },
];
