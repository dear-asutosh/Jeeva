import { useEffect, useState } from "react";

const ProblemSection = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setPercentage(current);
        if (current >= 64) clearInterval(interval);
      }, 30);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="w-16 h-1 bg-destructive mx-auto mb-8"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            The Reality We're Changing
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* 64% Shortage Progress Ring */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64">
                <svg className="transform -rotate-90 w-64 h-64">
                  {/* Background circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    stroke="#ef4444"
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 112}`}
                    strokeDashoffset={`${2 * Math.PI * 112 * (1 - percentage / 100)}`}
                    className="transition-all duration-1000 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-6xl font-bold text-red-500">{percentage}%</p>
                  <p className="text-sm text-gray-500 mt-2">Shortage</p>
                </div>
              </div>
              <p className="text-lg text-center mt-6 text-gray-600">
                Bed shortage in Odisha
              </p>
            </div>

            {/* 30M People Impact Visualization */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-10 gap-2 mb-6">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm transition-all duration-500 ${i < percentage ? 'bg-red-500' : 'bg-gray-200'
                      }`}
                    style={{ transitionDelay: `${i * 10}ms` }}
                  />
                ))}
              </div>
              <p className="text-5xl font-bold mb-2">30M</p>
              <p className="text-lg text-muted-foreground text-center">
                People affected by bed shortage
              </p>
            </div>
          </div>

          {/* Hospital Journey Map */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 mb-12 shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">The Frustrating Journey</h3>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
              {/* Path line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 opacity-30"></div>

              {[
                { icon: "🚑", label: "Accident", time: "0 min", bgColor: "bg-red-500", textColor: "text-white" },
                { icon: "❓", label: "Confused", time: "5 min", bgColor: "bg-red-400", textColor: "text-white" },
                { icon: "❌", label: "Hospital 1 Full", time: "20 min", bgColor: "bg-orange-500", textColor: "text-white" },
                { icon: "❌", label: "Hospital 2 Full", time: "35 min", bgColor: "bg-orange-400", textColor: "text-white" },
                { icon: "✅", label: "Finally Found", time: "45 min", bgColor: "bg-green-500", textColor: "text-white" },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center z-10 animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center text-2xl mb-2 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <p className="font-semibold text-sm text-center text-gray-800">{step.label}</p>
                  <p className="text-xs text-gray-600">{step.time}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-xl font-bold text-red-600">
              Total wasted time: 45+ minutes
            </p>
          </div>

          {/* Final Message */}
          <div className="text-center space-y-6">
            <p className="text-xl font-medium">Lives lost to preventable delays.</p>
          </div>

          <div className="mt-12">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              JEEVA ends this uncertainty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
