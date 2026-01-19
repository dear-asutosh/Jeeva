import { Check, Phone, Sparkles, Activity } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const Solution = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-Time Bed Status",
      description: "See live availability across all partner hospitals instantly",
      color: "success",
      illustration: (
        <svg viewBox="0 0 300 300" className="w-full h-auto">
          {/* Isometric Hospital Bed */}
          <g transform="translate(150, 100)">
            {/* Bed base */}
            <path
              d="M -60,-20 L 60,-20 L 60,20 L -60,20 Z"
              fill="hsl(var(--success) / 0.2)"
              stroke="hsl(var(--success))"
              strokeWidth="2"
            />
            {/* Bed pillow */}
            <rect x="-50" y="-35" width="100" height="15" rx="4" fill="hsl(var(--success) / 0.3)" />
            {/* Radio waves */}
            <circle cx="0" cy="-60" r="15" stroke="hsl(var(--success))" strokeWidth="2" fill="none" opacity="0.8" />
            <circle cx="0" cy="-60" r="25" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="0" cy="-60" r="35" stroke="hsl(var(--success))" strokeWidth="1" fill="none" opacity="0.3" />
          </g>
          
          {/* Live indicator */}
          <g transform="translate(150, 220)">
            <rect x="-60" y="0" width="120" height="40" rx="8" fill="hsl(var(--success) / 0.1)" stroke="hsl(var(--success))" strokeWidth="2" />
            <text x="0" y="25" textAnchor="middle" fill="hsl(var(--success))" fontSize="14" fontWeight="bold">
              Live: 50 beds
            </text>
          </g>
        </svg>
      ),
    },
    {
      icon: Check,
      title: "Color-Coded Status",
      description: "Green for available, yellow for limited, red for full—know at a glance",
      color: "warning",
      illustration: (
        <svg viewBox="0 0 600 250" className="w-full h-auto">
          {/* Hospital 1 - Green */}
          <g transform="translate(80, 50)">
            <rect x="0" y="50" width="80" height="120" rx="8" fill="hsl(var(--success) / 0.1)" stroke="hsl(var(--success))" strokeWidth="2.5" />
            <circle cx="40" cy="30" r="15" fill="hsl(var(--success))" />
            <text x="40" y="200" textAnchor="middle" fill="hsl(var(--success))" fontSize="14" fontWeight="bold">
              Available
            </text>
          </g>
          
          {/* Hospital 2 - Yellow */}
          <g transform="translate(260, 50)">
            <rect x="0" y="50" width="80" height="120" rx="8" fill="hsl(var(--warning) / 0.1)" stroke="hsl(var(--warning))" strokeWidth="2.5" />
            <circle cx="40" cy="30" r="15" fill="hsl(var(--warning))" />
            <text x="40" y="200" textAnchor="middle" fill="hsl(var(--warning))" fontSize="14" fontWeight="bold">
              Limited
            </text>
          </g>
          
          {/* Hospital 3 - Red */}
          <g transform="translate(440, 50)">
            <rect x="0" y="50" width="80" height="120" rx="8" fill="hsl(var(--danger) / 0.1)" stroke="hsl(var(--danger))" strokeWidth="2.5" />
            <circle cx="40" cy="30" r="15" fill="hsl(var(--danger))" />
            <text x="40" y="200" textAnchor="middle" fill="hsl(var(--danger))" fontSize="14" fontWeight="bold">
              Full
            </text>
          </g>
        </svg>
      ),
    },
    {
      icon: Phone,
      title: "One-Tap Calling",
      description: "Connect directly to the hospital with a single tap—no searching for numbers",
      color: "primary",
      illustration: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Phone */}
          <g transform="translate(100, 100)">
            <rect x="-25" y="-40" width="50" height="80" rx="8" fill="white" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <circle cx="0" cy="25" r="8" fill="hsl(var(--primary))" />
          </g>
          
          {/* Arrow */}
          <path d="M 135 100 L 185 100" stroke="hsl(var(--primary))" strokeWidth="3" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          
          {/* Hospital */}
          <g transform="translate(270, 100)">
            <rect x="-30" y="-40" width="60" height="80" rx="8" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary))" strokeWidth="2.5" />
            <path d="M -10,-25 L 10,-25 M 0,-35 L 0,-15" stroke="hsl(var(--danger))" strokeWidth="3" strokeLinecap="round" />
          </g>
          
          {/* Success checkmark */}
          <circle cx="300" cy="60" r="20" fill="hsl(var(--success))" />
          <path d="M 293 60 L 297 65 L 307 52" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      icon: Sparkles,
      title: "AI Predictions",
      description: "Get insights on bed availability trends to plan ahead",
      color: "accent",
      illustration: (
        <svg viewBox="0 0 500 300" className="w-full h-auto">
          {/* Chart background */}
          <rect x="50" y="50" width="400" height="200" rx="8" fill="white" stroke="hsl(var(--border))" strokeWidth="1" />
          
          {/* Prediction line */}
          <path
            d="M 80,180 L 150,160 L 220,140 L 290,150 L 360,170 L 420,190"
            stroke="hsl(var(--success))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Confidence interval */}
          <path
            d="M 80,180 L 150,155 L 220,135 L 290,145 L 360,165 L 420,185 L 420,195 L 360,175 L 290,155 L 220,145 L 150,165 L 80,180 Z"
            fill="hsl(var(--success) / 0.2)"
          />
          
          {/* Sparkles */}
          <g fill="hsl(var(--warning))">
            <circle cx="150" cy="160" r="4" />
            <circle cx="220" cy="140" r="4" />
            <circle cx="290" cy="150" r="4" />
            <circle cx="360" cy="170" r="4" />
          </g>
          
          {/* Labels */}
          <text x="80" y="270" fontSize="12" fill="hsl(var(--muted-foreground))">Now</text>
          <text x="360" y="270" fontSize="12" fill="hsl(var(--muted-foreground))">+3 hours</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Check className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            JEEVA: Your Emergency Healthcare Companion
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time hospital bed tracking that transforms chaos into clarity, helping families find care when every second counts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover-lift border-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${feature.color}/10`}
                >
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
              
              <div className="bg-muted/30 rounded-xl p-4">
                {feature.illustration}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
