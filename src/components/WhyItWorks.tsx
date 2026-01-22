import { Target, Users, Activity, Shield, Clock } from "lucide-react";

const WhyItWorks = () => {
  const reasons = [
    {
      icon: <Target size={24} />,
      title: "Designed for 40+ Bodies",
      description: "Programs specifically tailored for mature physiology",
    },
    {
      icon: <Users size={24} />,
      title: "Medical Supervision",
      description: "Backed by doctors and health professionals",
    },
    {
      icon: <Activity size={24} />,
      title: "Personalized, Not Generic",
      description: "Customized to your unique health profile",
    },
    {
      icon: <Shield size={24} />,
      title: "Safe & Sustainable",
      description: "Evidence-based approach with no quick fixes",
    },
    {
      icon: <Clock size={24} />,
      title: "Long-Term Focus",
      description: "Building lasting health, not temporary results",
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                alt="Wellness and balance"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
              />
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg">
                <p className="text-4xl font-serif font-bold text-primary mb-1">97%</p>
                <p className="text-sm text-muted-foreground">Adherence Rate</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              The Science
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Young After 40 Works
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our integrated approach combines medical expertise with comprehensive lifestyle support for results that last well into your golden years.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-soft-green flex items-center justify-center text-primary flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
