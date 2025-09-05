import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";
import doctorPhoto from "@/assets/Doctors/doctor-office.jpg";

export function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-healing-blue/10 rounded-full blur-3xl animate-slow-spin"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-healing-green/15 rounded-full blur-3xl animate-slow-spin-reverse"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-healing-blue to-healing-green">
              À Propos du Dr. Amal Fikri
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une approche personnalisée et bienveillante pour votre bien-être mental
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Doctor image */}
            <div className="order-2 lg:order-1 relative group flex justify-center lg:justify-start">
              <div className="w-full max-w-md lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500">
                <img
                  src={doctorPhoto}
                  alt="Dr. Amal Fikri"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-healing-green/30 rounded-full blur-2xl animate-gentle-bounce"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Votre Bien-être, Ma Priorité
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
                Avec plus de 5 années d'expérience dans le domaine de la santé mentale, 
                je propose un accompagnement personnalisé basé sur l'écoute, la compréhension 
                et des méthodes thérapeutiques éprouvées.
              </p>
              <p className="text-muted-foreground mb-12 leading-relaxed max-w-lg">
                Mon approche intègre différentes techniques thérapeutiques adaptées à chaque 
                personne, dans un environnement sécurisant et confidentiel.
              </p>

              {/* Centered Experience Card */}
              <div className="flex justify-center w-full">
                <div className="p-10 bg-gradient-to-r from-healing-blue/20 to-healing-green/20 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 w-52">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-bounce-slow">5+</div>
                  <p className="text-sm md:text-base text-muted-foreground">Années d'expérience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Formation</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Lauréate de la faculté de médecine et de pharmacie de Fès
                </p>
                <p className="text-sm text-muted-foreground">
                  Ancien interne aux CHU Hassan II et à l'Hôpital psychiatrique Ibn Hassan
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-healing-green mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Diplômée de l'Université Paris-Saclay
                </p>
                <p className="text-sm text-muted-foreground">
                  Diplômée de l'Université Internationale de Rabat
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-healing-blue mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Spécialités</h4>
                <p className="text-sm text-muted-foreground mb-1">
                  Psychiatre – Psychothérapeute – Addictologue
                </p>
                <p className="text-sm text-muted-foreground">
                  Adultes – Adolescents – Sujets âgés
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
