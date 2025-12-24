import { MapPin, Star, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";

export const LiveDemo = () => {
  const hospitals = [
    {
      name: "CWS Hospital",
      distance: "2 km",
      time: "8 mins",
      beds: 50,
      status: "available",
      rating: 4.8,
      specialties: ["Emergency", "Cardiology", "Radiology"],
    },
    {
      name: "Regional General Hospital",
      distance: "3.5 km",
      time: "12 mins",
      beds: 5,
      status: "limited",
      rating: 4.5,
      specialties: ["Emergency", "Surgery"],
    },
    {
      name: "Hi-Tech Medical Center",
      distance: "4 km",
      time: "15 mins",
      beds: 25,
      status: "available",
      rating: 4.9,
      specialties: ["Emergency", "ICU", "Neurology"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "success";
      case "limited":
        return "warning";
      default:
        return "danger";
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>See It In Action</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Live Hospital Search Demo
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how JEEVA instantly shows you available hospitals near you with real-time bed status.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-border">
            {/* Browser Mockup Header */}
            <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <div className="flex-1 bg-background rounded-lg px-4 py-2 text-sm text-muted-foreground">
                jeeva.care/search
              </div>
            </div>

            {/* Map Area */}
            <div className="relative h-96 bg-gradient-to-br from-primary/5 to-success/5 overflow-hidden">
              {/* Simplified Map Illustration */}
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Background streets */}
                <g stroke="hsl(var(--border))" strokeWidth="2" opacity="0.3">
                  <line x1="0" y1="200" x2="800" y2="200" />
                  <line x1="400" y1="0" x2="400" y2="400" />
                  <line x1="200" y1="0" x2="200" y2="400" />
                  <line x1="600" y1="0" x2="600" y2="400" />
                </g>
                
                {/* User location */}
                <g transform="translate(400, 200)">
                  <circle r="30" fill="hsl(var(--primary) / 0.2)" className="animate-pulse-ring" />
                  <circle r="10" fill="hsl(var(--primary))" />
                  <circle r="4" fill="white" />
                </g>
                
                {/* Hospital markers */}
                {/* Hospital 1 - Green */}
                <g transform="translate(300, 150)">
                  <circle r="20" fill="hsl(var(--success))" opacity="0.9" />
                  <path d="M -6,-6 L 6,-6 M 0,-12 L 0,0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                
                {/* Hospital 2 - Yellow */}
                <g transform="translate(550, 250)">
                  <circle r="20" fill="hsl(var(--warning))" opacity="0.9" />
                  <path d="M -6,-6 L 6,-6 M 0,-12 L 0,0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </g>
                
                {/* Hospital 3 - Green */}
                <g transform="translate(500, 100)">
                  <circle r="20" fill="hsl(var(--success))" opacity="0.9" />
                  <path d="M -6,-6 L 6,-6 M 0,-12 L 0,0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              </svg>
              
              {/* Compass */}
              <div className="absolute top-4 right-4 bg-card rounded-full p-3 shadow-lg">
                <Navigation className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Hospital Cards */}
            <div className="p-6 space-y-4 bg-background">
              {hospitals.map((hospital, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift border-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{hospital.name}</h3>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-warning text-warning" />
                          <span className="font-semibold">{hospital.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {hospital.distance}
                        </span>
                        <span>•</span>
                        <span>{hospital.time} away</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {hospital.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-3 bg-${getStatusColor(hospital.status)}/10 text-${getStatusColor(hospital.status)}`}
                      >
                        <div className={`w-2 h-2 rounded-full bg-${getStatusColor(hospital.status)}`} />
                        {hospital.beds} beds
                      </div>
                      
                      <Button
                        size="lg"
                        className="w-full bg-success hover:bg-success/90"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
