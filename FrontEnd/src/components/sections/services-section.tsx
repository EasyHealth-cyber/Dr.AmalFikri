import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserRound, Users, Briefcase, Home, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: UserRound,
      title: "Consultation Individuelle psychiatrie addictologie ",
      description: "Nous réalisons une évaluation complète du terrain psychiatrique, l’analyse de la personnalité, ainsi qu’un accompagnement spécialisé en addictologie pour soutenir le patient dans les processus de sevrage de substances. Ces consultations permettent d’établir un plan de suivi personnalisé et adapté aux besoins spécifiques de chaque individu.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Thérapie de couple ",
      description: "La thérapie de couple offre un espace sécurisé pour améliorer la communication, résoudre les conflits et renforcer la relation. Elle permet aux partenaires de comprendre leurs dynamiques relationnelles, d’exprimer leurs émotions et de développer des stratégies concrètes pour un lien harmonieux et durable.",
      color: "text-healing-green"
    },
    {
      icon: Briefcase,
      title: "Accompagnement professionnel",
      description: "Nous proposons un accompagnement spécialisé pour la gestion du stress en milieu de travail, la prévention et la prise en charge du burn-out, ainsi que le développement de compétences en gestion émotionnelle. L’objectif est d’améliorer le bien-être au travail et de favoriser une performance durable et équilibrée.",
      color: "text-healing-blue"
    },
    {
      icon: Home,
      title: "Thérapie familiale ",
      description: "La thérapie familiale vise à soutenir la dynamique et l’équilibre familial en impliquant tous les membres concernés. Elle aide à identifier et à résoudre les conflits, à améliorer la communication et à renforcer la cohésion au sein de la famille, favorisant ainsi un environnement sain et équilibré.",
      color: "text-secondary-warm"
    }
  ];

  const getEmailLink = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    return isMobile
      ? `mailto:drfikriamal@gmail.com?subject=${subject}&body=${body}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-healing-blue/10 rounded-full blur-3xl animate-slow-spin"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-healing-green/15 rounded-full blur-3xl animate-slow-spin-reverse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-healing-blue to-healing-green">
              Services & Thérapies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des approches thérapeutiques variées et personnalisées pour répondre à vos besoins spécifiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-healing-blue/10 to-healing-green/10 rounded-xl shadow-inner">
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Button
                    onClick={() => window.open(getEmailLink(), "_blank")}
                    className="group relative w-full px-8 py-4 rounded-2xl font-bold text-white overflow-hidden shadow-lg bg-gradient-to-r from-healing-blue to-healing-green
                               hover:scale-105 hover:shadow-2xl transition-all duration-500"
                  >
                    <span className="relative z-10">Prendre Rendez-vous</span>
                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-70 group-hover:translate-x-2 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
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
