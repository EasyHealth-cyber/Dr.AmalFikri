import doctorPhoto from "@/assets/Doctors/doctor-photo.jpg";

export function DoctorSection() {
  return (
    <section id="doctor-section" className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-healing-blue/10 rounded-full blur-3xl animate-slow-spin"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-healing-green/15 rounded-full blur-3xl animate-slow-spin-reverse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Doctor image */}
          <div className="relative w-full h-96 md:h-full rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transform transition-transform duration-500">
            <img
              src={doctorPhoto}
              alt="Dr. Amal Fikri"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-healing-blue/20 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6 text-left md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Médecin psychiatre & addictologue
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionnée par la santé mentale et le bien-être, j’accompagne mes patients avec expertise et bienveillance dans la compréhension et la prise en charge de leurs troubles psychiques et des conduites addictives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mes services incluent :
            </p>
            <ul className="list-disc list-inside text-lg text-muted-foreground leading-relaxed space-y-2">
              <li>Évaluation psychique complète : diagnostic et suivi des troubles psychiatriques.</li>
              <li>Aide au sevrage : accompagnement médical et psychothérapeutique pour la réduction ou l’arrêt de substances.</li>
              <li>Prise en charge personnalisée : traitements médicamenteux adaptés et suivi régulier.</li>
              <li>Psychothérapie individuelle : soutien émotionnel et développement personnel.</li>
              <li>Thérapie de couple : améliorer la communication, résoudre les conflits et renforcer la relation.</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ma pratique est basée sur une approche humaine, confidentielle et centrée sur le patient, avec un suivi adapté aux besoins de chacun.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
