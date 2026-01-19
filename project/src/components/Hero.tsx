import { Button } from "./ui/button";
import { Phone, MapPin } from "lucide-react";
import { EmergencyResponseIllustration } from "./illustrations/HeroIllustrations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-success/5 to-background -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find Available{" "}
              <span className="text-gradient">Hospital Beds</span>{" "}
              in Seconds
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Jeeva is a real-time emergency hospital bed availability platform designed to reduce critical delays when every second counts. Jeeva transforms emergency hospital navigation into rapid, informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <a href="#demo">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Hospitals Near You
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-2 hover-lift">
                <a href="tel:112">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Call
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">30M+</div>
                <div className="text-sm text-muted-foreground">People Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">5+</div>
                <div className="text-sm text-muted-foreground">Partner Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-danger">1000+</div>
                <div className="text-sm text-muted-foreground">Lives Saved</div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative animate-scale-in">
            <EmergencyResponseIllustration />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--muted))" fillOpacity="0.3" />
        </svg>
      </div>
    </section>
  );
};
