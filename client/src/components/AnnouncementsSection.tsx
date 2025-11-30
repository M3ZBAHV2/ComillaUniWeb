import { Calendar, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { announcementData } from "@/data/staticData";

export default function AnnouncementsSection() {
  const items = announcementData.filter(a => a.type === "announcement").slice(0, 4);

  const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleDateString("en-US", { month: "short" });
    const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    return { day, month, time };
  };

  return (
    <section className="py-20 md:py-24 bg-background" data-testid="section-announcements">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="heading-announcements">
            Notice
          </h2>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {items.map((item) => {
            const { day, month, time } = formatDate(item.date);
            return (
              <Card
                key={item.id}
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid={`card-announcement-${item.id}`}
              >
                <div className="flex gap-4">
                  {/* Date Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center border border-primary/20">
                      <div className="text-2xl font-bold text-primary">
                        {day}
                      </div>
                      <div className="text-xs text-primary font-medium">
                        {month}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs text-muted-foreground font-medium">
                        {time}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground line-clamp-2" data-testid={`heading-announcement-title-${item.id}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg"
            data-testid="button-view-all-announcements"
          >
            View All
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
