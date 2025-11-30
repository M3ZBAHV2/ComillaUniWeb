import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { newsData, imageMap } from "@/data/staticData";

export default function NewsSection() {
  const newsItems = newsData;
  const featured = newsItems[0];
  const otherNews = newsItems.slice(1, 4) || [];

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getImage = (imageName: string) => {
    const images = Object.values(imageMap);
    return imageMap[imageName] || images[0];
  };

  return (
    <section className="py-20 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="heading-news">News</h2>
          <Button
            variant="outline"
            className="rounded-lg"
            data-testid="button-all-news"
          >
            All News
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            {featured && (
              <Card 
                className="lg:col-span-2 overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer"
                data-testid="card-news-featured"
              >
                <div className="relative h-96">
                  <img
                    src={getImage(featured.image)}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    data-testid="img-news-featured"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground" data-testid={`badge-category-${featured.category.toLowerCase()}`}>
                      {featured.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <span data-testid="text-news-featured-date">{formatDate(featured.date)}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" data-testid="heading-news-featured-title">
                      {featured.title}
                    </h3>
                    <p className="text-foreground/80 text-base mb-4 line-clamp-2" data-testid="text-news-featured-excerpt">
                      {featured.excerpt}
                    </p>
                    <Button
                      variant="default"
                      size="sm"
                      data-testid="button-read-featured"
                    >
                      Read More
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Smaller News Items */}
            <div className="space-y-6">
              {otherNews.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer"
                  data-testid={`card-news-${item.id}`}
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                      <img
                        src={getImage(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-news-${item.id}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge variant="secondary" className="mb-2 text-xs" data-testid={`badge-category-${item.category.toLowerCase()}-${item.id}`}>
                        {item.category}
                      </Badge>
                      <h4 className="font-semibold text-sm text-foreground mb-2 line-clamp-2" data-testid={`heading-news-title-${item.id}`}>
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span data-testid={`text-news-date-${item.id}`}>{formatDate(item.date)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
