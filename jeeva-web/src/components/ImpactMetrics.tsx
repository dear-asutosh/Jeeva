import { useEffect, useRef, useState } from "react";
import { Heart, Building2, Users, TrendingUp } from "lucide-react";

export const ImpactMetrics = () => {
  const [counts, setCounts] = useState({
    shortage: 0,
    people: 0,
    hospitals: 0,
    lives: 0,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { shortage: 64, people: 30, hospitals: 5, lives: 1000 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        shortage: Math.floor(targets.shortage * progress),
        people: Math.floor(targets.people * progress),
        hospitals: Math.floor(targets.hospitals * progress),
        lives: Math.floor(targets.lives * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const metrics = [
    {
      icon: TrendingUp,
      value: `${counts.shortage}%`,
      label: "Bed Shortage",
      sublabel: "in Odisha",
      color: "danger",
      graphic: (
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="hsl(var(--border))"
            strokeWidth="16"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="hsl(var(--danger))"
            strokeWidth="16"
            fill="none"
            strokeDasharray={`${(counts.shortage / 100) * 502.65} 502.65`}
            className="transform -rotate-90 origin-center transition-all duration-1000"
            style={{ transformOrigin: "100px 100px" }}
          />
        </svg>
      ),
    },
    {
      icon: Users,
      value: `${counts.people}M+`,
      label: "People Impacted",
      sublabel: "across Odisha",
      color: "primary",
      graphic: (
        <div className="grid grid-cols-10 gap-1 w-48 h-48 p-4">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm transition-all duration-300`}
              style={{
                backgroundColor: i < counts.shortage ? "hsl(var(--primary))" : "hsl(var(--border))",
                transitionDelay: `${i * 20}ms`,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      icon: Building2,
      value: `${counts.hospitals}+`,
      label: "Partner Hospitals",
      sublabel: "and growing",
      color: "success",
      graphic: (
        <svg viewBox="0 0 500 300" className="w-full h-auto">
          <g>
            {[1, 2, 3, 4, 5].map((i) => {
              const height = Math.min(((counts.hospitals / 5) * (i + 1)) * 40, (i + 1) * 40);
              return (
                <rect
                  key={i}
                  x={50 + i * 90}
                  y={250 - height}
                  width="60"
                  height={height}
                  rx="8"
                  fill="hsl(var(--success))"
                  className="transition-all duration-1000"
                />
              );
            })}
          </g>
          
          {/* Trend line */}
          <path
            d="M 80,240 L 170,200 L 260,170 L 350,150 L 440,130"
            stroke="hsl(var(--success))"
            strokeWidth="3"
            strokeDasharray="5,5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      ),
    },
    {
      icon: Heart,
      value: `${counts.lives}+`,
      label: "Lives Saved",
      sublabel: "through quick access",
      color: "danger",
      graphic: (
        <div className="relative w-48 h-48 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <Heart
              key={i}
              className="absolute text-danger fill-danger animate-pulse-ring"
              style={{
                width: `${(i + 1) * 20}px`,
                height: `${(i + 1) * 20}px`,
                opacity: 1 - i * 0.2,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the difference JEEVA is making in emergency healthcare across Odisha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center hover-lift border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                {metric.graphic}
              </div>
              
              <div className={`text-5xl font-bold text-${metric.color} mb-2`}>
                {metric.value}
              </div>
              
              <div className="text-xl font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
