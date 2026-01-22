import { Sparkles, Users, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="text-primary" size={28} />,
      title: "GLP-Based Medical Support",
      description: "Medical support where clinically indicated for optimal anti-aging results.",
    },
    {
      icon: <Users className="text-primary" size={28} />,
      title: "Expert Team",
      description: "Multidisciplinary team of doctors, dietitians, and certified health coaches.",
    },
    {
      icon: <Heart className="text-primary" size={28} />,
      title: "360° Approach",
      description: "Complete integration of nutrition, fitness, and lifestyle correction.",
    },
    {
      icon: <Target className="text-primary" size={28} />,
      title: "Root-Cause Focus",
      description: "Addresses metabolic issues at their source, not just symptoms.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-soft-gradient">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              About Our Program
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What is Young After 40 – 360° GLP Program?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Young After 40 – 360° GLP Program is a holistic, 100% digital wellness and weight management 
              program by <strong className="text-foreground">LIFE RISE</strong>, designed specifically for individuals 
              above 40 who want to regain their energy, strength, confidence, and vitality - scientifically and safely.
            </p>
            
            <p className="text-lg text-muted-foreground mb-4">
              Built with <strong className="text-foreground">18+ years of real-time expertise</strong>, the program is led by 
              <strong className="text-foreground"> DT Prathibha M</strong>, along with a multidisciplinary team.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Age after 40 brings natural changes like slower metabolism, hormonal shifts, reduced muscle mass, 
              joint stiffness, and fatigue. This program addresses these challenges at the root-cause metabolic level.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop"
                  alt="Active lifestyle"
                  className="w-full rounded-2xl shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
                  alt="Fitness training"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop"
                  alt="Medical consultation"
                  className="w-full rounded-2xl shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop"
                  alt="Yoga and wellness"
                  className="w-full rounded-2xl shadow-md"
                />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
