// Données des villes pour les pages SEO locales - Version enrichie
export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  regionSlug: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}

export const citiesData: CityData[] = [
  // ===== ÎLE-DE-FRANCE =====
  {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "2,1 millions",
    description: "Atteignez le Top 3 Sécurité à Paris en 2025-2026. HD Connect, expert certifié NF&A2P, installe des systèmes de vidéosurveillance IA 4K et des alarmes intelligentes. Audit gratuit, intervention 4h urgence dans tous les arrondissements.",
    neighborhoods: ["Le Marais", "Montmartre", "Saint-Germain", "Bastille", "Belleville", "Auteuil", "Passy", "Nation", "République", "Opéra", "Châtelet", "La Défense"],
    nearbyTowns: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes", "Saint-Denis", "Montreuil"]
  },
  {
    name: "Créteil",
    slug: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "92 000",
    description: "HD Connect intervient à Créteil et dans tout le Val-de-Marne pour vos installations de sécurité : caméras de surveillance, systèmes d'alarme, contrôle d'accès. Devis gratuit et intervention rapide.",
    neighborhoods: ["Centre-Ville", "Mont-Mesly", "La Source", "Préfecture", "L'Échat", "Bords de Marne"],
    nearbyTowns: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Alfortville", "Choisy-le-Roi", "Bonneuil-sur-Marne"]
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "95 000",
    description: "Expert en sécurité à Vitry-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide pour particuliers et entreprises.",
    neighborhoods: ["Centre-Ville", "Port à l'Anglais", "Plateau", "Coteau", "Gare"],
    nearbyTowns: ["Ivry-sur-Seine", "Choisy-le-Roi", "Thiais", "Villejuif", "Alfortville"]
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "76 000",
    description: "HD Connect, installateur de sécurité à Saint-Maur-des-Fossés. Vidéosurveillance HD, alarmes certifiées, domotique pour maisons et commerces. Devis gratuit, intervention rapide.",
    neighborhoods: ["La Varenne-Saint-Hilaire", "Saint-Maur Créteil", "Le Parc", "Adamville", "Champignol"],
    nearbyTowns: ["Créteil", "Joinville-le-Pont", "Bonneuil-sur-Marne", "Champigny-sur-Marne", "Sucy-en-Brie"]
  },
  {
    name: "Boulogne-Billancourt",
    slug: "boulogne-billancourt",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "121 000",
    description: "Installation sécurité à Boulogne-Billancourt par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences de standing et sièges sociaux. Expert Hauts-de-Seine.",
    neighborhoods: ["Centre-Ville", "Point du Jour", "Silly-Gallieni", "Princes-Marmottan", "Rives de Seine"],
    nearbyTowns: ["Issy-les-Moulineaux", "Meudon", "Sèvres", "Saint-Cloud", "Paris 16e"]
  },
  {
    name: "Versailles",
    slug: "versailles",
    department: "Yvelines",
    departmentCode: "78",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "HD Connect à Versailles : solutions de sécurité haut de gamme pour propriétés d'exception. Vidéosurveillance discrète, alarmes certifiées, domotique intégrée.",
    neighborhoods: ["Notre-Dame", "Saint-Louis", "Montreuil", "Porchefontaine", "Clagny-Glatigny"],
    nearbyTowns: ["Le Chesnay", "Viroflay", "Vélizy-Villacoublay", "Saint-Cyr-l'École", "Rocquencourt"]
  },
  // ===== VILLES IDF SUPPLÉMENTAIRES (Zone Primaire) =====
  {
    name: "Saint-Denis",
    slug: "saint-denis",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "113 000",
    description: "Expert sécurité à Saint-Denis (93). HD Connect protège commerces, entreprises et résidences autour du Stade de France. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Pleyel", "Franc-Moisin", "La Plaine", "Stade de France"],
    nearbyTowns: ["Aubervilliers", "Épinay-sur-Seine", "Pierrefitte", "Villetaneuse", "Paris 18e"]
  },
  {
    name: "Montreuil",
    slug: "montreuil",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "109 000",
    description: "Installation sécurité Montreuil par HD Connect. Vidéosurveillance, alarmes pour commerces, ateliers d'artistes et résidences. Intervention rapide 93.",
    neighborhoods: ["Centre-Ville", "Croix de Chavaux", "Bas-Montreuil", "La Noue", "Signac"],
    nearbyTowns: ["Vincennes", "Bagnolet", "Romainville", "Rosny-sous-Bois", "Fontenay-sous-Bois"]
  },
  {
    name: "Argenteuil",
    slug: "argenteuil",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "111 000",
    description: "HD Connect Argenteuil : sécurité électronique pour la plus grande ville du 95. Caméras, alarmes, contrôle d'accès. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Val-d'Argent", "Orgemont", "Joliot-Curie", "Val Notre-Dame"],
    nearbyTowns: ["Bezons", "Colombes", "Gennevilliers", "Sartrouville", "Cormeilles-en-Parisis"]
  },
  {
    name: "Nanterre",
    slug: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "96 000",
    description: "Expert sécurité Nanterre, préfecture des Hauts-de-Seine. HD Connect sécurise La Défense, universités et zones d'activités. Intervention rapide 92.",
    neighborhoods: ["Centre-Ville", "La Défense", "Université", "Mont-Valérien", "Petit Nanterre"],
    nearbyTowns: ["Rueil-Malmaison", "Puteaux", "Suresnes", "Colombes", "Courbevoie"]
  },
  {
    name: "Courbevoie",
    slug: "courbevoie",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "85 000",
    description: "Sécurité à Courbevoie et La Défense par HD Connect. Protection sièges sociaux, commerces, résidences. Vidéosurveillance 4K, contrôle d'accès biométrique.",
    neighborhoods: ["La Défense", "Bécon-les-Bruyères", "Faubourg de l'Arche", "Charras", "Centre-Ville"],
    nearbyTowns: ["Puteaux", "Neuilly-sur-Seine", "Levallois-Perret", "La Garenne-Colombes", "Nanterre"]
  },
  {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "62 000",
    description: "Sécurité haut de gamme à Neuilly-sur-Seine. HD Connect installe des systèmes discrets pour hôtels particuliers, résidences de standing et bureaux de prestige.",
    neighborhoods: ["Sablons", "Bagatelle", "Saint-James", "Île de la Jatte", "Ancienne Mairie"],
    nearbyTowns: ["Levallois-Perret", "Paris 16e", "Paris 17e", "Courbevoie", "Puteaux"]
  },
  {
    name: "Issy-les-Moulineaux",
    slug: "issy-les-moulineaux",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 000",
    description: "HD Connect à Issy-les-Moulineaux : sécurité pour entreprises médias, sièges sociaux et résidences modernes. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Val de Seine", "Les Épinettes", "Centre-Ville", "La Ferme", "Fort d'Issy"],
    nearbyTowns: ["Vanves", "Meudon", "Paris 15e", "Boulogne-Billancourt", "Clamart"]
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Installation sécurité Levallois-Perret par HD Connect. Commune la plus dense de France : alarmes, vidéosurveillance, contrôle d'accès pour immeubles et commerces.",
    neighborhoods: ["Front de Seine", "Centre-Ville", "Alsace", "Louise Michel", "Anatole France"],
    nearbyTowns: ["Neuilly-sur-Seine", "Clichy", "Paris 17e", "Asnières-sur-Seine", "Courbevoie"]
  },
  {
    name: "Vincennes",
    slug: "vincennes",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "50 000",
    description: "Expert sécurité Vincennes et Bois de Vincennes. HD Connect protège résidences, commerces et équipements sportifs. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Château", "Nord", "Est", "Montreuil"],
    nearbyTowns: ["Fontenay-sous-Bois", "Montreuil", "Saint-Mandé", "Paris 12e", "Nogent-sur-Marne"]
  },
  {
    name: "Champigny-sur-Marne",
    slug: "champigny-sur-marne",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "78 000",
    description: "HD Connect Champigny-sur-Marne : installation vidéosurveillance, alarmes pour pavillons et commerces. Couverture complète bords de Marne.",
    neighborhoods: ["Centre-Ville", "Bois l'Abbé", "Coeuilly", "Plant", "Tremblay"],
    nearbyTowns: ["Joinville-le-Pont", "Le Perreux-sur-Marne", "Bry-sur-Marne", "Villiers-sur-Marne", "Chennevières-sur-Marne"]
  },
  {
    name: "Ivry-sur-Seine",
    slug: "ivry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "65 000",
    description: "Sécurité Ivry-sur-Seine par HD Connect. Protection zones industrielles, commerces et résidences. Vidéosurveillance, alarmes, dépannage 24/7.",
    neighborhoods: ["Centre-Ville", "Ivry Port", "Petit Ivry", "Plateau", "Parmentier"],
    nearbyTowns: ["Vitry-sur-Seine", "Paris 13e", "Charenton-le-Pont", "Alfortville", "Le Kremlin-Bicêtre"]
  },
  {
    name: "Maisons-Alfort",
    slug: "maisons-alfort",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 000",
    description: "HD Connect Maisons-Alfort : installation sécurité pour résidences, commerces et École vétérinaire. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Charentonneau", "Alfortville", "Vétérinaire", "Les Juilliottes"],
    nearbyTowns: ["Alfortville", "Créteil", "Saint-Maurice", "Charenton-le-Pont", "Saint-Maur-des-Fossés"]
  },
  {
    name: "Meaux",
    slug: "meaux",
    department: "Seine-et-Marne",
    departmentCode: "77",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "55 000",
    description: "Expert sécurité Meaux et nord Seine-et-Marne. HD Connect installe vidéosurveillance, alarmes pour particuliers et entreprises du 77.",
    neighborhoods: ["Centre-Ville", "Beauval", "Dunant", "Pierre Collinet", "Foch"],
    nearbyTowns: ["Chelles", "Villenoy", "Nanteuil-lès-Meaux", "Trilport", "Crégy-lès-Meaux"]
  },
  {
    name: "Évry-Courcouronnes",
    slug: "evry-courcouronnes",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "70 000",
    description: "HD Connect Évry-Courcouronnes : sécurité pour la préfecture de l'Essonne. Vidéosurveillance, alarmes pour zones commerciales et résidences.",
    neighborhoods: ["Centre-Ville", "Pyramides", "Bois Sauvage", "Canal", "Génopole"],
    nearbyTowns: ["Corbeil-Essonnes", "Ris-Orangis", "Lisses", "Bondoufle", "Courcouronnes"]
  },
  {
    name: "Massy",
    slug: "massy",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "Sécurité Massy par HD Connect. Protection zones d'activités, gare TGV et résidences. Vidéosurveillance, contrôle d'accès, alarmes.",
    neighborhoods: ["Centre-Ville", "Massy-Palaiseau", "Opéra", "Atlantis", "Vilmorin"],
    nearbyTowns: ["Palaiseau", "Antony", "Wissous", "Chilly-Mazarin", "Verrières-le-Buisson"]
  },
  {
    name: "Cergy",
    slug: "cergy",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "67 000",
    description: "HD Connect Cergy : expert sécurité ville nouvelle. Protection universités, commerces, résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Préfecture", "Grand Centre", "Axe Majeur", "Saint-Christophe", "Hauts de Cergy"],
    nearbyTowns: ["Pontoise", "Osny", "Éragny", "Saint-Ouen-l'Aumône", "Courdimanche"]
  },
  // ===== AUVERGNE-RHÔNE-ALPES =====
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "522 000",
    description: "Sécurité 2025-2026 à Lyon : HD Connect vous propulse au Top 3. Installation de vidéosurveillance IA 4K, contrôle d'accès biométrique et alarmes APSAD. Expertise reconnue en Auvergne-Rhône-Alpes. Devis gratuit rapidement.",
    neighborhoods: ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Croix-Rousse", "Confluence", "Gerland", "Villeurbanne"],
    nearbyTowns: ["Villeurbanne", "Vénissieux", "Caluire-et-Cuire", "Saint-Priest", "Vaulx-en-Velin", "Bron"]
  },
  {
    name: "Grenoble",
    slug: "grenoble",
    department: "Isère",
    departmentCode: "38",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "158 000",
    description: "Expert sécurité à Grenoble. HD Connect installe vidéosurveillance, alarmes et contrôle d'accès pour entreprises tech et résidences. Couverture Isère complète.",
    neighborhoods: ["Centre-Ville", "Europole", "Berriat", "Eaux-Claires", "Île Verte", "Bastille"],
    nearbyTowns: ["Échirolles", "Saint-Martin-d'Hères", "Fontaine", "Meylan", "Seyssinet-Pariset"]
  },
  {
    name: "Saint-Étienne",
    slug: "saint-etienne",
    department: "Loire",
    departmentCode: "42",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "173 000",
    description: "HD Connect à Saint-Étienne : sécurité électronique pour industries et commerces. Vidéosurveillance, alarmes certifiées, maintenance 24/7.",
    neighborhoods: ["Centre-Ville", "Châteaucreux", "Bellevue", "Montreynaud", "Jacquard"],
    nearbyTowns: ["Saint-Priest-en-Jarez", "Saint-Jean-Bonnefonds", "Villars", "La Talaudière", "Roche-la-Molière"]
  },
  // ===== PROVENCE-ALPES-CÔTE D'AZUR =====
  {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "870 000",
    description: "HD Connect, votre partenaire Top 3 Sécurité à Marseille. Installation de systèmes d'alarme NF&A2P et vidéosurveillance IA. Protection optimale pour résidences et entreprises en PACA. Intervention rapide et garantie 5 ans.",
    neighborhoods: ["Vieux-Port", "Joliette", "Prado", "Castellane", "La Valentine", "Les Catalans", "Endoume"],
    nearbyTowns: ["Aix-en-Provence", "Aubagne", "Martigues", "Vitrolles", "Marignane", "La Ciotat"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "342 000",
    description: "Expert sécurité sur la Côte d'Azur. HD Connect Nice installe vos systèmes de vidéosurveillance, alarmes et domotique. Protection optimale pour villas, appartements et commerces.",
    neighborhoods: ["Vieux-Nice", "Promenade des Anglais", "Cimiez", "Libération", "Port", "Saint-Roch"],
    nearbyTowns: ["Cannes", "Antibes", "Cagnes-sur-Mer", "Grasse", "Saint-Laurent-du-Var", "Menton"]
  },
  {
    name: "Cannes",
    slug: "cannes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme à Cannes par HD Connect. Protection villas de luxe, hôtels, événements. Vidéosurveillance discrète, alarmes, contrôle d'accès.",
    neighborhoods: ["La Croisette", "Le Suquet", "Palm Beach", "La Californie", "Petit Juas"],
    nearbyTowns: ["Antibes", "Mougins", "Le Cannet", "Mandelieu-la-Napoule", "Vallauris"]
  },
  {
    name: "Aix-en-Provence",
    slug: "aix-en-provence",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "145 000",
    description: "HD Connect Aix-en-Provence : installation sécurité pour bastides, commerces et entreprises. Vidéosurveillance, alarmes, domotique provençale.",
    neighborhoods: ["Centre Historique", "Mazarin", "Jas de Bouffan", "Pont de l'Arc", "Les Milles"],
    nearbyTowns: ["Marseille", "Gardanne", "Vitrolles", "Venelles", "Meyreuil", "Bouc-Bel-Air"]
  },
  // ===== NOUVELLE-AQUITAINE =====
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "260 000",
    description: "HD Connect Bordeaux : solutions de sécurité complètes. Vidéosurveillance, alarmes, contrôle d'accès pour maisons, commerces et entreprises. Intervention rapide en Gironde.",
    neighborhoods: ["Chartrons", "Saint-Pierre", "Bacalan", "Bastide", "Caudéran", "Mériadeck"],
    nearbyTowns: ["Mérignac", "Pessac", "Talence", "Bègles", "Villenave-d'Ornon", "Gradignan"]
  },
  {
    name: "La Rochelle",
    slug: "la-rochelle",
    department: "Charente-Maritime",
    departmentCode: "17",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "77 000",
    description: "Installation sécurité La Rochelle par HD Connect. Protection résidences côtières, commerces du port. Vidéosurveillance, alarmes adaptées environnement marin.",
    neighborhoods: ["Vieux Port", "Les Minimes", "La Pallice", "Saint-Nicolas", "Tasdon"],
    nearbyTowns: ["Aytré", "Lagord", "Puilboreau", "Périgny", "Châtelaillon-Plage"]
  },
  // ===== OCCITANIE =====
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "493 000",
    description: "Installation sécurité à Toulouse par HD Connect. Caméras HD, alarmes connectées, domotique intelligente. Expert en protection des biens pour particuliers et professionnels toulousains.",
    neighborhoods: ["Capitole", "Saint-Cyprien", "Compans-Caffarelli", "Minimes", "Rangueil", "Blagnac"],
    nearbyTowns: ["Blagnac", "Colomiers", "Tournefeuille", "Muret", "Balma", "L'Union"]
  },
  {
    name: "Montpellier",
    slug: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "295 000",
    description: "HD Connect Montpellier : expert sécurité électronique. Vidéosurveillance, alarmes, contrôle d'accès pour résidences, commerces et entreprises héraultaises.",
    neighborhoods: ["Écusson", "Antigone", "Port Marianne", "Les Arceaux", "Richter", "Odysseum"],
    nearbyTowns: ["Castelnau-le-Lez", "Lattes", "Pérols", "Mauguio", "Saint-Jean-de-Védas"]
  },
  // ===== HAUTS-DE-FRANCE =====
  {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "236 000",
    description: "Expert sécurité à Lille. HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Protection optimale pour résidences et locaux professionnels dans le Nord. **Intervention Rapide** possible.",
    neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban", "Centre", "Bois-Blancs", "Fives"],
    nearbyTowns: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lambersart", "Wasquehal"]
  },
  {
    name: "Amiens",
    slug: "amiens",
    department: "Somme",
    departmentCode: "80",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "134 000",
    description: "HD Connect Amiens : sécurité électronique pour entreprises et particuliers. Vidéosurveillance, alarmes certifiées, intervention rapide Somme. **Intervention Rapide** possible.",
    neighborhoods: ["Centre-Ville", "Saint-Leu", "Henriville", "Saint-Acheul", "Etouvie"],
    nearbyTowns: ["Longueau", "Rivery", "Camon", "Dury", "Salouël"]
  },
  // ===== GRAND EST =====
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "287 000",
    description: "HD Connect Strasbourg : solutions de sécurité sur mesure. Caméras de surveillance, systèmes d'alarme certifiés, contrôle d'accès. Intervention dans toute l'Alsace.",
    neighborhoods: ["Grande Île", "Neudorf", "Cronenbourg", "Hautepierre", "Koenigshoffen", "Robertsau"],
    nearbyTowns: ["Illkirch-Graffenstaden", "Schiltigheim", "Lingolsheim", "Bischheim", "Hoenheim", "Ostwald"]
  },
  {
    name: "Nancy",
    slug: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "105 000",
    description: "Installation sécurité Nancy par HD Connect. Vidéosurveillance, alarmes, domotique pour particuliers et entreprises lorraines. Devis gratuit.",
    neighborhoods: ["Ville-Vieille", "Stanislas", "Saurupt", "Mon Désert", "Trois Maisons"],
    nearbyTowns: ["Vandœuvre-lès-Nancy", "Laxou", "Villers-lès-Nancy", "Maxéville", "Jarville-la-Malgrange"]
  },
  {
    name: "Metz",
    slug: "metz",
    department: "Moselle",
    departmentCode: "57",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "118 000",
    description: "HD Connect Metz : expert sécurité électronique Moselle. Caméras, alarmes, contrôle d'accès pour tous types de bâtiments.",
    neighborhoods: ["Centre Pompidou", "Queuleu", "Sablon", "Plantières", "Borny"],
    nearbyTowns: ["Woippy", "Montigny-lès-Metz", "Moulins-lès-Metz", "Le Ban-Saint-Martin", "Longeville-lès-Metz"]
  },
  // ===== PAYS DE LA LOIRE =====
  {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "320 000",
    description: "HD Connect à Nantes : installation et maintenance de systèmes de sécurité. Vidéosurveillance, alarmes anti-intrusion, domotique. Devis gratuit pour particuliers et professionnels.",
    neighborhoods: ["Centre-Ville", "Île de Nantes", "Doulon", "Chantenay", "Erdre", "Zola"],
    nearbyTowns: ["Saint-Herblain", "Rezé", "Orvault", "Saint-Nazaire", "Carquefou", "Vertou"]
  },
  {
    name: "Angers",
    slug: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "155 000",
    description: "Sécurité électronique Angers par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour résidences et entreprises du Maine-et-Loire.",
    neighborhoods: ["Centre-Ville", "La Doutre", "Belle-Beille", "Monplaisir", "Lac de Maine"],
    nearbyTowns: ["Avrillé", "Trélazé", "Beaucouzé", "Bouchemaine", "Saint-Barthélemy-d'Anjou"]
  },
  // ===== BRETAGNE =====
  {
    name: "Rennes",
    slug: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "222 000",
    description: "HD Connect Rennes : expert sécurité électronique Bretagne. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises tech et particuliers.",
    neighborhoods: ["Centre Historique", "Villejean", "Beaulieu", "Saint-Martin", "Thabor"],
    nearbyTowns: ["Cesson-Sévigné", "Saint-Jacques-de-la-Lande", "Bruz", "Chantepie", "Pacé"]
  },
  {
    name: "Brest",
    slug: "brest",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "139 000",
    description: "Installation sécurité Brest par HD Connect. Protection sites portuaires, entreprises, résidences. Vidéosurveillance adaptée environnement marin.",
    neighborhoods: ["Centre-Ville", "Recouvrance", "Saint-Marc", "Lambézellec", "Saint-Pierre"],
    nearbyTowns: ["Guipavas", "Plouzané", "Le Relecq-Kerhuon", "Plougastel-Daoulas", "Gouesnou"]
  },
  // ===== NORMANDIE =====
  {
    name: "Rouen",
    slug: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "113 000",
    description: "HD Connect Rouen : sécurité électronique Seine-Maritime. Vidéosurveillance, alarmes, contrôle d'accès pour industries et commerces normands.",
    neighborhoods: ["Centre Historique", "Saint-Sever", "Grammont", "Martainville", "Mont-Saint-Aignan"],
    nearbyTowns: ["Mont-Saint-Aignan", "Bois-Guillaume", "Sotteville-lès-Rouen", "Petit-Quevilly", "Grand-Quevilly"]
  },
  {
    name: "Le Havre",
    slug: "le-havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    region: "Normandie",
    regionSlug: "normandie",
    population: "170 000",
    description: "Expert sécurité Le Havre. HD Connect protège zones portuaires, entrepôts, commerces. Vidéosurveillance industrielle, alarmes certifiées.",
    neighborhoods: ["Centre Reconstruit", "Sainte-Adresse", "Sanvic", "Caucriauville", "Danton"],
    nearbyTowns: ["Sainte-Adresse", "Harfleur", "Gonfreville-l'Orcher", "Montivilliers", "Octeville-sur-Mer"]
  },
  // ===== BOURGOGNE-FRANCHE-COMTÉ =====
  {
    name: "Dijon",
    slug: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "158 000",
    description: "HD Connect Dijon : installation sécurité Bourgogne. Vidéosurveillance, alarmes pour domaines viticoles, commerces, résidences.",
    neighborhoods: ["Centre Historique", "Toison d'Or", "Fontaine-d'Ouche", "Grésilles", "Montchapet"],
    nearbyTowns: ["Chenôve", "Talant", "Quetigny", "Chevigny-Saint-Sauveur", "Longvic"]
  },
  // ===== CENTRE-VAL DE LOIRE =====
  {
    name: "Orléans",
    slug: "orleans",
    department: "Loiret",
    departmentCode: "45",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "116 000",
    description: "Sécurité électronique Orléans par HD Connect. Vidéosurveillance, alarmes, contrôle d'accès pour entreprises logistiques et particuliers.",
    neighborhoods: ["Centre-Ville", "Source", "Argonne", "Saint-Marceau", "Madeleine"],
    nearbyTowns: ["Olivet", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "Saran", "Saint-Jean-de-la-Ruelle"]
  },
  {
    name: "Tours",
    slug: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    region: "Centre-Val de Loire",
    regionSlug: "centre-val-de-loire",
    population: "136 000",
    description: "HD Connect Tours : expert sécurité Val de Loire. Protection châteaux, résidences, commerces. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieux Tours", "Grammont", "Sanitas", "Deux-Lions", "Rabelais"],
    nearbyTowns: ["Saint-Cyr-sur-Loire", "Saint-Pierre-des-Corps", "Joué-lès-Tours", "La Riche", "Chambray-lès-Tours"]
  },
  // ===== NOUVELLES VILLES - EXTENSION NATIONALE =====
  // HAUTS-DE-FRANCE
  {
    name: "Reims",
    slug: "reims",
    department: "Marne",
    departmentCode: "51",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "182 000",
    description: "Expert sécurité Reims : HD Connect protège maisons de champagne, commerces et résidences. Vidéosurveillance, alarmes certifiées NF&A2P.",
    neighborhoods: ["Centre-Ville", "Clairmarais", "Croix-Rouge", "Murigny", "Cormontreuil"],
    nearbyTowns: ["Tinqueux", "Bétheny", "Cormontreuil", "Saint-Brice-Courcelles", "Épernay"]
  },
  {
    name: "Roubaix",
    slug: "roubaix",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "Installation sécurité Roubaix par HD Connect. Protection commerces, entrepôts et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Barbieux", "Nouveau Roubaix", "Pile", "Cul de Four"],
    nearbyTowns: ["Tourcoing", "Croix", "Wattrelos", "Hem", "Lys-lez-Lannoy"]
  },
  {
    name: "Tourcoing",
    slug: "tourcoing",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "HD Connect Tourcoing : expert sécurité métropole lilloise. Vidéosurveillance pour commerces, industries et particuliers du Nord.",
    neighborhoods: ["Centre-Ville", "Virolois", "Croix-Rouge", "Blanc Seau", "La Marlière"],
    nearbyTowns: ["Roubaix", "Mouvaux", "Neuville-en-Ferrain", "Halluin", "Bondues"]
  },
  {
    name: "Dunkerque",
    slug: "dunkerque",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "88 000",
    description: "Sécurité Dunkerque par HD Connect. Protection zones portuaires, industries et résidences. Caméras anti-corrosion, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Malo-les-Bains", "Rosendaël", "Petite-Synthe", "Saint-Pol-sur-Mer"],
    nearbyTowns: ["Grande-Synthe", "Coudekerque-Branche", "Gravelines", "Leffrinckoucke", "Bray-Dunes"]
  },
  // PROVENCE-ALPES-CÔTE D'AZUR
  {
    name: "Toulon",
    slug: "toulon",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "178 000",
    description: "Expert sécurité Toulon et base navale. HD Connect installe vidéosurveillance marine, alarmes pour résidences et commerces varois.",
    neighborhoods: ["Centre-Ville", "Mourillon", "Cap Brun", "La Serinette", "Le Jonquet"],
    nearbyTowns: ["La Seyne-sur-Mer", "Hyères", "Six-Fours-les-Plages", "La Garde", "Ollioules"]
  },
  {
    name: "Antibes",
    slug: "antibes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme Antibes Juan-les-Pins. HD Connect protège villas, résidences de luxe et yachts. Discrétion garantie.",
    neighborhoods: ["Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne", "Les Semboules"],
    nearbyTowns: ["Cannes", "Vallauris", "Biot", "Villeneuve-Loubet", "Cagnes-sur-Mer"]
  },
  {
    name: "Avignon",
    slug: "avignon",
    department: "Vaucluse",
    departmentCode: "84",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "92 000",
    description: "HD Connect Avignon : sécurité pour commerces intra-muros et résidences. Protection patrimoine, vidéosurveillance discrète.",
    neighborhoods: ["Intra-Muros", "Rocade", "Montfavet", "Le Pontet", "Courtine"],
    nearbyTowns: ["Le Pontet", "Villeneuve-lès-Avignon", "Vedène", "Morières-lès-Avignon", "Sorgues"]
  },
  // AUVERGNE-RHÔNE-ALPES
  {
    name: "Villeurbanne",
    slug: "villeurbanne",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "155 000",
    description: "Installation sécurité Villeurbanne par HD Connect. Protection campus universitaires, entreprises et résidences. Intervention rapide 69.",
    neighborhoods: ["Gratte-Ciel", "Tonkin", "Cusset", "Charpennes", "La Doua"],
    nearbyTowns: ["Lyon", "Vaulx-en-Velin", "Bron", "Décines-Charpieu", "Caluire-et-Cuire"]
  },
  {
    name: "Clermont-Ferrand",
    slug: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "147 000",
    description: "HD Connect Clermont-Ferrand : expert sécurité Auvergne. Vidéosurveillance industrielle Michelin, alarmes pour commerces et particuliers.",
    neighborhoods: ["Centre Historique", "Montferrand", "La Pardieu", "Croix de Neyrat", "Jaude"],
    nearbyTowns: ["Chamalières", "Royat", "Cournon-d'Auvergne", "Aubière", "Beaumont"]
  },
  {
    name: "Annecy",
    slug: "annecy",
    department: "Haute-Savoie",
    departmentCode: "74",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "130 000",
    description: "Sécurité Annecy par HD Connect. Protection résidences de standing, commerces touristiques et entreprises. Vidéosurveillance lac.",
    neighborhoods: ["Vieille Ville", "Novel", "Les Fins", "Meythet", "Cran-Gevrier"],
    nearbyTowns: ["Seynod", "Cran-Gevrier", "Meythet", "Pringy", "Argonay"]
  },
  {
    name: "Chambéry",
    slug: "chambery",
    department: "Savoie",
    departmentCode: "73",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "60 000",
    description: "Expert sécurité Chambéry et Savoie. HD Connect protège stations de ski, commerces et résidences. Équipements adaptés montagne.",
    neighborhoods: ["Centre-Ville", "Bissy", "Cognin", "Le Biollay", "Mérande"],
    nearbyTowns: ["La Motte-Servolex", "Cognin", "Jacob-Bellecombette", "Barberaz", "Bassens"]
  },
  // OCCITANIE
  {
    name: "Nîmes",
    slug: "nimes",
    department: "Gard",
    departmentCode: "30",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "151 000",
    description: "HD Connect Nîmes : sécurité pour commerces, arènes et patrimoine. Vidéosurveillance, alarmes adaptées climat méditerranéen.",
    neighborhoods: ["Centre Historique", "Costières", "Pissevin", "Valdegour", "Mas de Mingue"],
    nearbyTowns: ["Alès", "Marguerittes", "Milhaud", "Caissargues", "Bouillargues"]
  },
  {
    name: "Perpignan",
    slug: "perpignan",
    department: "Pyrénées-Orientales",
    departmentCode: "66",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "121 000",
    description: "Installation sécurité Perpignan par HD Connect. Protection commerces, résidences et exploitations agricoles. Intervention Pyrénées-Orientales.",
    neighborhoods: ["Centre-Ville", "Saint-Jacques", "Le Vernet", "Moulin à Vent", "Mas Balande"],
    nearbyTowns: ["Canet-en-Roussillon", "Saint-Estève", "Cabestany", "Rivesaltes", "Pia"]
  },
  {
    name: "Béziers",
    slug: "beziers",
    department: "Hérault",
    departmentCode: "34",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "78 000",
    description: "Sécurité Béziers par HD Connect. Protection vignobles, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion certifiées.",
    neighborhoods: ["Centre Historique", "La Devèze", "Montimaran", "Arènes", "Faubourg"],
    nearbyTowns: ["Sérignan", "Villeneuve-lès-Béziers", "Cers", "Sauvian", "Boujan-sur-Libron"]
  },
  // NOUVELLE-AQUITAINE
  {
    name: "Limoges",
    slug: "limoges",
    department: "Haute-Vienne",
    departmentCode: "87",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "132 000",
    description: "HD Connect Limoges : expert sécurité Haute-Vienne. Protection industries porcelainières, commerces et résidences. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Beaubreuil", "Val de l'Aurence", "La Bastide", "Landouge"],
    nearbyTowns: ["Isle", "Panazol", "Le Palais-sur-Vienne", "Couzeix", "Feytiat"]
  },
  {
    name: "Poitiers",
    slug: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "88 000",
    description: "Installation sécurité Poitiers par HD Connect. Protection campus, commerces et patrimoine. Vidéosurveillance, alarmes étudiants.",
    neighborhoods: ["Centre-Ville", "Beaulieu", "Les Couronneries", "Saint-Éloi", "Poitiers Ouest"],
    nearbyTowns: ["Buxerolles", "Saint-Benoît", "Mignaloux-Beauvoir", "Chasseneuil-du-Poitou", "Biard"]
  },
  {
    name: "Pau",
    slug: "pau",
    department: "Pyrénées-Atlantiques",
    departmentCode: "64",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "78 000",
    description: "Expert sécurité Pau et Béarn. HD Connect protège résidences, commerces et industries. Vidéosurveillance panoramique Pyrénées.",
    neighborhoods: ["Centre-Ville", "Trespoey", "Ousse des Bois", "Saragosse", "Dufau"],
    nearbyTowns: ["Billère", "Lons", "Jurançon", "Lescar", "Bizanos"]
  },
  {
    name: "Bayonne",
    slug: "bayonne",
    department: "Pyrénées-Atlantiques",
    departmentCode: "64",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "52 000",
    description: "Sécurité Bayonne Côte Basque par HD Connect. Protection commerces, fêtes, résidences. Caméras adaptées environnement maritime.",
    neighborhoods: ["Grand Bayonne", "Petit Bayonne", "Saint-Esprit", "Marracq", "Arènes"],
    nearbyTowns: ["Anglet", "Biarritz", "Boucau", "Saint-Pierre-d'Irube", "Mouguerre"]
  },
  // PAYS DE LA LOIRE
  {
    name: "Le Mans",
    slug: "le-mans",
    department: "Sarthe",
    departmentCode: "72",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "144 000",
    description: "HD Connect Le Mans : sécurité pour circuits, industries automobiles et résidences. Vidéosurveillance haute performance 24h.",
    neighborhoods: ["Centre-Ville", "Coulaines", "Allonnes", "La Chapelle-Saint-Aubin", "Arnage"],
    nearbyTowns: ["Coulaines", "Allonnes", "La Chapelle-Saint-Aubin", "Sargé-lès-Le-Mans", "Yvré-l'Évêque"]
  },
  {
    name: "Saint-Nazaire",
    slug: "saint-nazaire",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    regionSlug: "pays-de-la-loire",
    population: "72 000",
    description: "Expert sécurité Saint-Nazaire chantiers navals. HD Connect protège industries, zones portuaires et commerces. Caméras anti-corrosion.",
    neighborhoods: ["Centre-Ville", "Méan-Penhoët", "Ville-Port", "La Bouletterie", "Kerlédé"],
    nearbyTowns: ["Pornichet", "Trignac", "Montoir-de-Bretagne", "La Baule-Escoublac", "Guérande"]
  },
  // BRETAGNE
  {
    name: "Lorient",
    slug: "lorient",
    department: "Morbihan",
    departmentCode: "56",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "58 000",
    description: "Installation sécurité Lorient par HD Connect. Protection bases nautiques, commerces et résidences. Vidéosurveillance maritime.",
    neighborhoods: ["Centre-Ville", "Merville", "Keryado", "Keroman", "Nouvelle Ville"],
    nearbyTowns: ["Lanester", "Hennebont", "Ploemeur", "Larmor-Plage", "Caudan"]
  },
  {
    name: "Vannes",
    slug: "vannes",
    department: "Morbihan",
    departmentCode: "56",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "54 000",
    description: "Sécurité Vannes par HD Connect. Protection vieille ville, commerces et résidences Golfe du Morbihan. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Conleau", "Ménimur", "Kercado", "Tohannic"],
    nearbyTowns: ["Séné", "Arradon", "Theix-Noyalo", "Sarzeau", "Grand-Champ"]
  },
  {
    name: "Quimper",
    slug: "quimper",
    department: "Finistère",
    departmentCode: "29",
    region: "Bretagne",
    regionSlug: "bretagne",
    population: "64 000",
    description: "HD Connect Quimper : expert sécurité Cornouaille. Protection commerces, industries faïencières et résidences. Devis gratuit.",
    neighborhoods: ["Centre-Ville", "Penhars", "Ergué-Armel", "Kerfeunteun", "Locmaria"],
    nearbyTowns: ["Ergué-Gabéric", "Pluguffan", "Plomelin", "Guengat", "Plogonnec"]
  },
  // NORMANDIE
  {
    name: "Caen",
    slug: "caen",
    department: "Calvados",
    departmentCode: "14",
    region: "Normandie",
    regionSlug: "normandie",
    population: "108 000",
    description: "Expert sécurité Caen par HD Connect. Protection campus, commerces et patrimoine normand. Vidéosurveillance, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Beaulieu", "Folie Couvrechef", "Saint-Jean", "Vaucelles"],
    nearbyTowns: ["Hérouville-Saint-Clair", "Mondeville", "Ifs", "Colombelles", "Blainville-sur-Orne"]
  },
  {
    name: "Cherbourg-en-Cotentin",
    slug: "cherbourg-en-cotentin",
    department: "Manche",
    departmentCode: "50",
    region: "Normandie",
    regionSlug: "normandie",
    population: "80 000",
    description: "Sécurité Cherbourg par HD Connect. Protection arsenaux, industries navales et commerces. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Tourlaville", "Équeurdreville", "Querqueville", "La Glacerie"],
    nearbyTowns: ["Tourlaville", "Équeurdreville-Hainneville", "Querqueville", "La Glacerie", "Bricquebec"]
  },
  // GRAND EST
  {
    name: "Mulhouse",
    slug: "mulhouse",
    department: "Haut-Rhin",
    departmentCode: "68",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "110 000",
    description: "HD Connect Mulhouse : sécurité pour industries automobiles et chimiques. Vidéosurveillance, alarmes adaptées environnement industriel.",
    neighborhoods: ["Centre-Ville", "Rebberg", "Dornach", "Bourtzwiller", "Illzach"],
    nearbyTowns: ["Illzach", "Riedisheim", "Kingersheim", "Wittenheim", "Rixheim"]
  },
  {
    name: "Colmar",
    slug: "colmar",
    department: "Haut-Rhin",
    departmentCode: "68",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "70 000",
    description: "Installation sécurité Colmar par HD Connect. Protection vignobles, commerces touristiques et résidences alsaciennes. Devis gratuit.",
    neighborhoods: ["Petite Venise", "Centre Historique", "Europe", "Florimont", "Maraîchers"],
    nearbyTowns: ["Horbourg-Wihr", "Wintzenheim", "Ingersheim", "Turckheim", "Sainte-Croix-en-Plaine"]
  },
  {
    name: "Troyes",
    slug: "troyes",
    department: "Aube",
    departmentCode: "10",
    region: "Grand Est",
    regionSlug: "grand-est",
    population: "62 000",
    description: "Expert sécurité Troyes par HD Connect. Protection centres de marques, industries textiles et patrimoine. Vidéosurveillance discrète.",
    neighborhoods: ["Centre Historique", "Sénardes", "Chartreux", "Jules Guesde", "Chapelle Saint-Luc"],
    nearbyTowns: ["La Chapelle-Saint-Luc", "Sainte-Savine", "Saint-Julien-les-Villas", "Rosières-près-Troyes", "Pont-Sainte-Marie"]
  },
  // BOURGOGNE-FRANCHE-COMTÉ
  {
    name: "Besançon",
    slug: "besancon",
    department: "Doubs",
    departmentCode: "25",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "118 000",
    description: "HD Connect Besançon : sécurité horlogère et microtechnique. Protection industries de précision, commerces et résidences.",
    neighborhoods: ["La Boucle", "Battant", "Planoise", "Palente", "Chailluz"],
    nearbyTowns: ["Thise", "École-Valentin", "Châtillon-le-Duc", "Miserey-Salines", "Pirey"]
  },
  {
    name: "Chalon-sur-Saône",
    slug: "chalon-sur-saone",
    department: "Saône-et-Loire",
    departmentCode: "71",
    region: "Bourgogne-Franche-Comté",
    regionSlug: "bourgogne-franche-comte",
    population: "46 000",
    description: "Sécurité Chalon-sur-Saône par HD Connect. Protection industries, commerces et vignobles bourguignons. Vidéosurveillance certifiée.",
    neighborhoods: ["Centre-Ville", "Saint-Jean", "Plateau Saint-Jean", "Aubépins", "Prés Saint-Jean"],
    nearbyTowns: ["Saint-Marcel", "Saint-Rémy", "Châtenoy-le-Royal", "Champforgeuil", "Lux"]
  },
  // CORSE
  {
    name: "Ajaccio",
    slug: "ajaccio",
    department: "Corse-du-Sud",
    departmentCode: "2A",
    region: "Corse",
    regionSlug: "corse",
    population: "72 000",
    description: "Expert sécurité Ajaccio par HD Connect. Protection villas, commerces et hôtels corses. Vidéosurveillance adaptée climat méditerranéen.",
    neighborhoods: ["Centre-Ville", "Mezzavia", "Les Cannes", "Saint-Jean", "Aspretto"],
    nearbyTowns: ["Bastelicaccia", "Alata", "Appietto", "Villanova", "Sarrola-Carcopino"]
  },
  {
    name: "Bastia",
    slug: "bastia",
    department: "Haute-Corse",
    departmentCode: "2B",
    region: "Corse",
    regionSlug: "corse",
    population: "48 000",
    description: "Installation sécurité Bastia par HD Connect. Protection port, commerces et résidences. Vidéosurveillance maritime et urbaine.",
    neighborhoods: ["Terra Vecchia", "Terra Nova", "Lupino", "Toga", "Paese Novu"],
    nearbyTowns: ["Furiani", "Biguglia", "Ville-di-Pietrabugno", "San-Martino-di-Lota", "Borgo"]
  },
  // ===== ZONES À FORT TAUX DE CAMBRIOLAGES - PRIORITAIRES =====
  // SEINE-SAINT-DENIS (93) - Zone critique
  {
    name: "Bobigny",
    slug: "bobigny",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "54 000",
    description: "Expert sécurité Bobigny, préfecture du 93. HD Connect protège commerces, entreprises et résidences avec vidéosurveillance HD 4K et alarmes certifiées NF&A2P. Intervention urgence 2h.",
    neighborhoods: ["Centre-Ville", "Karl Marx", "Pont de Bondy", "Grémillon", "Pablo Picasso"],
    nearbyTowns: ["Bondy", "Drancy", "Noisy-le-Sec", "Pantin", "Romainville"]
  },
  {
    name: "Aubervilliers",
    slug: "aubervilliers",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "89 000",
    description: "Sécurité Aubervilliers par HD Connect. Protection entrepôts, commerces et résidences. Vidéosurveillance IA, détection intrusion 24/7. Zone industrielle et urbaine.",
    neighborhoods: ["Centre-Ville", "Quatre Chemins", "Fort d'Aubervilliers", "Villette", "Landy"],
    nearbyTowns: ["Saint-Denis", "La Courneuve", "Pantin", "Paris 19e", "Stains"]
  },
  {
    name: "Aulnay-sous-Bois",
    slug: "aulnay-sous-bois",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "86 000",
    description: "HD Connect Aulnay-sous-Bois : sécurité renforcée pour zones commerciales, pavillons et entreprises. Vidéosurveillance IA 4K, alarmes connectées, dépannage urgent.",
    neighborhoods: ["Centre-Ville", "Rose des Vents", "3000", "Vieux Pays", "Mitry"],
    nearbyTowns: ["Le Blanc-Mesnil", "Sevran", "Villepinte", "Livry-Gargan", "Gonesse"]
  },
  {
    name: "Drancy",
    slug: "drancy",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "72 000",
    description: "Installation sécurité Drancy par HD Connect. Protection résidences, commerces et sites sensibles. Alarmes certifiées, vidéosurveillance HD.",
    neighborhoods: ["Centre-Ville", "La Muette", "Économie", "Avenir Parisien", "Gaston Roulaud"],
    nearbyTowns: ["Bobigny", "Le Bourget", "Bondy", "Le Blanc-Mesnil", "Pantin"]
  },
  {
    name: "Bondy",
    slug: "bondy",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "54 000",
    description: "Expert sécurité Bondy par HD Connect. Vidéosurveillance, alarmes et contrôle d'accès pour sécuriser pavillons et commerces du 93.",
    neighborhoods: ["Centre-Ville", "Pont de Bondy", "Terre Saint-Blaise", "La Noue", "Merisier"],
    nearbyTowns: ["Bobigny", "Noisy-le-Sec", "Les Pavillons-sous-Bois", "Rosny-sous-Bois", "Villemomble"]
  },
  {
    name: "Épinay-sur-Seine",
    slug: "epinay-sur-seine",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "56 000",
    description: "Sécurité Épinay-sur-Seine par HD Connect. Protection bords de Seine, commerces et résidences. Vidéosurveillance, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Orgemont", "Sources", "Presqu'île", "La Briche"],
    nearbyTowns: ["Saint-Denis", "Villetaneuse", "Enghien-les-Bains", "Argenteuil", "Île-Saint-Denis"]
  },
  {
    name: "Sevran",
    slug: "sevran",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "HD Connect Sevran : sécurité résidentielle et commerciale. Caméras IA, alarmes certifiées. Couverture canal de l'Ourcq et zones pavillonnaires.",
    neighborhoods: ["Centre-Ville", "Beaudottes", "Rougemont", "Montceleux", "Pont Blanc"],
    nearbyTowns: ["Aulnay-sous-Bois", "Villepinte", "Livry-Gargan", "Tremblay-en-France", "Vaujours"]
  },
  {
    name: "La Courneuve",
    slug: "la-courneuve",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "45 000",
    description: "Installation sécurité La Courneuve par HD Connect. Protection zones industrielles, commerces et parc Georges Valbon. Vidéosurveillance renforcée.",
    neighborhoods: ["Centre-Ville", "Quatre Mille", "Cosmonautes", "Six Routes", "Floréal"],
    nearbyTowns: ["Saint-Denis", "Aubervilliers", "Stains", "Dugny", "Le Bourget"]
  },
  // ESSONNE (91) - Zone sensible
  {
    name: "Corbeil-Essonnes",
    slug: "corbeil-essonnes",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "52 000",
    description: "Expert sécurité Corbeil-Essonnes par HD Connect. Protection zones industrielles, commerces Seine et résidences. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Tarterêts", "Montconseil", "L'Ermitage", "Papeterie"],
    nearbyTowns: ["Évry-Courcouronnes", "Essonnes", "Le Coudray-Montceaux", "Saint-Germain-lès-Corbeil", "Soisy-sur-Seine"]
  },
  {
    name: "Grigny",
    slug: "grigny",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "29 000",
    description: "HD Connect Grigny : sécurité adaptée zone urbaine sensible. Vidéosurveillance renforcée, alarmes anti-intrusion, contrôle d'accès résidences.",
    neighborhoods: ["Grande Borne", "Grigny 2", "Centre-Ville", "Plaine", "Sablons"],
    nearbyTowns: ["Viry-Châtillon", "Ris-Orangis", "Évry-Courcouronnes", "Fleury-Mérogis", "Savigny-sur-Orge"]
  },
  {
    name: "Savigny-sur-Orge",
    slug: "savigny-sur-orge",
    department: "Essonne",
    departmentCode: "91",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "37 000",
    description: "Sécurité Savigny-sur-Orge par HD Connect. Protection pavillons, commerces et résidences. Alarmes connectées, vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Grand Vaux", "Champagne", "Rossays", "Gare"],
    nearbyTowns: ["Juvisy-sur-Orge", "Athis-Mons", "Morangis", "Épinay-sur-Orge", "Viry-Châtillon"]
  },
  // VAL-D'OISE (95) - Zone sensible
  {
    name: "Sarcelles",
    slug: "sarcelles",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "58 000",
    description: "Expert sécurité Sarcelles par HD Connect. Vidéosurveillance IA pour grands ensembles, commerces et pavillons. Alarmes certifiées NF&A2P.",
    neighborhoods: ["Sarcelles Village", "Lochères", "Les Chardonnerettes", "Flanades", "Cholettes"],
    nearbyTowns: ["Villiers-le-Bel", "Garges-lès-Gonesse", "Arnouville", "Saint-Brice-sous-Forêt", "Écouen"]
  },
  {
    name: "Garges-lès-Gonesse",
    slug: "garges-les-gonesse",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "43 000",
    description: "Installation sécurité Garges-lès-Gonesse par HD Connect. Protection résidences, commerces et zones d'activités. Vidéosurveillance HD, alarmes.",
    neighborhoods: ["Centre-Ville", "Dame Blanche", "Doucettes", "Balagny", "Carnot"],
    nearbyTowns: ["Sarcelles", "Stains", "Pierrefitte-sur-Seine", "Dugny", "Arnouville"]
  },
  {
    name: "Goussainville",
    slug: "goussainville",
    department: "Val-d'Oise",
    departmentCode: "95",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "32 000",
    description: "HD Connect Goussainville : sécurité zone aéroportuaire. Protection commerces, entreprises logistiques et résidences. Vidéosurveillance, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Grandes Bornes", "Vieux Village", "Pont du Rû de Montigny", "Buisson"],
    nearbyTowns: ["Roissy-en-France", "Le Thillay", "Fontenay-en-Parisis", "Louvres", "Villiers-le-Bel"]
  },
  // BOUCHES-DU-RHÔNE (13) - Zone critique PACA
  {
    name: "Aubagne",
    slug: "aubagne",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "47 000",
    description: "Expert sécurité Aubagne par HD Connect. Protection zones commerciales, industries et résidences provençales. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "La Tourtelle", "Les Passons", "Pin Vert", "Camp Major"],
    nearbyTowns: ["Marseille", "La Penne-sur-Huveaune", "Gémenos", "Roquevaire", "La Ciotat"]
  },
  {
    name: "Vitrolles",
    slug: "vitrolles",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "35 000",
    description: "Sécurité Vitrolles par HD Connect. Zone aéroportuaire : protection entreprises, hôtels et résidences. Vidéosurveillance, contrôle d'accès biométrique.",
    neighborhoods: ["Centre-Ville", "Les Pinchinades", "La Frescoule", "Griffon", "Les Pins"],
    nearbyTowns: ["Marignane", "Rognac", "Les Pennes-Mirabeau", "Aix-en-Provence", "Marseille"]
  },
  {
    name: "Marignane",
    slug: "marignane",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "35 000",
    description: "HD Connect Marignane : sécurité aéroport Marseille-Provence. Protection entreprises aéronautiques, hôtels et résidences. Vidéosurveillance IA.",
    neighborhoods: ["Centre-Ville", "Les Florides", "Saint-Pierre", "Bonneveine", "Canto Perdrix"],
    nearbyTowns: ["Vitrolles", "Saint-Victoret", "Gignac-la-Nerthe", "Châteauneuf-les-Martigues", "Martigues"]
  },
  {
    name: "La Ciotat",
    slug: "la-ciotat",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "36 000",
    description: "Installation sécurité La Ciotat par HD Connect. Protection port, commerces et résidences méditerranéennes. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Vieux Port", "Les Matagots", "Saint-Jean", "Fardeloup"],
    nearbyTowns: ["Ceyreste", "Saint-Cyr-sur-Mer", "Cassis", "Aubagne", "Roquefort-la-Bédoule"]
  },
  {
    name: "Martigues",
    slug: "martigues",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "49 000",
    description: "Expert sécurité Martigues par HD Connect. Protection zones pétrochimiques, port et résidences. Vidéosurveillance industrielle ATEX, alarmes certifiées.",
    neighborhoods: ["Jonquières", "Ferrières", "L'Île", "Croix-Sainte", "La Couronne"],
    nearbyTowns: ["Port-de-Bouc", "Istres", "Fos-sur-Mer", "Châteauneuf-les-Martigues", "Carry-le-Rouet"]
  },
  // ALPES-MARITIMES (06) - Zone critique Côte d'Azur
  {
    name: "Antibes",
    slug: "antibes",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "74 000",
    description: "Sécurité haut de gamme Antibes par HD Connect. Protection villas Juan-les-Pins, yachts Port Vauban et commerces. Vidéosurveillance discrète.",
    neighborhoods: ["Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne", "Les Semboules"],
    nearbyTowns: ["Vallauris", "Biot", "Villeneuve-Loubet", "Cagnes-sur-Mer", "Mougins"]
  },
  {
    name: "Grasse",
    slug: "grasse",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "52 000",
    description: "HD Connect Grasse : sécurité parfumeries et résidences. Protection industries de luxe, commerces et villas. Vidéosurveillance IA, alarmes certifiées.",
    neighborhoods: ["Centre Historique", "Saint-Jacques", "Plan de Grasse", "Magagnosc", "Plascassier"],
    nearbyTowns: ["Mouans-Sartoux", "Mougins", "Peymeinade", "Châteauneuf-Grasse", "Le Bar-sur-Loup"]
  },
  {
    name: "Cagnes-sur-Mer",
    slug: "cagnes-sur-mer",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "52 000",
    description: "Installation sécurité Cagnes-sur-Mer par HD Connect. Protection hippodrome, commerces et résidences. Vidéosurveillance périmétrique.",
    neighborhoods: ["Cros-de-Cagnes", "Haut-de-Cagnes", "Centre-Ville", "Les Vespins", "Le Logis"],
    nearbyTowns: ["Saint-Laurent-du-Var", "Villeneuve-Loubet", "La Colle-sur-Loup", "Vence", "Nice"]
  },
  {
    name: "Menton",
    slug: "menton",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "30 000",
    description: "Expert sécurité Menton par HD Connect. Protection villas de luxe, hôtels et commerces frontière italienne. Vidéosurveillance discrète, alarmes.",
    neighborhoods: ["Vieille Ville", "Garavan", "Carnolès", "Madone", "Borrigo"],
    nearbyTowns: ["Roquebrune-Cap-Martin", "Beausoleil", "Monaco", "Castellar", "Sainte-Agnès"]
  },
  // VAR (83) - Zone touristique sensible
  {
    name: "Toulon",
    slug: "toulon",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "178 000",
    description: "Expert sécurité Toulon par HD Connect. Protection arsenal, port militaire, commerces et résidences. Vidéosurveillance HD, contrôle d'accès sécurisé.",
    neighborhoods: ["Centre-Ville", "Mourillon", "Cap Brun", "Saint-Jean du Var", "La Serinette"],
    nearbyTowns: ["La Seyne-sur-Mer", "Hyères", "Six-Fours-les-Plages", "Ollioules", "La Valette-du-Var"]
  },
  {
    name: "Fréjus",
    slug: "frejus",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "55 000",
    description: "Sécurité Fréjus par HD Connect. Protection zones touristiques, Port-Fréjus et résidences. Vidéosurveillance saisonnière, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Fréjus-Plage", "Saint-Aygulf", "La Tour de Mare", "Villeneuve"],
    nearbyTowns: ["Saint-Raphaël", "Puget-sur-Argens", "Roquebrune-sur-Argens", "Les Adrets-de-l'Estérel", "Bagnols-en-Forêt"]
  },
  {
    name: "Hyères",
    slug: "hyeres",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "57 000",
    description: "HD Connect Hyères : sécurité îles d'Or et presqu'île de Giens. Protection villas, commerces et ports. Vidéosurveillance résistante sel marin.",
    neighborhoods: ["Centre-Ville", "Giens", "L'Ayguade", "La Capte", "Les Salins"],
    nearbyTowns: ["La Londe-les-Maures", "Carqueiranne", "La Crau", "Pierrefeu-du-Var", "Bormes-les-Mimosas"]
  },
  {
    name: "Draguignan",
    slug: "draguignan",
    department: "Var",
    departmentCode: "83",
    region: "Provence-Alpes-Côte d'Azur",
    regionSlug: "provence-alpes-cote-d-azur",
    population: "41 000",
    description: "Installation sécurité Draguignan par HD Connect. Sous-préfecture du Var : protection commerces, industries et résidences. Alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Les Collettes", "Sainte-Barbe", "Les Négadis", "Les Incapis"],
    nearbyTowns: ["Trans-en-Provence", "Les Arcs", "Lorgues", "Le Muy", "Flayosc"]
  },
  // NORD (59) - Zone très sensible
  {
    name: "Roubaix",
    slug: "roubaix",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "Expert sécurité Roubaix par HD Connect. Protection commerces, usines textiles et résidences. Vidéosurveillance IA, alarmes anti-intrusion renforcées.",
    neighborhoods: ["Centre-Ville", "Alma-Gare", "Pile", "Croix-Bas Saint-Pierre", "Barbieux"],
    nearbyTowns: ["Tourcoing", "Wattrelos", "Croix", "Wasquehal", "Hem"]
  },
  {
    name: "Tourcoing",
    slug: "tourcoing",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "98 000",
    description: "Sécurité Tourcoing par HD Connect. Protection zone transfrontalière, commerces et résidences. Vidéosurveillance HD, contrôle d'accès.",
    neighborhoods: ["Centre-Ville", "Croix-Rouge", "Epidème", "Virolois", "Phalempins"],
    nearbyTowns: ["Roubaix", "Mouscron (BE)", "Wattrelos", "Neuville-en-Ferrain", "Halluin"]
  },
  {
    name: "Dunkerque",
    slug: "dunkerque",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "88 000",
    description: "HD Connect Dunkerque : sécurité portuaire et industrielle. Protection terminaux, usines sidérurgiques et commerces. Caméras résistantes environnement marin.",
    neighborhoods: ["Centre-Ville", "Malo-les-Bains", "Rosendaël", "Petite-Synthe", "Saint-Pol-sur-Mer"],
    nearbyTowns: ["Grande-Synthe", "Coudekerque-Branche", "Bergues", "Gravelines", "Loon-Plage"]
  },
  {
    name: "Villeneuve-d'Ascq",
    slug: "villeneuve-d-ascq",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    regionSlug: "hauts-de-france",
    population: "63 000",
    description: "Installation sécurité Villeneuve-d'Ascq par HD Connect. Protection campus universitaires, centres commerciaux et résidences. Vidéosurveillance intelligente.",
    neighborhoods: ["Hôtel de Ville", "Pont de Bois", "Flers-Bourg", "Brigode", "Cousinerie"],
    nearbyTowns: ["Lille", "Croix", "Roubaix", "Hem", "Lezennes"]
  },
  // RHÔNE (69) - Agglomération lyonnaise sensible
  {
    name: "Vénissieux",
    slug: "venissieux",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "66 000",
    description: "Expert sécurité Vénissieux par HD Connect. Protection zones industrielles, commerces et résidences. Vidéosurveillance IA 4K, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Minguettes", "Parilly", "Moulin à Vent", "Max Barel"],
    nearbyTowns: ["Lyon 8e", "Saint-Fons", "Feyzin", "Saint-Priest", "Bron"]
  },
  {
    name: "Vaulx-en-Velin",
    slug: "vaulx-en-velin",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "52 000",
    description: "Sécurité Vaulx-en-Velin par HD Connect. Protection zones d'activités, commerces et résidences. Vidéosurveillance renforcée, alarmes anti-intrusion.",
    neighborhoods: ["Centre-Ville", "Mas du Taureau", "Écoin", "Village", "Grappinière"],
    nearbyTowns: ["Villeurbanne", "Décines-Charpieu", "Rillieux-la-Pape", "Meyzieu", "Lyon 3e"]
  },
  {
    name: "Saint-Priest",
    slug: "saint-priest",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    regionSlug: "auvergne-rhone-alpes",
    population: "47 000",
    description: "HD Connect Saint-Priest : sécurité zone industrielle Mi-Plaine. Protection entrepôts, commerces et résidences. Vidéosurveillance périmétrique.",
    neighborhoods: ["Centre-Ville", "Bel Air", "Ménival", "Village", "Revaison"],
    nearbyTowns: ["Vénissieux", "Bron", "Mions", "Chassieu", "Corbas"]
  },
  // GIRONDE (33) - Bordeaux Métropole
  {
    name: "Mérignac",
    slug: "merignac",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "75 000",
    description: "Expert sécurité Mérignac par HD Connect. Protection aéroport Bordeaux-Mérignac, entreprises aéronautiques et résidences. Vidéosurveillance IA.",
    neighborhoods: ["Centre-Ville", "Arlac", "Capeyron", "Beutre", "Chemin Long"],
    nearbyTowns: ["Bordeaux", "Pessac", "Eysines", "Le Haillan", "Martignas-sur-Jalle"]
  },
  {
    name: "Pessac",
    slug: "pessac",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "66 000",
    description: "Sécurité Pessac par HD Connect. Protection campus universitaire, domaines viticoles et résidences. Vidéosurveillance, alarmes connectées.",
    neighborhoods: ["Centre-Ville", "Campus", "Alouette", "Saige", "Magonty"],
    nearbyTowns: ["Bordeaux", "Talence", "Gradignan", "Mérignac", "Cestas"]
  },
  {
    name: "Talence",
    slug: "talence",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    regionSlug: "nouvelle-aquitaine",
    population: "44 000",
    description: "Installation sécurité Talence par HD Connect. Protection campus, commerces et résidences. Vidéosurveillance HD, alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Thouars", "Forum", "Peixotto", "Plume La Poule"],
    nearbyTowns: ["Bordeaux", "Pessac", "Villenave-d'Ornon", "Bègles", "Gradignan"]
  },
  // HAUTE-GARONNE (31) - Toulouse Métropole
  {
    name: "Blagnac",
    slug: "blagnac",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "26 000",
    description: "Expert sécurité Blagnac par HD Connect. Protection aéroport Toulouse-Blagnac, usines Airbus et résidences. Vidéosurveillance aéronautique.",
    neighborhoods: ["Centre-Ville", "Andromède", "Grand Noble", "Odyssud", "Grenade"],
    nearbyTowns: ["Toulouse", "Colomiers", "Beauzelle", "Cornebarrieu", "L'Union"]
  },
  {
    name: "Colomiers",
    slug: "colomiers",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    regionSlug: "occitanie",
    population: "40 000",
    description: "Sécurité Colomiers par HD Connect. 2e ville de Haute-Garonne : protection zones aéronautiques, commerces et résidences. Alarmes certifiées.",
    neighborhoods: ["Centre-Ville", "Perget", "Val d'Aran", "En Jacca", "Ramassiers"],
    nearbyTowns: ["Toulouse", "Blagnac", "Tournefeuille", "Pibrac", "Plaisance-du-Touch"]
  },
  // HAUTS-DE-SEINE (92) - Complément Zone Primaire
  {
    name: "Courbevoie",
    slug: "courbevoie",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "82 000",
    description: "Expert sécurité Courbevoie et La Défense. HD Connect protège sièges sociaux, commerces et résidences de standing. Vidéosurveillance IA 4K, contrôle d'accès biométrique.",
    neighborhoods: ["Bécon", "Faubourg de l'Arche", "Cœur de Ville", "Gambetta", "La Défense"],
    nearbyTowns: ["Puteaux", "Nanterre", "La Garenne-Colombes", "Neuilly-sur-Seine", "Levallois-Perret"]
  },
  {
    name: "Nanterre",
    slug: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "97 000",
    description: "Installation sécurité Nanterre par HD Connect. Protection préfecture, campus et quartiers d'affaires. Vidéosurveillance, alarmes certifiées NF&A2P, SAV 7j/7.",
    neighborhoods: ["Centre-Ville", "Le Mont-Valérien", "La Boule", "Parc Nord", "Petit Nanterre"],
    nearbyTowns: ["Rueil-Malmaison", "Puteaux", "Courbevoie", "Colombes", "Suresnes"]
  },
  {
    name: "Asnières-sur-Seine",
    slug: "asnieres-sur-seine",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "86 000",
    description: "HD Connect Asnières-sur-Seine : solutions de sécurité intelligentes. Vidéosurveillance HD, alarmes connectées et domotique pour pavillons et commerces.",
    neighborhoods: ["Bécon-les-Bruyères", "Grésillons", "Quartier de la Mairie", "Bords de Seine", "Flachat"],
    nearbyTowns: ["Gennevilliers", "Bois-Colombes", "Clichy", "Levallois-Perret", "Courbevoie"]
  },
  {
    name: "Colombes",
    slug: "colombes",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "86 000",
    description: "Sécurité Colombes par HD Connect. Protection zones pavillonnaires et commerciales. Vidéosurveillance IA, alarmes sans fil, installation rapide sous 48h.",
    neighborhoods: ["Centre-Ville", "Petite Garenne", "Fossés-Jean", "Plateau", "Agent Sarre"],
    nearbyTowns: ["Bois-Colombes", "La Garenne-Colombes", "Nanterre", "Bezons", "Argenteuil"]
  },
  {
    name: "Rueil-Malmaison",
    slug: "rueil-malmaison",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "78 000",
    description: "Expert sécurité Rueil-Malmaison par HD Connect. Protection propriétés d'exception et bureaux. Vidéosurveillance haut de gamme, alarmes certifiées.",
    neighborhoods: ["Buzenval", "Plaine-Gare", "Centre-Ville", "Richelieu-Châtaigneraie", "Malmaison"],
    nearbyTowns: ["Nanterre", "Suresnes", "Saint-Cloud", "Bougival", "Chatou"]
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    region: "Île-de-France",
    regionSlug: "ile-de-france",
    population: "64 000",
    description: "HD Connect Levallois-Perret : sécurité urbaine de précision. Vidéosurveillance IA, contrôle d'accès et alarmes pour commerces et résidences de luxe.",
    neighborhoods: ["Front de Seine", "Centre-Ville", "Jean Zay", "Alsace", "Louise Michel"],
    nearbyTowns: ["Clichy", "Neuilly-sur-Seine", "Asnières-sur-Seine", "Paris 17e", "Courbevoie"]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return citiesData.filter(city => city.region === region);
};

export const getCitiesByRegionSlug = (regionSlug: string): CityData[] => {
  return citiesData.filter(city => city.regionSlug === regionSlug);
};

export const getCitiesByDepartment = (departmentCode: string): CityData[] => {
  return citiesData.filter(city => city.departmentCode === departmentCode);
};

export const getAllCitySlugs = (): string[] => {
  return citiesData.map(city => city.slug);
};
