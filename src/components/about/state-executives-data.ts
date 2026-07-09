export type StateExecutive = {
  id: string;
  name: string;
  role: string;
  cohort: string;
  bio: string;
  initials: string;
};

export const STATE_EXECUTIVES: StateExecutive[] = [
  {
    id: 'chairman',
    name: 'Alhaji Musa Ibrahim',
    role: 'Chairman, Board of Trustees',
    cohort: 'Batch 2008 Alumnus',
    bio: 'Oversees the board and represents the chapter to state and national MCAN leadership.',
    initials: 'MI',
  },
  {
    id: 'matron',
    name: 'Hajia Amina Suleiman',
    role: 'Matron',
    cohort: 'Batch 2011 Alumna',
    bio: "Guides the sisters' wing and mentors female corps members through their service year.",
    initials: 'AS',
  },
  {
    id: 'patron',
    name: 'Alhaji Ismail Bello',
    role: 'Patron',
    cohort: 'Batch 2005 Alumnus',
    bio: 'Advises the Amir and secures partnerships that support the lodge project.',
    initials: 'IB',
  },
  {
    id: 'state-secretary',
    name: 'Barrister Hauwa Abdullahi',
    role: 'State Secretary',
    cohort: 'Batch 2013 Alumna',
    bio: "Maintains the chapter's constitution, records, and institutional memory across service years.",
    initials: 'HA',
  },
  {
    id: 'financial-trustee',
    name: 'Engr. Nasir Yakubu',
    role: 'Financial Trustee',
    cohort: 'Batch 2009 Alumnus',
    bio: "Manages the lodge project fund and reviews the corps EXCO's financial reports.",
    initials: 'NY',
  },
  {
    id: 'ansar-coordinator',
    name: 'Dr. Maryam Usman',
    role: 'Ansar Coordinator',
    cohort: 'Batch 2016 Alumna',
    bio: 'Organises the alumni network and connects corps members with mentorship after service.',
    initials: 'MU',
  },
];
