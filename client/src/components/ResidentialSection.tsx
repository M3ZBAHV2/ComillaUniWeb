import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import residentialImage from "@assets/generated_images/residential_hall_dormitory_building.png";

export default function ResidentialSection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden" data-testid="section-residential">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={residentialImage}
          alt="Residential halls"
          className="w-full h-full object-cover"
          data-testid="img-residential"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="heading-residential">
            Residential Semester
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience campus life to the fullest with our comprehensive residential program.
            Our modern dormitories provide a safe, comfortable, and vibrant living environment
            where students can focus on their studies while building lifelong friendships.
          </p>
          <p className="text-lg text-white/80 mb-8">
            With 24/7 security, study rooms, recreational facilities, and a supportive community,
            our residential halls are more than just a place to stay—they're a home away from home.
          </p>
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-md rounded-lg"
            data-testid="button-read-more-residential"
          >
            Read More
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
