import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactSection() {
  const handleSendMessage = () => {
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:drfikriamal@gmail.com?subject=${subject}&body=${body}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-healing-blue/10 rounded-full blur-3xl animate-slow-spin"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-healing-green/15 rounded-full blur-3xl animate-slow-spin-reverse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-healing-blue to-healing-green">
              Prendre Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envoyer un Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Prénom</label>
                    <Input placeholder="Votre prénom" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                    <Input placeholder="Votre nom" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="votre.email@exemple.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                  <Input type="tel" placeholder="+212 695-243845" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez brièvement votre demande ou vos questions..."
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-healing-blue to-healing-green text-white py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                  onClick={handleSendMessage}
                >
                  Envoyer le Message
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact info */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  color: "bg-primary/10 text-primary",
                  info: ["Casablanca", "Maroc"]
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  color: "bg-healing-green/10 text-healing-green",
                  info: ["+212 695-243845", "Urgences 24h/7j"]
                },
                {
                  icon: Mail,
                  title: "Email",
                  color: "bg-healing-blue/10 text-healing-blue",
                  info: ["drfikriamal@gmail.com", "Réponse sous 24h"]
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      {item.info.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
