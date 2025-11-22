import { useState } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { announcementData } from "@/data/staticData";

type AnnouncementType = "announcement" | "academic-date";

export default function AnnouncementsSection() {
  const [activeTab, setActiveTab] = useState<AnnouncementType>("announcement");

  const items = announcementData.filter(a => a.type === activeTab).slice(0, 4);

  const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleDateString("en-US", { month: "short" });
    return { day, month };
  };

  return (
    <section className="py-20 md:py-24 bg-background" data-testid="section-announcements">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="heading-announcements">
            Latest Updates
          </h2>

          {/* Filter Buttons */}
          <div className="flex gap-3">
            <Button
              variant={activeTab === "announcement" ? "default" : "outline"}
              onClick={() => setActiveTab("announcement")}
              data-testid="button-filter-announcements"
              className="rounded-lg"
            >
              Announcements
            </Button>
            <Button
              variant={activeTab === "academic-date" ? "default" : "outline"}
              onClick={() => setActiveTab("academic-date")}
              data-testid="button-filter-academic-dates"
              className="rounded-lg"
            >
              Academic Dates
            </Button>
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {items.map((item) => {
            const { day, month } = formatDate(item.date);
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
                    <div className="flex items-start gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                      <Badge variant="secondary" className="text-xs">
                        {activeTab === "announcement" ? "Announcement" : "Academic Date"}
                      </Badge>
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
