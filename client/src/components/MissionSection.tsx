import { departmentData } from "@/data/staticData";
import graduationImage from "@assets/Gemini_Generated_Image_x42hcdx42hcdx42h_1764537052267.png";
import campusMapImage from "@assets/generated_images/campus_map_aerial_view.png";

export default function MissionSection() {
  const departments = departmentData;

  return (
    <section className="py-20 md:py-24 bg-primary/5" data-testid="section-mission">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={graduationImage}
              alt="Students celebrating graduation"
              className="w-full h-80 object-cover"
              data-testid="img-graduation"
            />
          </div>

          {/* Center Content */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary" data-testid="heading-mission">
              Mission
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Comilla University is committed to providing world-class education and fostering
              innovation through cutting-edge research. Located at Lalmai Bihar, Moynamoti,
              Kotbari, Cumilla on 50 acres of land, we serve{" "}
              <span className="font-semibold text-primary">6,461 students</span> with{" "}
              <span className="font-semibold text-primary">281 faculty members</span> across{" "}
              <span className="font-semibold text-primary">6 faculties</span>, supported by{" "}
              <span className="font-semibold text-primary">307 non-academic staffs</span>.
            </p>
            <p className="text-base text-muted-foreground">
              Our mission is to prepare students for the challenges of tomorrow while maintaining
              strong ties to our local community and global academic standards.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={campusMapImage}
              alt="Campus map and location"
              className="w-full h-80 object-cover"
              data-testid="img-campus-map"
            />
          </div>
        </div>

        {/* Departments Info */}
        <div className="mt-16 p-8 bg-card rounded-lg border border-card-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center" data-testid="heading-departments">
            Our {departments.length} Academic Departments
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="text-center p-3 bg-background rounded-md border border-border hover-elevate transition-all"
                data-testid={`text-department-${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-sm font-medium text-foreground">{dept.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
