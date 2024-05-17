
import { NavLink } from "./Types";

export const navLinks: NavLink[] = [
  { name: "Accueil", to: "/#hero" },
  { name: "Services", to: "/#services" },
  { name: "A propos de nous", to: "/#about" },
  { name: "Recrutement", to: "/#recrutement" },
  { name: "Contact", to: "/#contact" },
];

// export const services_list = [
//   {
//     icon: gardening,
//     title: "Entretien d'Espaces Verts",
//     description:
//       "Nos jardiniers experts sont là pour transformer votre espace extérieur en un véritable havre de paix. De la tonte de pelouse à la taille d'arbustes en passant par la création de jardins paysagers personnalisés, nous prenons en charge tous les aspects de l'entretien de votre jardin.",
//   },
//   {
//     icon: cleaning,
//     title: "Services de Nettoyage",
//     description:
//       "Un environnement propre est essentiel pour votre bien-être et celui de vos proches ou de vos clients. Nos équipes de nettoyage professionnelles s'occupent de tout, des bureaux aux espaces commerciaux en passant par les résidences privées, pour vous offrir un intérieur impeccable",
//   },
//   {
//     icon: plumber,
//     title: "Services de Plomberie",
//     description:
//       "Nos experts en entretien d'espaces verts veillent à ce que votre jardin reste magnifique toute l'année. De la fertilisation au désherbage en passant par l'irrigation, nous travaillons avec vous pour créer un programme d'entretien personnalisé adapté aux besoins uniques de votre espace extérieur.",
//   },
//   {
//     icon: guard,
//     title: "Services de Sécurité et Surveillance",
//     description:
//       "Protégez votre propriété et vos biens avec nos solutions de sécurité et de surveillance. Nous proposons des systèmes de surveillance vidéo, des services de surveillance humaine et des installations de sécurité sur mesure pour répondre à vos besoins spécifiques en matière de sécurité résidentielle et commerciale.",
//   },
//   {
//     icon: menage,
//     title: "Ménage résidentiel et commercial",
//     description:
//       "Simplifiez votre vie quotidienne en confiant vos tâches de ménage à notre équipe professionnelle et expérimentée. Nous proposons des services de nettoyage résidentiel et commercial complets, adaptés à vos besoins spécifiques et à votre emploi du temps chargé. Que ce soit pour le nettoyage régulier de votre domicile.",
//   },
//   {
//     icon: installation,
//     title: "Installation de nouveaux équipements sanitaires",
//     description:
//       "Modernisez votre salle de bains ou votre cuisine avec nos services d'installation de nouveaux équipements sanitaires. Nous installons des lavabos, des robinets, des douches, des baignoires, des toilettes et d'autres équipements sanitaires de haute qualité, offrant confort, fonctionnalité et style à votre espace.",
//   },
// ];
export const services_list = [
  {
    icon: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphcmRpbmFnZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Entretien d'Espaces Verts",
    detailedDescription: [
      "Nos équipes spécialisées sont là pour transformer votre espace extérieur en un véritable havre de paix. De la conception initiale à la mise en œuvre et à l'entretien régulier, nous prenons en charge tous les aspects de la gestion de votre jardin.",
      "Nous offrons une gamme complète de services, y compris la tonte de pelouse, la taille des arbustes, la plantation de fleurs, l'installation de systèmes d'irrigation et bien plus encore.",
      "Nous nous engageons à utiliser des pratiques respectueuses de l'environnement et des produits écologiques pour maintenir la beauté naturelle de votre jardin tout en préservant la santé de votre famille et de l'écosystème environnant."
    ],
  },
  {
    icon: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D",
    title: "Services de Nettoyage",
    detailedDescription: [
      "Nous comprenons l'importance d'un environnement propre pour votre bien-être et celui de vos proches ou de vos clients.",
      "Nos équipes de nettoyage professionnelles sont formées pour s'occuper de tout, des bureaux aux espaces commerciaux en passant par les résidences privées.",
      "Nous offrons des services de nettoyage réguliers, de nettoyage après déménagement, de nettoyage de printemps et bien plus encore, adaptés à vos besoins spécifiques.",
      "Nous utilisons des produits de nettoyage écologiques pour garantir un intérieur frais et sain, sans compromettre la qualité des résultats."
    ],
  },
  {
    icon: "https://images.unsplash.com/photo-1545193329-4a052e14eb8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsb21iZXJpZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Services de Plomberie",
    detailedDescription: [
      "Des petites fuites aux installations de plomberie complexes, notre équipe de plombiers qualifiés est là pour résoudre tous vos problèmes de plomberie rapidement et efficacement.",
      "Nous offrons une gamme complète de services, y compris la réparation de fuites, le remplacement de tuyaux, l'installation de nouveaux équipements sanitaires, le débouchage de canalisations et bien plus encore.",
      "Nous utilisons des matériaux de haute qualité et des techniques avancées pour garantir des résultats durables et fiables, tout en respectant les normes de sécurité les plus strictes."
    ],
  },
  {
    icon: "https://images.unsplash.com/photo-1530151928300-3864d0e5d178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd1YXJkfGVufDB8fDB8fHww",
    title: "Services de Sécurité et Surveillance",
    detailedDescription: [
      "Protégez votre propriété avec des solutions sur mesure pour répondre à vos besoins spécifiques en matière de sécurité.",
      "Nous proposons l'installation de systèmes d'alarme, de caméras de surveillance, de contrôles d'accès et de systèmes de verrouillage pour assurer la sécurité de votre domicile ou de votre entreprise.",
      "Nos experts en sécurité évaluent vos besoins et conçoivent des solutions personnalisées pour vous offrir une tranquillité d'esprit totale.",
      "Nous utilisons des équipements de haute technologie et des techniques de pointe pour garantir une protection efficace contre les intrusions et les menaces potentielles."
    ],
  },
];


