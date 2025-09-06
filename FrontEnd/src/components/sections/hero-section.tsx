import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MultilingualText } from '@/components/ui/multilingual-text';
import { Heart, Brain, Shield } from 'lucide-react';
import doctorPhoto from '@/assets/Doctors/doctor-photo.jpg';
import logo from '@/assets/logo.jpg'; // Add your logo here

export function HeroSection() {
  const topSlogans = [
    { text: "Pour un esprit apaisé", lang: "fr", dir: "ltr" as const },
    { text: "For a Healthier Mind", lang: "en", dir: "ltr" as const },
    { text: "من أجل صحة نفسية أفضل", lang: "ar", dir: "rtl" as const }
  ];

  const bottomSlogans = [
    { text: "Votre alliée en santé mentale, dédiée à un accompagnement thérapeutique humain et personnalisé", lang: "fr", dir: "ltr" as const },
    { text: "Your trusted partner in mental health, dedicated to humane and personalized therapeutic support", lang: "en", dir: "ltr" as const },
    { text: "حليفتكم في الصحة النفسية, مكرسة لتقديم دعم علاجي إنساني ومخصص", lang: "ar", dir: "rtl" as const }
  ];

  const subject = encodeURIComponent("Rendez-vous");
  const body = encodeURIComponent("Bonjour Dr. Fikri,");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const emailLink = isMobile
    ? `mailto:drfikriamal@gmail.com?subject=${subject}&body=${body}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setTilt({
        x: ((e.clientY - centerY) / centerY) * 8,
        y: ((e.clientX - centerX) / centerX) * 8
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-primary/5 via-background/20 to-background px-4 md:px-6">
      
      {/* Background floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-healing-blue/20 rounded-full blur-3xl animate-slow-bounce"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-healing-green/15 rounded-full blur-3xl animate-slow-bounce"></div>
        <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/30 rounded-full blur-xl transition-all duration-300"
            style={{
              top: `${mousePos.y + i * 15}px`,
              left: `${mousePos.x + i * 15}px`,
              transform: `translate(${i * -5}px, ${i * -5}px)`,
            }}
          ></div>
        ))}

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
   {/* Logo */}
<div className="mb-6 flex justify-center">
  <div className="p-3 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
    <img 
      src={logo} 
      alt="Logo" 
      className="w-16 sm:w-20 md:w-24 object-contain rounded-xl"
    />
  </div>
</div>





        {/* Gradient heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 md:mb-8 bg-gradient-to-r from-healing-blue via-healing-green to-primary bg-clip-text text-transparent animate-gradient-shimmer">
          Santé Mentale
          <span className="block text-4xl md:text-5xl font-light mt-2 text-foreground">
            & Bien-être
          </span>
        </h1>

        {/* Top slogans */}
        <div className="mb-12 flex items-center justify-center">
          <MultilingualText 
            texts={topSlogans}
            className="text-2xl md:text-3xl font-semibold text-healing-blue animate-text-fade"
            interval={4000}
          />
        </div>

        {/* Doctor Photo */}
        <div className="relative mb-12 flex flex-col items-center">
          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-full overflow-hidden shadow-2xl transition-transform transform hover:scale-105">
            <img
              src={doctorPhoto}
              alt="Dr. Amal Fikri"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-6">
            Dr. Amal Fikri
          </h2>

          {/* Bottom slogans under name */}
          <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center justify-center space-y-2">
            <MultilingualText 
              texts={bottomSlogans}
              className="text-2xl md:text-3xl font-semibold text-healing-blue animate-text-fade text-center"
              interval={4000}
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[ 
            { icon: Heart, title: 'Empathie', desc: 'Écoute bienveillante et compréhension', color: 'text-healing-blue' },
            { icon: Brain, title: 'Expertise', desc: 'Approches thérapeutiques modernes', color: 'text-healing-green' },
            { icon: Shield, title: 'Confidentialité', desc: 'Espace sécurisé et confidentiel', color: 'text-primary' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-2 hover:scale-105"
            >
              <item.icon className={`w-10 h-10 ${item.color} mb-3`} />
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-healing-blue to-healing-green text-white font-bold px-12 py-4 rounded-3xl shadow-xl hover:shadow-2xl transform transition hover:scale-105 hover:brightness-105"
            >
              Prendre Rendez-vous
            </Button>
          </a>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-healing-blue text-healing-blue font-semibold px-12 py-4 rounded-3xl shadow-lg transform transition hover:bg-healing-blue/10 hover:scale-105 hover:shadow-2xl"
            onClick={() => document.getElementById('doctor-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            En Savoir Plus
          </Button>
        </div>
      </div>
    </section>
  );
}
