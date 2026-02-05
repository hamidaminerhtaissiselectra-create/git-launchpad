import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { CityData } from "@/data/citiesData";
import {
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Radio,
  DoorOpen,
  ArrowRight,
} from "lucide-react";

interface CityServicesGridProps {
  city: CityData;
}

const CityServicesGrid = ({ city }: CityServicesGridProps) => {
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      slug: "videosurveillance",
      description: `Caméras HD/4K avec IA à ${city.name}. Vision nocturne, accès mobile 24/7.`,
      link: `/villes/${city.slug}/videosurveillance`,
      features: ["Caméras 4K", "IA intégrée", "Cloud sécurisé"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      icon: ShieldAlert,
      title: "Alarmes",
      slug: "alarme",
      description: `Alarmes NF&A2P avec télésurveillance à ${city.name}.`,
      link: `/villes/${city.slug}/alarme`,
      features: ["Certifié NF&A2P", "Télésurveillance", "Sirène 110dB"],
      gradient: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-500"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      slug: "controle-acces",
      description: `Badges, biométrie et interphones vidéo à ${city.name}.`,
      link: `/villes/${city.slug}/controle-acces`,
      features: ["Biométrie", "RFID", "Gestion cloud"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      icon: Home,
      title: "Domotique",
      slug: "domotique",
      description: `Maison intelligente et automatisation à ${city.name}.`,
      link: `/villes/${city.slug}/domotique`,
      features: ["Éclairage", "Chauffage", "Scénarios"],
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500"
    },
    {
      icon: Wifi,
      title: "Réseau",
      slug: "reseau",
      description: `WiFi 6E, câblage Cat 6A et firewall à ${city.name}.`,
      link: `/villes/${city.slug}/reseau`,
      features: ["WiFi 6E", "Fibre", "Firewall"],
      gradient: "from-indigo-500/20 to-violet-500/20",
      iconColor: "text-indigo-500"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      slug: "maintenance",
      description: `Maintenance préventive et dépannage 24/7 à ${city.name}.`,
      link: `/villes/${city.slug}/maintenance`,
      features: ["24/7", "Préventif", "Réactif"],
      gradient: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-500"
    },
    {
      icon: Radio,
      title: "Antenne & Satellite",
      slug: "antenne-satellite",
      description: `TNT, satellite et antennes collectives à ${city.name}.`,
      link: `/villes/${city.slug}/antenne-satellite`,
      features: ["TNT HD", "Satellite", "Collectif"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-500"
    },
    {
      icon: DoorOpen,
      title: "Portails & Parking",
      slug: "portails-parking",
      description: `Motorisation et contrôle parking à ${city.name}.`,
      link: `/villes/${city.slug}/portails-parking`,
      features: ["Coulissant", "Battant", "Barrières"],
      gradient: "from-slate-500/20 to-gray-500/20",
      iconColor: "text-slate-500"
    }
  ];

  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Services à {city.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Solutions complètes de sécurité et domotique pour particuliers et professionnels.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={service.link}>
                <Card className="group h-full border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-5 relative">
                    {/* Gradient de fond */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                      </div>
                      
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {service.features.map((feature) => (
                          <span 
                            key={feature} 
                            className="text-xs px-2 py-0.5 bg-secondary/80 rounded-full text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityServicesGrid;
