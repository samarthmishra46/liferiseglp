import { Zap, Flame, Activity, TrendingDown, Moon, Heart, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap size={32} />,
      title: "Increased Energy & Stamina",
      description: "Feel more energetic and active throughout your day.",
    },
    {
      icon: <Flame size={32} />,
      title: "Improved Metabolism",
      description: "Reset your metabolic rate for efficient calorie burning.",
    },
    {
      icon: <Activity size={32} />,
      title: "Better Joint Mobility & Strength",
      description: "Move freely with reduced stiffness and improved flexibility.",
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Fat Loss Without Weakness",
      description: "Lose fat while maintaining and building muscle strength.",
    },
    {
      icon: <Moon size={32} />,
      title: "Better Sleep & Mental Clarity",
      description: "Enjoy restful sleep and sharper cognitive function.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Healthier Skin & Hair",
      description: "Restore your youthful glow and hair vitality.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Benefits
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Program Benefits
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Experience transformative changes that improve your overall quality of life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
