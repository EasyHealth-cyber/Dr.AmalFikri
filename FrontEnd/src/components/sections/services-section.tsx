import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Group, Briefcase, Home } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "Consultation Individuelle",
      description: "Séances personnalisées pour traiter l'anxiété, la dépression, et autres troubles mentaux dans un cadre confidentiel.",
      duration: "50 min",
      color: "text-primary"
    },
    {
      icon: Group,
      title: "Thérapie de Groupe",
      description: "Sessions collectives pour partager et apprendre ensemble, particulièrement efficaces pour certains troubles.",
      duration: "90 min",
      color: "text-healing-green"
    },
    {
      icon: Briefcase,
      title: "Accompagnement Professionnel",
      description: "Gestion du stress au travail, burn-out, et développement des compétences émotionnelles en milieu professionnel.",
      duration: "60 min",
      color: "text-healing-blue"
    },
    {
      icon: Home,
      title: "Thérapie Familiale",
      description: "Médiation et résolution de conflits familiaux, amélioration de la communication et renforcement des liens.",
      duration: "75 min",
      color: "text-secondary-warm"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services & Thérapies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des approches thérapeutiques variées et personnalisées pour répondre à vos besoins spécifiques
            </p>
          </div>
          
          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-gentle hover:shadow-warm transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-soft rounded-xl">
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">Durée : {service.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 text-primary hover:bg-primary-soft"
                    onClick={() => {
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }}
                  >
                    Prendre Rendez-vous
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
        
        </div>
      </div>
    </section>
  );
}