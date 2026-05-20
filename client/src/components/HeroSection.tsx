import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@assets/image_1764516008840.png";
import heroImage2 from "@assets/image_1764516123892.png";
import heroImage3 from "@assets/image_1764516175146.png";

const heroSlides = [
  {
    image: heroImage1,
    title: "Innovative and Sustainable New Campus",
    subtitle: "Building the Future of Education in Bangladesh",
  },
  {
    image: heroImage2,
    title: "Excellence in Academic Achievement",
    subtitle: "20,000+ Students Pursuing Their Dreams",
  },
  {
    image: heroImage3,
    title: "Research and Innovation Hub",
    subtitle: "Leading the Way in Scientific Discovery",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      {/* Background Images with Transition */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt="Campus"
            className="w-full h-full object-cover"
            data-testid={`img-hero-slide-${index}`}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div
          key={currentSlide}
          className="animate-in fade-in duration-700"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="heading-hero-title">
            {slide.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            {slide.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-md rounded-lg px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            data-testid="button-learn-more"
          >
            Learn More
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              data-testid={`button-slide-${index}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
