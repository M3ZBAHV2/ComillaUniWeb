import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import vcImage from "@assets/generated_images/vice_chancellor_portrait_photo.png";

export default function ViceChancellorQuote() {
  return (
    <section className="bg-primary py-20 md:py-24" data-testid="section-vice-chancellor">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Quote Text */}
          <div className="space-y-6">
            <Quote className="w-12 h-12 text-primary-foreground/30" />
            <blockquote className="text-xl md:text-2xl text-primary-foreground leading-relaxed" data-testid="text-vc-quote">
              "Young women and men who graduate today must understand the interconnectedness of societies and
              prepare to be globally competitive and locally relevant, just as they must recognize their
              responsibilities to themselves, to their families and communities, and to the larger world we
              all share."
            </blockquote>
            <div className="pt-4">
              <div className="text-primary-foreground font-semibold text-lg" data-testid="text-vc-name">
                Professor Dr. Md. Haider Ali
              </div>
              <div className="text-primary-foreground/80" data-testid="text-vc-title">
                Vice Chancellor, Comilla University
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-6 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              data-testid="button-read-more-vc"
            >
              Read More
            </Button>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={vcImage}
                alt="Professor Dr. Md. Haider Ali - Vice Chancellor"
                className="w-full h-auto object-cover"
                data-testid="img-vice-chancellor"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
