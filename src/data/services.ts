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
    description: 'Rehabilitación especializada para lesiones musculares, óseas y articulares, con un enfoque personalizado que combina técnicas manuales, ejercicios terapéuticos y tecnología de vanguardia para una recuperación óptima.',
    image: '/assets/img/1.webp',
    altText: 'Terapia traumatológica en MOVISA',
    longDescription: 'Nuestro servicio de terapia traumatológica se especializa en la rehabilitación integral de lesiones del sistema músculo-esquelético. Utilizamos un enfoque multidisciplinario que incluye terapia manual avanzada, ejercicios terapéuticos personalizados, y equipamiento de última generación. Tratamos una amplia gama de condiciones incluyendo fracturas, esguinces, tendinitis, lesiones deportivas, problemas posturales y dolores crónicos. Nuestro equipo de especialistas desarrolla planes de tratamiento individualizados que no solo abordan el dolor y la lesión, sino que también trabajan en la prevención de futuras lesiones y el fortalecimiento general.'
  },
  {
    id: 2,
    title: 'Terapia Neurológica',
    description: 'Tratamiento especializado y comprehensivo para pacientes con condiciones neurológicas, utilizando técnicas innovadoras y un enfoque multidisciplinario para mejorar la función y calidad de vida.',
    image: '/assets/img/10.webp',
    altText: 'Terapia neurológica en MOVISA',
    longDescription: 'Ofrecemos terapia neurológica integral utilizando las últimas técnicas y tecnologías en neurorrehabilitación. Nuestro programa abarca el tratamiento de diversas condiciones como ACV, Parkinson, esclerosis múltiple, lesiones medulares y traumatismos craneoencefálicos. Trabajamos en la recuperación de la movilidad, el equilibrio, la coordinación y las funciones cognitivas. Implementamos programas personalizados que incluyen ejercicios específicos, estimulación neuromuscular, entrenamiento del equilibrio y actividades funcionales para maximizar la independencia y mejorar la calidad de vida de nuestros pacientes.'
  },
  {
    id: 3,
    title: 'Terapia Deportiva',
    description: 'Rehabilitación especializada y prevención de lesiones para deportistas de todos los niveles, combinando técnicas modernas de recuperación con programas de entrenamiento específicos para cada deporte.',
    image: '/assets/img/3.webp',
    altText: 'Terapia deportiva en MOVISA',
    longDescription: 'Nuestra terapia deportiva está diseñada para atender las necesidades específicas de atletas y deportistas de todos los niveles. Ofrecemos una combinación de técnicas avanzadas de rehabilitación, incluyendo terapia manual, ejercicios funcionales, vendaje neuromuscular y programas de fortalecimiento específicos para cada deporte. Nuestros servicios abarcan la recuperación de lesiones deportivas agudas y crónicas, programas de prevención de lesiones, evaluación biomecánica, y planes de retorno seguro a la actividad deportiva. Trabajamos en estrecha colaboración con entrenadores y médicos deportivos para garantizar una recuperación óptima y mejorar el rendimiento deportivo.'
  },
  {
    id: 5,
    title: 'Terapia Geriátrica',
    description: 'Rehabilitación especializada para adultos mayores, enfocada en mantener la independencia funcional, mejorar la movilidad y prevenir caídas, con un enfoque holístico y personalizado.',
    image: '/assets/img/5.webp',
    altText: 'Terapia geriátrica en MOVISA',
    longDescription: 'Nuestra terapia geriátrica está diseñada específicamente para atender las necesidades únicas de los adultos mayores. Utilizamos un enfoque integral que combina ejercicios terapéuticos, entrenamiento del equilibrio, fortalecimiento muscular y actividades funcionales. Nos especializamos en el tratamiento de condiciones comunes en la tercera edad como artritis, osteoporosis, problemas de equilibrio, dificultades en la marcha y recuperación post-quirúrgica. Nuestro objetivo es mejorar la movilidad, prevenir caídas, mantener la independencia funcional y mejorar la calidad de vida de nuestros pacientes mayores en un ambiente seguro y acogedor.'
  },
  {
    id: 6,
    title: 'Masaje Terapéutico',
    description: 'Técnicas avanzadas de masaje terapéutico para alivio del dolor, reducción del estrés y recuperación muscular, aplicadas por profesionales especializados con años de experiencia.',
    image: '/assets/img/11.webp',
    altText: 'Masaje terapéutico en MOVISA',
    longDescription: 'Ofrecemos servicios de masaje terapéutico profesional que combinan diversas técnicas especializadas como masaje profundo, liberación miofascial, técnicas de relajación y puntos gatillo. Nuestros terapeutas están altamente capacitados para tratar una variedad de condiciones incluyendo dolor muscular crónico, tensión cervical, lumbalgia, estrés y fatiga muscular. Cada sesión se personaliza según las necesidades específicas del paciente, incorporando diferentes técnicas y presiones para lograr los mejores resultados. El masaje terapéutico no solo ayuda en la recuperación física, sino que también promueve el bienestar general y la reducción del estrés.'
  }
];
