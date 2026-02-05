 # 📋 CHANGELOG - HD Connect
 
 > **Format:** [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/)  
 > **Versioning:** [Semantic Versioning](https://semver.org/lang/fr/)

 ## [8.5.0] - 2026-02-05
 
 ### ✅ Ajouté
 - **Expansion Lyon/Marseille** : Ajout de 9 arrondissements Lyon + 12 secteurs Marseille avec pages dédiées.
 - **SEO Local Renforcé** : 35+ nouvelles villes en banlieue lyonnaise, marseillaise et petite couronne parisienne.
 - **Sitemap Étendu** : Passage à **310 URLs** pour un maillage SEO maximal.
 - **CityLocalContent Enrichi** : Contenu unique par ville avec statistiques dynamiques pour éviter le duplicate content.
 - **Animations Hero** : Particules flottantes et animations d'entrée Framer Motion.
 - **CTA Mobile** : Bandeau sticky avec boutons Devis/Appel pour mobile.
 
 ### 🔧 Corrigé
 - **Routes App.tsx** : Organisation correcte des routes spécifiques avant les routes génériques.
 - **Type Request** : Mapping `intervention` → `emergency` pour la table Supabase.
 
 ---
 
 ## [8.4.0] - 2026-02-05

 ### ✅ Ajouté
 - **Performance & WebP** : Nettoyage intégral des images JPG/PNG au profit du format WebP.
 - **SEO Local Étendu+** : Augmentation du sitemap à **252 URLs** pour un maillage interne maximal.
 - **Optimisation IA & LLM** : Création de `ai-instructions.md`, robots.txt enrichi et métadonnées spécifiques pour ChatGPT et Perplexity.
 - **Architecture Hybride Validée** : Confirmation de l'envoi Formspree + stockage Supabase `customer_requests` sur tous les formulaires.
 - **SEO Local Étendu** : Ajout des pages Ville+Service pour les 6 nouvelles villes (Total sitemap: 242 URLs).

 ### 🔧 Corrigé
 - **Cohérence Données** : Alignement strict entre `citiesData.ts` (125 villes), `README.md` et `sitemap.xml`.
 - **Documentation** : Correction finale des Project IDs et statistiques de production.

 ## [8.2.0] - 2026-02-05

 ### ✅ Ajouté
 - **Double Stockage Leads** : Intégration hybride Formspree (Notification Email) + Supabase (Archivage Admin) dans tous les formulaires.
 - **Expansion Villes** : Ajout de 6 villes stratégiques (Courbevoie, Nanterre, Asnières-sur-Seine, Colombes, Rueil-Malmaison, Levallois-Perret) pour un total de 125 villes.
 - **Google Analytics** : Script décommenté dans `index.html` et prêt pour l'ID de mesure.

 ### 🔧 Corrigé
 - **Architecture Email** : Suppression complète de Resend et des fonctions Edge inutilisées au profit d'une solution plus robuste et simple.
 - **Documentation** : Correction du Project ID Supabase (`bntatxbwyheajskyrtuh`) dans tous les fichiers de documentation.
 - **Sitemap** : Mise à jour du `sitemap.xml` avec les nouvelles URLs et correction du nombre total d'URLs annoncées.

 ### 📝 Documentation
 - Mise à jour majeure du `README.md` et `CONFIGURATION.md` pour refléter la nouvelle architecture.

 ---

 ## [8.1.0] - 2026-02-05

 ### ✅ Ajouté
 - **Pages légales** : `/mentions-legales`, `/politique-confidentialite`, `/cgv`
 - **Schema Speakable** : Optimisation pour la recherche vocale et les IA
 - **Contenu local enrichi** : 17 départements avec statistiques uniques
 - **Maillage Blog → Villes** : 5 articles avec `relatedCities`
 - **Geo tags** : Meta tags de géolocalisation dans `index.html`
 - **Liens footer** : Pages légales ajoutées au footer

 ### 🔧 Corrigé
 - **ParisPage.tsx** : Liens services corrigés vers `/villes/paris/*` au lieu de `/services/*`
 - **index.html** : Open Graph, Twitter Card, placeholder Google Analytics

 ---

 ## [7.0.0] - 2026-02-03

 ### ✅ Ajouté
 - **125 villes** couvertes (100% Île-de-France + métropoles nationales)
 - **20 arrondissements Paris** avec pages dédiées
 - **1000+ pages ville+service** dynamiques
 - **10 articles blog** (5 nationaux + 5 zones sensibles)
 - **CityLocalContent** : Composant de contenu contextuel par département

 ---

 ## [6.0.0] - 2026-01-28

 ### ✅ Ajouté
 - **Hub Services** (`/services`) comme page pivot SEO
 - **Pages départements** : 8 départements IDF
 - **CityCoverageSection** : Villes voisines et maillage local

 ---

 ## [5.0.0] - 2026-01-20

 ### ✅ Ajouté
 - **Images WebP** : Conversion de toutes les images JPG
 - **Maillage interne services** : CTA croisés entre services complémentaires
 - **Pages régions** : 13 régions françaises

 ---

 ## [4.0.0] - 2026-01-15

 ### ✅ Ajouté
 - **11 pages services** complètes
 - **Formulaire de devis** multi-étapes
 - **Edge Function** pour envoi d'emails via Resend
 - **Sitemap.xml** avec 250+ URLs

 ---

 ## [3.0.0] - 2026-01-10

 ### ✅ Ajouté
 - **Design System** : Variables CSS, tokens de couleurs
 - **Composants Shadcn/UI** : 45+ composants
 - **Animations** : Framer Motion, AnimatedSection

 ---

 ## [2.0.0] - 2026-01-05

 ### ✅ Ajouté
 - **Architecture React/Vite** initiale
 - **Intégration Supabase** : Auth, Database
 - **Routing** : React Router 6

 ---

 ## [1.0.0] - 2026-01-01

 ### 🚀 Initial Release
 - Création du projet HD Connect
 - Structure de base du site vitrine

 ---

 ## 📝 Notes de Version

 ### Configuration Post-Déploiement (En attente)
 - [ ] Google Analytics 4 (`G-XXXXXXXXXX`)
 - [ ] Soumission sitemap à Search Console
 - [ ] Premier utilisateur admin

 ### Roadmap Future
 - [x] +60 villes (150+ atteint) ✅
 - [ ] Page Auteurs/Experts E-E-A-T
 - [ ] Widget avis Google
 - [ ] Images OG personnalisées par service
 - [ ] Espace client sécurisé
 - [ ] Système de rendez-vous en ligne
 - [ ] Chat en direct
