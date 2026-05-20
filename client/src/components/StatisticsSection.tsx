import { Users, GraduationCap, Building2, Briefcase } from "lucide-react";

const statistics = [
  {
    id: "students",
    icon: Users,
    number: "6,461",
    label: "Students",
    description: "Enrolled across all programs",
  },
  {
    id: "faculty-members",
    icon: GraduationCap,
    number: "281",
    label: "Faculty Members",
    description: "Dedicated educators",
  },
  {
    id: "faculties",
    icon: Building2,
    number: "6",
    label: "Faculties",
    description: "Academic divisions",
  },
  {
    id: "non-academic-staff",
    icon: Briefcase,
    number: "307",
    label: "Non Academic Staffs",
    description: "Supporting excellence",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 md:py-24 bg-background" data-testid="section-statistics">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16" data-testid="heading-statistics">
          Numbers at a Glance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
