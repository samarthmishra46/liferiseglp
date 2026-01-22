import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-[#00190D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D7FFE5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#D1F0DC] rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EBFFEB] mb-6">
            Your Age is a Number. Your Health is a Choice.
          </h2>
          
          <p className="text-xl text-[#EBFFEB]/80 mb-4">
            You don't need to feel old after 40.
          </p>
          
          <p className="text-2xl font-semibold text-[#EBFFEB] mb-10">
            You need the <span className="text-[#9EFF00]">right guidance</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#"
              className="btn-primary group text-lg px-10 py-5"
            >
              Book a Consultation Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="text-sm text-[#EBFFEB]/60 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Results may vary based on individual health conditions. 
            All treatments are provided under medical supervision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
