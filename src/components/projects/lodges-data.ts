export type Lodge = {
  id: string;
  name: string;
  lga: string;
  address: string;
  image: string;
  lat: number;
  lng: number;
};

export const LODGES: Lodge[] = [
  {
    id: 'ph-central',
    name: 'Port Harcourt Central Lodge',
    lga: 'Port Harcourt',
    address: '14 Aba Road, Port Harcourt, Rivers State',
    image: '/images/ummah.jpg',
    lat: 4.8156,
    lng: 7.0498,
  },
  {
    id: 'obio-akpor',
    name: 'Obio-Akpor Lodge',
    lga: 'Obio-Akpor',
    address: '7 Rumuola Road, Obio-Akpor, Rivers State',
    image: '/images/dawah.jpg',
    lat: 4.8396,
    lng: 6.9779,
  },
  {
    id: 'eleme-waterside',
    name: 'Eleme Waterside Lodge',
    lga: 'Eleme',
    address: '22 Refinery Road, Eleme, Rivers State',
    image: '/images/welfare.png',
    lat: 4.783,
    lng: 7.1236,
  },
  {
    id: 'bonny-island',
    name: 'Bonny Island Lodge',
    lga: 'Bonny',
    address: '5 Finima Road, Bonny Island, Rivers State',
    image: '/images/mentorship.jpg',
    lat: 4.4463,
    lng: 7.1666,
  },
  {
    id: 'ahoada',
    name: 'Ahoada Lodge',
    lga: 'Ahoada East',
    address: '3 Government Road, Ahoada East, Rivers State',
    image: '/images/feature.png',
    lat: 5.0833,
    lng: 6.65,
  },
  {
    id: 'etche',
    name: 'Etche Lodge',
    lga: 'Etche',
    address: '9 Okehi Road, Etche, Rivers State',
    image: '/images/sisterhood.png',
    lat: 5.1,
    lng: 6.95,
  },
];
