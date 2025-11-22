import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingImage from "@assets/generated_images/university_building_exterior_walkway.png";
import libraryImage from "@assets/generated_images/university_library_interior_students.png";
import labImage from "@assets/generated_images/science_laboratory_students_working.png";
import studentLifeImage from "@assets/generated_images/students_outdoor_campus_life.png";
import researchImage from "@assets/generated_images/research_center_collaboration_scene.png";

const navigationItems = [
  {
    id: "find-your-way",
    title: "Find Your Way",
    subtitle: "Campus Maps & Directions",
    image: buildingImage,
  },
  {
    id: "schools-departments",
    title: "Schools and Departments",
    subtitle: "Explore Academic Programs",
    image: libraryImage,
  },
  {
    id: "institutes",
    title: "Institutes",
    subtitle: "Research & Innovation Centers",
    image: researchImage,
  },
  {
    id: "admissions",
    title: "Admissions",
    subtitle: "Start Your Journey",
    image: buildingImage,
  },
  {
    id: "research",
    title: "Research",
    subtitle: "Discover Our Research",
    image: labImage,
  },
  {
    id: "student-life",
    title: "Student Life",
    subtitle: "Campus Activities & Culture",
    image: studentLifeImage,
  },
  {
    id: "scholarship",
    title: "Scholarship and Financial Aid",
    subtitle: "Funding Your Education",
    image: libraryImage,
  },
];

export default function NavigationCards() {
  return (
    <section className="py-20 md:py-24 bg-background" data-testid="section-navigation-cards">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="relative group h-80 rounded-lg overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all"
              data-testid={`card-${item.id}`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-testid={`img-${item.id}`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2" data-testid={`heading-${item.id}`}>
                  {item.title}
                </h3>
                <p className="text-white/90 mb-4" data-testid={`text-${item.id}`}>{item.subtitle}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-sm"
                  data-testid={`button-${item.id}`}
                >
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