export const faq_list = [
  {
    title: "Quels services propose votre société ?",
    description:
      "Notre société offre une gamme complète de services incluant le ménage résidentiel et commercial, la sécurité, le jardinage et l'entretien d'espaces verts. Que vous ayez besoin d'un nettoyage régulier de votre domicile, de la surveillance de votre entreprise, ou encore de l'embellissement de votre jardin, nous avons les compétences nécessaires pour répondre à vos besoins.",
  },
  {
    title: "Comment puis-je planifier mes services ?",
    description:
      "La planification de nos services est simple et flexible. Vous pouvez soit nous contacter directement par téléphone ou via notre site web pour discuter de vos besoins spécifiques et planifier une intervention adaptée à votre emploi du temps.",
  },
  {
    title: "Quels sont vos tarifs ?",
    description:
      "Nos tarifs varient en fonction de la nature des services demandés, de la taille des espaces à entretenir et de la fréquence des interventions. Nous vous invitons à nous contacter pour obtenir un devis personnalisé en fonction de vos besoins.",
  },
  {
    title: "Vos employés sont-ils formés et assurés ?",
    description:
      "Oui, tous nos employés sont hautement qualifiés, formés et assurés pour garantir un service de qualité et votre tranquillité d'esprit.",
  },
  {
    title:
      "Puis-je faire confiance à la sécurité de mes biens avec votre société ?",
    description:
      "Absolument. La sécurité de nos clients et de leurs biens est notre priorité absolue. Nos agents de sécurité sont rigoureusement sélectionnés et formés pour assurer une surveillance efficace et discrète.",
  },
  {
    title: "Proposez-vous des contrats à long terme ?",
    description:
      "Oui, nous proposons des contrats à long terme pour nos services de ménage, de sécurité, de jardinage et d'entretien d'espaces verts. Ces contrats offrent des avantages spéciaux et une tranquillité d'esprit continue pour nos clients.",
  },
  {
    title: "Que faire si je ne suis pas satisfait du service rendu ?",
    description:
      "Votre satisfaction est notre priorité. Si pour une raison quelconque vous n'êtes pas entièrement satisfait de nos services, veuillez nous contacter immédiatement et nous ferons tout notre possible pour rectifier la situation.",
  },
  {
    title: "Comment puis-je annuler ou modifier un rendez-vous ?",
    description:
      "Pour annuler ou modifier un rendez-vous, veuillez nous contacter dès que possible par téléphone ou par email. Nous ferons de notre mieux pour accommoder vos changements de planning.",
  },
  {
    title: "Êtes-vous disponibles les week-ends et les jours fériés ?",
    description:
      "Oui, nous proposons des services les week-ends et les jours fériés pour répondre à tous vos besoins en matière d'entretien et de sécurité, selon vos préférences et disponibilités.",
  },
  {
    title: "Comment puis-je vous contacter en cas d'urgence ?",
    description:
      "En cas d'urgence, vous pouvez nous contacter 24h/24 et 7j/7 au numéro d'urgence indiqué sur notre site web. Nous sommes là pour vous aider en toutes circonstances.",
  },
];

export const navigation = [
  { name: "Accueil", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Equipe", href: "#team" },
  { name: "Faq", href: "#faq" },
  { name: "Contact", href: "#contact" },
];



// export const isMobile = useMediaQuery('(max-width:768px)')
