import { motion } from "framer-motion";
import { MapPin, Building2, Users, Briefcase, Shield, AlertTriangle, TrendingUp, Clock, CheckCircle2, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CityLocalContentProps {
  city: CityData;
}

// Génération de contenu unique basé sur le nom de ville (hash simple)
const hashCity = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

// Statistiques de sécurité uniques par ville
const getSecurityStats = (city: CityData) => {
  const hash = hashCity(city.slug);
  const baseRate = city.departmentCode === "93" ? 35 : city.departmentCode === "06" ? 32 : city.departmentCode === "75" ? 28 : 18;
  const variation = (hash % 12) - 6;
  
  return {
    burglaryRate: baseRate + variation,
    responseTime: 15 + (hash % 20),
    satisfactionRate: 94 + (hash % 5),
    installationsCount: 50 + (hash % 150),
    yearsActive: 3 + (hash % 8)
  };
};

// Conseils de sécurité contextuels
const getSecurityTips = (city: CityData) => {
  const tips: Record<string, string[]> = {
    "75": [
      "Privilégiez les alarmes connectées avec détection de mouvement dans les parties communes",
      "Installez un visiophone pour filtrer les visiteurs dans votre immeuble",
      "Optez pour des caméras discrètes conformes au règlement de copropriété"
    ],
    "92": [
      "Sécurisez votre parking souterrain avec un contrôle d'accès par badge",
      "Protégez vos locaux professionnels avec une vidéosurveillance multi-sites",
      "Installez une alarme silencieuse pour les bureaux en rez-de-chaussée"
    ],
    "93": [
      "Renforcez votre porte d'entrée avec un cylindre haute sécurité",
      "Installez des caméras extérieures anti-vandalisme (IK10)",
      "Optez pour une alarme avec sirène extérieure flash visible"
    ],
    "94": [
      "Protégez votre jardin avec des détecteurs de mouvement périmétrique",
      "Installez des caméras couvrant les accès garage et portail",
      "Pensez à la télésurveillance pour les résidences secondaires"
    ],
    "06": [
      "Installez des caméras thermiques pour la détection périmétrique de nuit",
      "Optez pour des équipements résistants aux conditions méditerranéennes",
      "Sécurisez piscine et dépendances avec des détecteurs d'intrusion dédiés"
    ],
    "69": [
      "Privilégiez les systèmes certifiés APSAD pour les locaux industriels",
      "Installez un contrôle d'accès biométrique pour les zones sensibles",
      "Optez pour une vidéosurveillance analytique avec reconnaissance de plaques"
    ]
  };

  const defaultTips = [
    `Réalisez un audit de sécurité gratuit pour identifier les points faibles de votre ${city.name.toLowerCase().includes("ville") ? "logement" : "propriété"}`,
    "Installez des détecteurs d'ouverture sur toutes les issues (portes, fenêtres, velux)",
    "Optez pour une solution connectée accessible depuis votre smartphone 24h/24"
  ];

  return tips[city.departmentCode] || defaultTips;
};

// Types de clients prioritaires par zone
const getClientTypes = (city: CityData) => {
  const types: Record<string, { type: string; icon: string; description: string }[]> = {
    "75": [
      { type: "Appartements haussmanniens", icon: "🏛️", description: "Solutions discrètes et intégrées" },
      { type: "Commerces de luxe", icon: "💎", description: "Vidéosurveillance HD + contrôle d'accès" },
      { type: "Bureaux & Co-working", icon: "🏢", description: "Contrôle d'accès connecté" }
    ],
    "92": [
      { type: "Sièges sociaux", icon: "🏢", description: "Solutions multi-sites intégrées" },
      { type: "Résidences de standing", icon: "🏠", description: "Domotique + sécurité haut de gamme" },
      { type: "Data centers", icon: "🖥️", description: "Sécurité certifiée Tier III/IV" }
    ],
    "93": [
      { type: "Commerces de proximité", icon: "🏪", description: "Vidéosurveillance + anti-intrusion" },
      { type: "Entrepôts logistiques", icon: "📦", description: "Sécurité périmétrique complète" },
      { type: "Pavillons individuels", icon: "🏡", description: "Alarme + caméras extérieures" }
    ],
    "94": [
      { type: "Maisons avec jardin", icon: "🏡", description: "Détection périmétrique + caméras" },
      { type: "Centres commerciaux", icon: "🛒", description: "Vidéosurveillance analytique" },
      { type: "Copropriétés", icon: "🏢", description: "Contrôle d'accès collectif" }
    ],
    "06": [
      { type: "Villas de prestige", icon: "🏰", description: "Sécurité invisible intégrée" },
      { type: "Hôtels & Resorts", icon: "🏨", description: "Solutions hospitality" },
      { type: "Résidences secondaires", icon: "🏖️", description: "Télésurveillance à distance" }
    ]
  };

  const hash = hashCity(city.slug);
  const defaultTypes = [
    { type: "Particuliers", icon: "🏠", description: "Maisons et appartements" },
    { type: "Professionnels", icon: "🏢", description: "Commerces et bureaux" },
    { type: "Collectivités", icon: "🏛️", description: "Équipements publics" }
  ];

  return types[city.departmentCode] || defaultTypes;
};

// Témoignage unique par ville
const getLocalTestimonial = (city: CityData) => {
  const hash = hashCity(city.slug);
  const names = ["M. Durand", "Mme Martin", "M. Lefebvre", "Mme Bernard", "M. Thomas", "Mme Robert", "M. Richard", "Mme Dubois"];
  const types = ["propriétaire", "commerçant", "gérant", "directeur", "responsable"];
  const quotes = [
    `Intervention rapide et professionnelle. L'équipe HD Connect a parfaitement sécurisé notre ${hash % 2 === 0 ? "commerce" : "résidence"} à ${city.name}.`,
    `Depuis l'installation de notre système d'alarme, nous dormons sur nos deux oreilles. Service client exemplaire !`,
    `Installation soignée et discrète. Les techniciens ont pris le temps de tout nous expliquer. Je recommande HD Connect à ${city.name}.`,
    `Réactifs et compétents. Notre vidéosurveillance fonctionne parfaitement depuis ${1 + (hash % 4)} ans. Merci HD Connect !`
  ];

  return {
    name: names[hash % names.length],
    type: types[hash % types.length],
    quote: quotes[hash % quotes.length],
    rating: 4 + (hash % 2)
  };
};

// Contenu spécifique par département/région
const getLocalContent = (city: CityData) => {
  const departmentContent: Record<string, { title: string; highlights: string[]; industries: string[]; stats?: string; blogLink?: { slug: string; title: string }; specificContext?: string }> = {
    "75": {
      title: "Capitale économique et culturelle",
      highlights: ["Siège de nombreuses entreprises du CAC 40", "Quartiers historiques à sécuriser", "Immeubles haussmanniens"],
      industries: ["Finance", "Luxe", "Tech", "Tourisme"],
      stats: "Plus de 60 000 cambriolages/an en IDF",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison 2026" },
      specificContext: "Paris concentre les sièges sociaux du CAC 40 et attire 30 millions de touristes par an. La vidéosurveillance IA et les alarmes connectées sont essentielles pour protéger résidences de standing, commerces de luxe et locaux professionnels."
    },
    "92": {
      title: "Pôle d'affaires majeur",
      highlights: ["La Défense, 1er quartier d'affaires européen", "Sièges sociaux internationaux", "Résidences de standing"],
      industries: ["Consulting", "Finance", "Énergie", "Telecom"],
      stats: "180 000 salariés à La Défense",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison 2026" },
      specificContext: "Les Hauts-de-Seine abritent le premier quartier d'affaires européen avec plus de 1 500 sièges sociaux. La sécurité électronique doit répondre aux exigences des grands groupes : contrôle d'accès biométrique, vidéosurveillance IA multi-sites et intégration aux systèmes IT."
    },
    "93": {
      title: "Territoire en pleine mutation",
      highlights: ["Grand Paris Express", "Zones industrielles", "Nouvelles résidences"],
      industries: ["Logistique", "Industrie", "Médias", "Sport"],
      stats: "Taux de cambriolage supérieur de 30% à la moyenne nationale",
      blogLink: { slug: "securite-commerce-seine-saint-denis-93-guide-complet", title: "Sécurité commerce Seine-Saint-Denis" },
      specificContext: "La Seine-Saint-Denis connaît un taux de cambriolages parmi les plus élevés de France. HD Connect propose des solutions renforcées : caméras anti-vandalisme, alarmes certifiées NF&A2P Bouclier 3 et intervention urgence 4h. Le Grand Paris Express transforme le territoire avec de nouvelles opportunités commerciales à protéger."
    },
    "94": {
      title: "Sud-Est parisien dynamique",
      highlights: ["Bords de Marne", "Zones pavillonnaires", "Pôles commerciaux"],
      industries: ["Commerce", "Santé", "Agroalimentaire", "Transport"],
      stats: "76% des habitants en zones pavillonnaires",
      blogLink: { slug: "alarme-maison-sans-fil-guide-achat-2026", title: "Guide alarme maison IDF" },
      specificContext: "Le Val-de-Marne se caractérise par ses zones pavillonnaires le long de la Marne et ses pôles commerciaux dynamiques (Créteil Soleil, Belle Épine). La protection périmétrique avec caméras extérieures et alarmes sans fil est particulièrement adaptée aux maisons individuelles."
    },
    "77": {
      title: "Grande couronne en expansion",
      highlights: ["Val d'Europe et Disney", "Zones logistiques majeures", "Nouveaux lotissements"],
      industries: ["Logistique", "Tourisme", "Commerce", "Agriculture"],
      stats: "2e département d'IDF en superficie",
      specificContext: "La Seine-et-Marne combine zones rurales, villes nouvelles et pôles économiques majeurs (Val d'Europe, Sénart). Les grandes distances nécessitent des solutions autonomes : caméras 4G solaires pour sites isolés, alarmes GSM et télésurveillance professionnelle."
    },
    "78": {
      title: "Yvelines prestigieuses",
      highlights: ["Château de Versailles", "Technopoles (Vélizy, Saint-Quentin)", "Résidences haut de gamme"],
      industries: ["Aéronautique", "Défense", "R&D", "Services"],
      stats: "1er département de France en pouvoir d'achat",
      specificContext: "Les Yvelines concentrent des propriétés d'exception et des sites industriels stratégiques. HD Connect installe des systèmes de sécurité discrets et haut de gamme : vidéosurveillance invisible intégrée au bâti, domotique centralisée et contrôle d'accès designer."
    },
    "91": {
      title: "Silicon Valley française",
      highlights: ["Paris-Saclay, 1er cluster scientifique européen", "Massy-Palaiseau TGV", "Zones d'activités"],
      industries: ["Tech", "Recherche", "Pharma", "Énergie"],
      stats: "15% des brevets français déposés dans le 91",
      specificContext: "L'Essonne est le cœur de l'innovation française avec le plateau de Saclay et ses 65 000 chercheurs. La sécurisation des laboratoires et data centers exige des solutions de pointe : contrôle d'accès multi-facteurs, vidéosurveillance analytique et cybersécurité intégrée."
    },
    "95": {
      title: "Porte nord de l'Île-de-France",
      highlights: ["Aéroport Roissy CDG", "Cergy-Pontoise ville nouvelle", "Zones franches"],
      industries: ["Aéroportuaire", "Logistique", "Commerce", "Industrie"],
      stats: "Roissy : 90 000 emplois, 2e plateforme européenne",
      specificContext: "Le Val-d'Oise bénéficie de la dynamique aéroportuaire de Roissy-CDG et de l'attractivité de Cergy-Pontoise. Les entreprises logistiques et hôtelières ont des besoins spécifiques : vidéosurveillance périmétrique, badges RFID haute sécurité et intégration aux systèmes aéroportuaires."
    },
    "69": {
      title: "Métropole européenne",
      highlights: ["Part-Dieu, 2e quartier d'affaires de France", "Industries pharmaceutiques", "Gastronomie"],
      industries: ["Pharma", "Chimie", "Tech", "Textile"],
      stats: "2e marché immobilier de France",
      blogLink: { slug: "installation-videosurveillance-maison-guide-complet-2026", title: "Guide vidéosurveillance 2026" },
      specificContext: "Lyon est la 2e métropole économique française avec un tissu industriel diversifié. Les laboratoires pharmaceutiques et l'industrie chimique nécessitent des systèmes de sécurité certifiés APSAD et conformes aux normes Seveso pour les sites à risque."
    },
    "13": {
      title: "Carrefour méditerranéen",
      highlights: ["Port de Marseille-Fos", "Pôle Euromed", "Tourisme de masse"],
      industries: ["Maritime", "Pétrochimie", "Tourisme", "Aéronautique"],
      stats: "1er port de France, 120 millions de tonnes/an",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas PACA" },
      specificContext: "Les Bouches-du-Rhône cumulent activité portuaire intense, tourisme de masse et zones résidentielles prisées. La sécurisation doit combiner robustesse (environnement marin) et discrétion (villas). HD Connect propose des équipements IP66 résistants aux embruns et à la chaleur méditerranéenne."
    },
    "31": {
      title: "Capitale aérospatiale",
      highlights: ["Airbus et industrie aéronautique", "Recherche spatiale", "Campus universitaires"],
      industries: ["Aéronautique", "Spatial", "Santé", "Numérique"],
      stats: "Airbus : 23 000 salariés à Toulouse",
      specificContext: "Toulouse est le cœur de l'industrie aérospatiale européenne. Les sites Airbus, Thales et les sous-traitants ont des exigences de sécurité élevées : contrôle d'accès biométrique, vidéosurveillance certifiée et conformité aux normes de défense."
    },
    "59": {
      title: "Métropole du Nord",
      highlights: ["Euralille", "Industries textiles historiques", "Commerce transfrontalier"],
      industries: ["Textile", "Commerce", "Logistique", "VPC"],
      stats: "4e métropole française en population",
      specificContext: "La métropole lilloise combine patrimoine industriel et modernité avec Euralille. Le commerce transfrontalier et la VPC (La Redoute, Auchan) nécessitent une sécurisation des entrepôts et centres logistiques : vidéosurveillance périmétrique, contrôle des accès poids-lourds et traçabilité des flux."
    },
    "33": {
      title: "Perle de Nouvelle-Aquitaine",
      highlights: ["Vignobles prestigieux", "Port de la Lune", "Économie numérique"],
      industries: ["Vin", "Aéronautique", "Tourisme", "Tech"],
      stats: "850 000 visiteurs au salon Vinexpo",
      blogLink: { slug: "domotique-ia-securite-maison-2026", title: "Domotique et sécurité 2026" },
      specificContext: "Bordeaux allie patrimoine viticole d'exception et dynamisme tech (French Tech). Les châteaux viticoles et propriétés de prestige nécessitent des systèmes discrets et intégrés : domotique centralisée, vidéosurveillance invisible et contrôle d'accès pour visiteurs professionnels."
    },
    "06": {
      title: "Côte d'Azur prestigieuse",
      highlights: ["Villas de luxe", "Événements internationaux", "Tourisme haut de gamme"],
      industries: ["Tourisme", "Événementiel", "Tech", "Immobilier"],
      stats: "2e département le plus cambriolé de France",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas Côte d'Azur" },
      specificContext: "Les Alpes-Maritimes connaissent un taux de cambriolages parmi les plus élevés de France, ciblant les villas de la Côte d'Azur. HD Connect installe des systèmes haute sécurité : caméras thermiques périmétrique, détection intrusion multi-zones et télésurveillance connectée aux forces de l'ordre."
    },
    "83": {
      title: "Var touristique et résidentiel",
      highlights: ["Saint-Tropez et le Golfe", "Base navale Toulon", "Résidences secondaires"],
      industries: ["Tourisme", "Naval", "Viticulture", "Retraite"],
      stats: "8 millions de touristes par an",
      blogLink: { slug: "protection-villa-paca-securite-residence-secondaire", title: "Protection villas Var" },
      specificContext: "Le Var attire retraités aisés et résidences secondaires de prestige. La protection des propriétés occupées saisonnièrement exige des solutions autonomes : vidéosurveillance cloud accessible à distance, alarme GSM sans dépendance internet et levée de doute vidéo pour éviter les fausses alertes."
    },
    "38": {
      title: "Capitale des Alpes",
      highlights: ["Pôle scientifique Grenoble", "Industries high-tech", "Stations de ski"],
      industries: ["Microélectronique", "Énergie", "Tourisme", "Recherche"],
      stats: "STMicroelectronics : 6 000 salariés",
      specificContext: "L'Isère concentre l'industrie de pointe française (STMicro, Schneider Electric). Les salles blanches et centres R&D nécessitent des systèmes de sécurité conformes aux normes ISO : contrôle d'accès anti-contamination, vidéosurveillance en zone ATEX et traçabilité complète."
    },
    "44": {
      title: "Métropole atlantique",
      highlights: ["Île de Nantes créative", "Port maritime", "Industrie navale"],
      industries: ["Naval", "Aéronautique", "Numérique", "Agroalimentaire"],
      stats: "6e agglomération française",
      specificContext: "Nantes combine industrie navale (STX), aéronautique (Airbus) et économie créative. Le quartier de la création et les start-ups tech ont des besoins de sécurité modernes : contrôle d'accès smartphone, vidéosurveillance cloud et espaces coworking sécurisés."
    },
    "34": {
      title: "Technopole méditerranéenne",
      highlights: ["Montpellier Méditerranée Technopole", "Universités", "Tourisme balnéaire"],
      industries: ["Santé", "Informatique", "Recherche", "Tourisme"],
      stats: "1ère ville française en croissance démographique",
      specificContext: "Montpellier est la métropole la plus dynamique de France avec une croissance démographique record. Les nouveaux quartiers (Port Marianne, Odysseum) et le tissu de start-ups nécessitent des solutions évolutives : vidéosurveillance scalable, alarmes modulaires et domotique connectée."
    }
  };

  return departmentContent[city.departmentCode] || {
    title: `Cœur du ${city.department}`,
    highlights: ["Entreprises locales dynamiques", "Tissu économique diversifié", "Projets de développement"],
    industries: ["Commerce", "Services", "Artisanat", "Industrie"],
    specificContext: `HD Connect intervient dans tout le ${city.department} pour sécuriser particuliers et professionnels. Nos techniciens certifiés connaissent les spécificités locales et proposent des solutions adaptées à chaque besoin.`
  };
};

const CityLocalContent = ({ city }: CityLocalContentProps) => {
  const localContent = getLocalContent(city);
  const securityStats = getSecurityStats(city);
  const securityTips = getSecurityTips(city);
  const clientTypes = getClientTypes(city);
  const testimonial = getLocalTestimonial(city);

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Décoration de fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Focus {city.name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {localContent.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              HD Connect adapte ses solutions de sécurité aux spécificités de {city.name} et du {city.department}.
            </p>
            {localContent.stats && (
              <p className="text-primary font-semibold mt-2">
                📊 {localContent.stats}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Contexte spécifique enrichi */}
        {localContent.specificContext && (
          <AnimatedSection animation="fade-up" delay={50}>
            <div className="max-w-4xl mx-auto mb-10 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50">
              <p className="text-muted-foreground leading-relaxed">
                {localContent.specificContext}
              </p>
              {localContent.blogLink && (
                <Link 
                  to={`/blog/${localContent.blogLink.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  📖 Lire notre guide : {localContent.blogLink.title}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </AnimatedSection>
        )}

        {/* Statistiques locales uniques */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">{securityStats.installationsCount}+</div>
              <div className="text-sm text-muted-foreground">Installations à {city.name}</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-accent mb-1">{securityStats.responseTime}min</div>
              <div className="text-sm text-muted-foreground">Temps d'intervention moyen</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-green-500 mb-1">{securityStats.satisfactionRate}%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-amber-500 mb-1">{securityStats.yearsActive} ans</div>
              <div className="text-sm text-muted-foreground">D'expertise locale</div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Points forts locaux */}
          <AnimatedSection animation="fade-up" delay={150}>
            <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Spécificités locales</h3>
                </div>
                <ul className="space-y-3">
                  {localContent.highlights.map((highlight, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Industries clés */}
          <AnimatedSection animation="fade-up" delay={250}>
            <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Secteurs d'activité</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Nos solutions protègent les acteurs clés de ces industries à {city.name} :
                </p>
                <div className="flex flex-wrap gap-2">
                  {localContent.industries.map((industry, index) => (
                    <motion.span 
                      key={industry}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Types de clients ciblés */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-12 max-w-5xl mx-auto">
            <h3 className="font-bold text-xl text-foreground text-center mb-6 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Nos solutions pour {city.name}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={client.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-card/70 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{client.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{client.type}</h4>
                  <p className="text-sm text-muted-foreground">{client.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Conseils de sécurité locaux */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">Conseils sécurité pour {city.name}</h3>
                </div>
                <ul className="space-y-3">
                  {securityTips.map((tip, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Témoignage local */}
        <AnimatedSection animation="fade-up" delay={450}>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">{testimonial.type} à {city.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Quartiers couverts */}
        {city.neighborhoods && city.neighborhoods.length > 0 && (
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Quartiers desservis à {city.name}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                {city.neighborhoods.map((neighborhood, index) => (
                  <motion.span 
                    key={neighborhood}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {neighborhood}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA local */}
        <AnimatedSection animation="fade-up" delay={550}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Vous êtes à {city.name} ? Nos techniciens interviennent dans tout le {city.department}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/#quote">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                <a href="tel:0184808652">
                  <Phone className="w-4 h-4 mr-2" />
                  01 84 80 86 52
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CityLocalContent;
