const InstantVisualStatus = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hospital Comparison Graphic */}
          <div className="bg-gradient-to-b from-secondary/30 to-background rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-12 text-center">Instant Visual Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: "Available",
                  beds: 50,
                  totalCount: 50,
                  styles: {
                    border: "border-success",
                    bg: "bg-success",
                    bgLight: "bg-success/10",
                    bgVeryLight: "bg-success/30",
                    text: "text-success"
                  }
                },
                {
                  label: "Limited",
                  beds: 5,
                  totalCount: 5,
                  styles: {
                    border: "border-warning",
                    bg: "bg-warning",
                    bgLight: "bg-warning/10",
                    bgVeryLight: "bg-warning/30",
                    text: "text-warning"
                  }
                },
                {
                  label: "Full",
                  beds: 0,
                  totalCount: 0,
                  styles: {
                    border: "border-destructive",
                    bg: "bg-destructive",
                    bgLight: "bg-destructive/10",
                    bgVeryLight: "bg-destructive/30",
                    text: "text-destructive"
                  }
                },
              ].map((status, i) => (
                <div key={i} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                  {/* Hospital building */}
                  <div className={`w-32 h-40 ${status.styles.bgLight} border-4 ${status.styles.border} rounded-lg mb-4 relative`}>
                    <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${status.styles.bg} animate-pulse-soft`}></div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {Array.from({ length: 9 }).map((_, j) => (
                        <div key={j} className={`w-6 h-6 ${status.styles.bgVeryLight} rounded`}></div>
                      ))}
                    </div>
                  </div>

                  <p className={`text-2xl font-bold ${status.styles.text} mb-2`}>{status.label}</p>
                  <p className="text-4xl font-bold mb-2">{status.beds}</p>
                  <p className="text-sm text-muted-foreground">beds available</p>

                  {/* Bed indicators */}
                  <div className="flex flex-wrap gap-1 mt-4 justify-center max-w-[150px]">
                    {Array.from({ length: 50 }).map((_, j) => (
                      <div
                        key={j}
                        className={`w-2 h-2 rounded-sm ${j < status.totalCount ? status.styles.bg : 'bg-muted'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantVisualStatus;
