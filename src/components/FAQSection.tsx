import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this program completely online?",
      answer: "Yes. 100% digital delivery. Physician consultations via secure Zoom. Protocols via executive app. 12,000+ transformations completed remotely across 4 clinic-governed locations. No clinic visits. No schedule disruption. Medical-grade, not YouTube fitness.",
    },
    {
      question: "Who is this program actually meant for?",
      answer: "High-performing executives 40-60. 58% of cohort aged 50+. CXOs, founders, senior leaders seeking sustainable capacity restoration—not temporary Instagram fitness. 560+ professionals transformed who refuse biological decline.",
    },
    {
      question: "How is this different from online fitness programs or apps?",
      answer: "Medical diagnostics vs fitness guesswork. Doctors analyze 5 biomarkers (metabolism, muscle quality, stress-recovery axis) that apps ignore. 97% adherence rate vs 23% fitness app average. 4 clinic medical teams oversee your protocol remotely.",
    },
    {
      question: "Is this safe for people above 50?",
      answer: "Yes. 58% cohort aged 50+. Joint-preserving protocols. Zero injury incidents across 560 cases. Physician oversight eliminates risk. +14% strength gains without joint stress—medically verified.",
    },
    {
      question: "Will this involve extreme dieting or intense workouts?",
      answer: "No intensity, no restriction. 88% adherence nutrition architecture (no food logging). Movement protocols match executive recovery capacity (43% below age 40 baseline). Burnout prevention built-in.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-soft-green text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
