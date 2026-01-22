import { CheckCircle2 } from "lucide-react";

const WhoIsItForSection = () => {
  const criteria = [
    "Low energy or constant fatigue",
    "Weight gain or stubborn belly fat",
    "Joint pain, stiffness, or reduced mobility",
    "Hormonal imbalance",
    "Poor sleep or stress",
    "Skin aging, hair thinning, or loss of vitality",
    "Reduced immunity or frequent illness",
  ];

  return (
    <section className="section-padding bg-sage-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Is This For You?
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Who Is This Program For?
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-12">
            This program is ideal for men and women aged 40+ who experience:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {criteria.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm text-left transition-transform hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-coral flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-primary-foreground" />
                </div>
                <p className="text-primary-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="#contact" className="btn-primary">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
