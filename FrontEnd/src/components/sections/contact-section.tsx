import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prendre Contact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="border-0 shadow-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envoyer un Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Téléphone</label>
                  <Input type="tel" placeholder="+33 1 23 45 67 89" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Décrivez brièvement votre demande ou vos questions..."
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl"
                onClick={() => {
    const subject = encodeURIComponent("Rendez-vous");
    const body = encodeURIComponent("Bonjour Dr. Fikri,");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=drfikriamal@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  }}
                >
                
                  Envoyer le Message
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact info */}
            <div className="space-y-6">
              {/* Address */}
              <Card className="border-0 shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-soft rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Adresse du Cabinet</h3>
                      <p className="text-muted-foreground">
                        123 Avenue de la Santé<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Phone */}
              <Card className="border-0 shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-healing-green/20 rounded-xl">
                      <Phone className="w-6 h-6 text-healing-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                      <p className="text-muted-foreground">+212 695-243845</p>
                      <p className="text-sm text-muted-foreground mt-1">Urgences 24h/7j</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Email */}
              <Card className="border-0 shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-healing-blue/20 rounded-xl">
                      <Mail className="w-6 h-6 text-healing-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">drfikriamal@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hours */}
              <Card className="border-0 shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-xl">
                      <Clock className="w-6 h-6 text-secondary-warm" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Horaires</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Lundi - Vendredi : 9h00 - 18h00</p>
                        <p>Samedi : 9h00 - 13h00</p>
                        <p>Dimanche : Fermé</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}