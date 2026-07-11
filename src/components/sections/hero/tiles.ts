export type TileConfig = {
  id: string;
  label: string;
  src: string;
  top: string;
  offset: string;
  width: number;
  height: number;
  floatX: number[];
  floatY: number[];
  duration: number;
  delay: number;
};

export const LEFT_TILES: TileConfig[] = [
  {
    id: 'dawah',
    label: 'Dawah',
    src: '/images/dawah.jpg',
    top: '4%',
    offset: '18%',
    width: 70,
    height: 70,
    floatX: [0, 22, -10, 6, 0],
    floatY: [0, -16, 12, -6, 0],
    duration: 11,
    delay: 0,
  },
  {
    id: 'ummah',
    label: 'Ummah',
    src: '/images/ummah.jpg',
    top: '38%',
    offset: '30%',
    width: 50,
    height: 50,
    floatX: [0, -20, 14, -8, 0],
    floatY: [0, 14, -16, 8, 0],
    duration: 13.5,
    delay: 1.2,
  },
  {
    id: 'sisterhood',
    label: 'Sisterhood',
    src: '/images/sisterhood.png',
    top: '68%',
    offset: '12%',
    width: 70,
    height: 70,
    floatX: [0, 16, -22, 10, 0],
    floatY: [0, -12, 16, -8, 0],
    duration: 12,
    delay: 0.6,
  },
];

export const RIGHT_TILES: TileConfig[] = [
  {
    id: 'mentorship',
    label: 'Mentorship',
    src: '/images/mentorship.jpg',
    top: '2%',
    offset: '20%',
    width: 70,
    height: 70,
    floatX: [0, -22, 12, -6, 0],
    floatY: [0, 14, -10, 6, 0],
    duration: 12.5,
    delay: 0.4,
  },
  {
    id: 'welfare',
    label: 'Welfare',
    src: '/images/welfare.png',
    top: '36%',
    offset: '32%',
    width: 50,
    height: 50,
    floatX: [0, 18, -16, 8, 0],
    floatY: [0, -14, 12, -6, 0],
    duration: 10.5,
    delay: 1.6,
  },
  {
    id: 'future',
    label: 'Future',
    src: '/images/feature.png',
    top: '66%',
    offset: '14%',
    width: 70,
    height: 70,
    floatX: [0, -16, 20, -10, 0],
    floatY: [0, 12, -14, 6, 0],
    duration: 14,
    delay: 0.9,
  },
];
