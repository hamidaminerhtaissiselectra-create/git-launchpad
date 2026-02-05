import { motion } from "framer-motion";
import { MapPin, Building2, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CityLocalContentProps {
  city: CityData;
}

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

        {/* Quartiers couverts */}
        {city.neighborhoods && city.neighborhoods.length > 0 && (
          <AnimatedSection animation="fade-up" delay={350}>
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
      </div>
    </section>
  );
};

export default CityLocalContent;
