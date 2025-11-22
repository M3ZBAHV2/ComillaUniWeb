import { Users, GraduationCap, BookOpen } from "lucide-react";

const statistics = [
  {
    id: "students",
    icon: Users,
    number: "20,000+",
    label: "Students",
    description: "Enrolled across all programs",
  },
  {
    id: "graduates",
    icon: GraduationCap,
    number: "22,000+",
    label: "Graduates",
    description: "Success stories and counting",
  },
  {
    id: "subjects",
    icon: BookOpen,
    number: "27",
    label: "High Categories of Subjects",
    description: "Diverse academic offerings",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 md:py-24 bg-background" data-testid="section-statistics">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {statistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="text-center space-y-4"
                data-testid={`stat-${stat.id}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" data-testid={`icon-${stat.id}`} />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary" data-testid={`number-${stat.id}`}>
                  {stat.number}
                </div>
                <div className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`label-${stat.id}`}>
                  {stat.label}
                </div>
                <div className="text-base text-muted-foreground" data-testid={`description-${stat.id}`}>
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
