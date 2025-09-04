import { Button } from '@/components/ui/button';
import { MultilingualText } from '@/components/ui/multilingual-text';
import { Heart, Brain, Shield } from 'lucide-react';
import doctorPhoto from '@/assets/Doctors/doctor-photo.jpg'; 
 
export function HeroSection() {
  const slogans = [
    { text: "Pour un esprit apaisé", lang: "fr", dir: "ltr" as const },
    { text: "For a Healthier Mind", lang: "en", dir: "ltr" as const },
    { text: "من أجل صحة نفسية أفضل", lang: "ar", dir: "rtl" as const }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-soft overflow-hidden">
      {/* Global background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Santé Mentale
            <span className="block text-4xl md:text-5xl text-primary font-light mt-2">
              & Bien-être
            </span>
          </h1>
          
          {/* Multilingual slogan */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <MultilingualText 
              texts={slogans}
              className="text-2xl md:text-3xl font-medium text-healing-blue"
              interval={4000}
            />
          </div>
          
          {/* Doctor photo section */}
          <div className="mb-12 relative animate-slide-up opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {/* Floating accents around photo */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-healing-blue/10 rounded-full blur-xl animate-gentle-bounce opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}></div>
            <div className="absolute bottom-0 -right-10 w-28 h-28 bg-healing-green/15 rounded-full blur-xl animate-gentle-bounce opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary/10 rounded-full blur-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}></div>
            
            {/* Doctor image */}
            <div className="relative mx-auto mb-6 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-primary-soft rounded-full overflow-hidden shadow-warm">
              <img
                src={doctorPhoto}
                alt="Dr. Amal Fikri"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Doctor name + tagline */}
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Dr. Amal Fikri
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Spécialiste en santé mentale avec plus de 5 ans d'expérience dans l'accompagnement thérapeutique
            </p>
          </div>
          
          {/* Key values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-gentle">
              <Heart className="w-8 h-8 text-healing-blue mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Empathie</h3>
              <p className="text-sm text-muted-foreground text-center">Écoute bienveillante et compréhension</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-gentle">
              <Brain className="w-8 h-8 text-healing-green mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground text-center">Approches thérapeutiques modernes</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-gentle">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Confidentialité</h3>
              <p className="text-sm text-muted-foreground text-center">Espace sécurisé et confidentiel</p>
            </div>
          </div>
          
          {/* CTA buttons with email link */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            {/* Mailto link wrapped around Button */}
            <a
              href="mailto:drfikriamal@gmail.com?subject=Rendez-vous&body=Bonjour%20Dr.%20Fikri,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
  size="lg"
  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl shadow-gentle"
  onClick={() => {
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }}
>
  Prendre Rendez-vous
</Button>

            </a>

            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary-soft px-8 py-4 rounded-xl"
              onClick={() => {
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }}
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
