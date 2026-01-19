const HowItWorksSection = () => {
  const steps = [
    { icon: "🚨", label: "Emergency Happens", time: "1 sec" },
    { icon: "📱", label: "Open JEEVA", time: "3 secs" },
    { icon: "📍", label: "Enter Location", time: "5 secs" },
    { icon: "🟢", label: "See Beds", time: "10 secs" },
    { icon: "✅", label: "Call & Go", time: "15 secs" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works in Seconds
            </h2>
            <p className="text-xl text-muted-foreground">
              From emergency to hospital bed in under 15 seconds
            </p>
          </div>

          {/* 5-Step Journey */}
          <div className="relative">
            {/* Timeline Bar */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-primary/20 hidden md:block">
              <div className="h-full bg-primary w-full animate-[scale-in_2s_ease-out]" style={{transformOrigin: "left"}}></div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Circle with Icon */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center text-3xl md:text-4xl mb-4 shadow-lg relative z-10">
                    {step.icon}
                  </div>

                  {/* Label */}
                  <p className="font-semibold mb-2">{step.label}</p>

                  {/* Time */}
                  <p className="text-sm text-muted-foreground">{step.time}</p>

                  {/* Arrow (desktop only, not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full">
                      <svg width="20" height="20" className="absolute -right-2 -top-2">
                        <path d="M 0 10 L 15 10 L 10 5 M 15 10 L 10 15" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Timeline */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* Without JEEVA */}
            <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-destructive">Without JEEVA</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold">0</div>
                  <span className="text-muted-foreground">Accident</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-xs font-bold">5</div>
                  <span className="text-muted-foreground">Search online</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/30 flex items-center justify-center text-xs font-bold">15</div>
                  <span className="text-muted-foreground">Hospital 1 ❌</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/40 flex items-center justify-center text-xs font-bold">30</div>
                  <span className="text-muted-foreground">Hospital 2 ❌</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center text-xs font-bold text-white">45</div>
                  <span className="font-semibold">Hospital 3 ✓</span>
                </div>
              </div>
              <p className="mt-6 text-2xl font-bold text-destructive">Total: 45 minutes</p>
            </div>

            {/* With JEEVA */}
            <div className="bg-success/5 border-2 border-success/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-success">With JEEVA</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-xs font-bold">0</div>
                  <span className="text-muted-foreground">Accident</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/40 flex items-center justify-center text-xs font-bold">10s</div>
                  <span className="text-muted-foreground">Open app</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/60 flex items-center justify-center text-xs font-bold">20s</div>
                  <span className="text-muted-foreground">See available beds</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/80 flex items-center justify-center text-xs font-bold">25s</div>
                  <span className="text-muted-foreground">Call hospital</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-xs font-bold text-white">11</div>
                  <span className="font-semibold">Reach hospital ✓</span>
                </div>
              </div>
              <p className="mt-6 text-2xl font-bold text-success">Total: 11 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
