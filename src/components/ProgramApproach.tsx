import { Stethoscope, Utensils, Dumbbell, HeartHandshake, Brain } from "lucide-react";

const ProgramApproach = () => {
  const approaches = [
    {
      icon: <Stethoscope size={32} />,
      title: "Medical Evaluation",
      items: [
        "Detailed health assessment",
        "Blood reports & metabolic analysis",
        "Hormonal and nutritional screening",
      ],
    },
    {
      icon: <Utensils size={32} />,
      title: "Personalized Nutrition",
      items: [
        "Age-appropriate nutrition plans",
        "Anti-inflammatory & metabolism-supporting diets",
        "No crash diets or starvation",
      ],
    },
    {
      icon: <Dumbbell size={32} />,
      title: "Fitness & Mobility",
      items: [
        "Low-impact strength training",
        "Yoga, stretching, and mobility exercises",
        "Programs customized to joint health and stamina",
      ],
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Hormonal & Metabolic Support",
      items: [
        "Doctor-guided treatment plans",
        "Focus on metabolic balance",
        "Healthy aging optimization",
      ],
    },
    {
      icon: <Brain size={32} />,
      title: "Mind & Recovery",
      items: [
        "Stress management guidance",
        "Sleep improvement protocols",
        "Lifestyle correction",
      ],
    },
  ];

  return (
    <section id="program" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
            Our Approach
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Scientific Approach
          </h2>
          
          <p className="text-lg text-muted-foreground">
            At LIFE RISE, we believe aging should be managed, not feared. Young After 40 follows a 360-degree medical and lifestyle approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className={`card-elevated p-8 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-soft-green flex items-center justify-center text-primary mb-6">
                {approach.icon}
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {approach.title}
              </h3>
              
              <ul className="space-y-3">
                {approach.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramApproach;
