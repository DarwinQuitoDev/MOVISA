export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  altText: string;
  longDescription: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Terapia Traumatológica',
    description: 'Rehabilitación especializada para lesiones musculares, óseas y articulares.',
    image: '/src/assets/img/1.webp',
    altText: 'Terapia traumatológica en MOVISA',
    longDescription: 'Nuestro servicio de terapia traumatológica se especializa en la rehabilitación de lesiones del sistema músculo-esquelético. Tratamos fracturas, esguinces, tendinitis, y lesiones deportivas con técnicas modernas y personalizadas.'
  },
  {
    id: 2,
    title: 'Terapia Neurológica',
    description: 'Tratamiento especializado para pacientes con condiciones neurológicas.',
    image: '/src/assets/img/10.webp',
    altText: 'Terapia neurológica en MOVISA',
    longDescription: 'Ofrecemos terapia neurológica integral para pacientes con ACV, Parkinson, esclerosis múltiple y otras condiciones neurológicas. Nuestro enfoque se centra en mejorar la función y calidad de vida.'
  },
  {
    id: 3,
    title: 'Terapia Deportiva',
    description: 'Recuperación y prevención de lesiones para deportistas.',
    image: '/src/assets/img/3.webp',
    altText: 'Terapia deportiva en MOVISA',
    longDescription: 'Nuestra terapia deportiva está diseñada para ayudar a atletas y deportistas a recuperarse de lesiones y mejorar su rendimiento. Incluye evaluación, tratamiento y programas de prevención.'
  },
  {
    id: 5,
    title: 'Terapia Geriátrica',
    description: 'Rehabilitación adaptada para adultos mayores.',
    image: '/src/assets/img/5.webp',
    altText: 'Terapia geriátrica en MOVISA',
    longDescription: 'Nuestra terapia geriátrica está diseñada específicamente para adultos mayores, enfocándose en mantener la movilidad, el equilibrio y la independencia funcional.'
  },
  {
    id: 6,
    title: 'Masaje Terapéutico',
    description: 'Técnicas de masaje especializadas para alivio y recuperación.',
    image: '/src/assets/img/11.webp',
    altText: 'Masaje terapéutico en MOVISA',
    longDescription: 'Ofrecemos masajes terapéuticos profesionales para aliviar el dolor, reducir la tensión muscular y promover la recuperación física. Utilizamos diversas técnicas según las necesidades del paciente.'
  }
];
