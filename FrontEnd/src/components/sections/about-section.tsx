import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';
import doctorPhoto from '@/assets/Doctors/doctor-office.jpg';

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À Propos du Dr. Amal Fikri
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une approche personnalisée et bienveillante pour votre bien-être mental
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Doctor image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-primary-soft rounded-3xl overflow-hidden shadow-warm">
                  <img
                    src={doctorPhoto}
                    alt="Dr. Amal Fikri"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-healing-green/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Votre Bien-être, Ma Priorité
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Avec plus de 5 années d'expérience dans le domaine de la santé mentale, 
                je propose un accompagnement personnalisé basé sur l'écoute, la compréhension 
                et des méthodes thérapeutiques éprouvées.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Mon approche intègre différentes techniques thérapeutiques adaptées à chaque 
                personne, dans un environnement sécurisant et confidentiel.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-xl shadow-gentle">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-xl shadow-gentle">
                  <div className="text-2xl font-bold text-healing-green mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Patients accompagnés</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Qualifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-gentle">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Formation</h4>
                <p className="text-sm text-muted-foreground">-Lauréate de la faculté de médecine et de pharmacie de Fès </p>
                <p className="text-sm text-muted-foreground">-Ancien interne aux CHU Hassan II et à l'Hopital psychiatrique Ibn Hassan</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-gentle">
              <CardContent className="p-6 text-center">
                <Award className="w-10 h-10 text-healing-green mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
              
                <p className="text-sm text-muted-foreground">-Diplomée de l'Université Paris-Saclay </p>
                <p className="text-sm text-muted-foreground">-Diplomée de l'Université Internationale de Rabat</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-gentle">
              <CardContent className="p-6 text-center">
                <Users className="w-10 h-10 text-healing-blue mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Spécialités</h4>
                <p className="text-sm text-muted-foreground">Psychiatre-Psychohérapeute-Addictologue</p>
                <p className="text-sm text-muted-foreground">Adulte-Adolescents-Sujet agé</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-gentle">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-secondary-warm mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Disponibilité</h4>
                <p className="text-sm text-muted-foreground">Lun-Ven 9h-18h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
