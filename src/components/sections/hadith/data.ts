export type Hadith = {
  id: string;
  title: string;
  text: string;
  narrator: string;
  source: string;
};

export const HADITHS: Hadith[] = [
  {
    id: 'intentions',
    title: 'On Intentions',
    text: 'Actions are but by intentions, and every man shall have only that which he intended.',
    narrator: 'Umar ibn al-Khattab (RA)',
    source: 'Sahih al-Bukhari 1',
  },
  {
    id: 'brotherhood',
    title: 'On Brotherhood',
    text: 'None of you truly believes until he loves for his brother what he loves for himself.',
    narrator: 'Anas ibn Malik (RA)',
    source: 'Sahih al-Bukhari 13',
  },
  {
    id: 'self-control',
    title: 'On Self-Control',
    text: 'The strong person is not the one who can overpower others. The strong person is the one who controls himself when angry.',
    narrator: 'Abu Hurairah (RA)',
    source: 'Sahih al-Bukhari 6114',
  },
  {
    id: 'the-tongue',
    title: 'On the Tongue',
    text: 'Whoever believes in Allah and the Last Day should speak good or remain silent.',
    narrator: 'Abu Hurairah (RA)',
    source: 'Sahih al-Bukhari 6018',
  },
  {
    id: 'good-character',
    title: 'On Good Character',
    text: 'The best among you are those who have the best manners and character.',
    narrator: "Abdullah ibn Amr (RA)",
    source: 'Sahih al-Bukhari 6035',
  },
  {
    id: 'smiling',
    title: 'On Kindness',
    text: "Your smiling in your brother's face is charity for you.",
    narrator: 'Abu Dharr (RA)',
    source: 'Jami at-Tirmidhi 1956',
  },
];
