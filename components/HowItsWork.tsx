export default function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-24  relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#AFDDFF]"></div>

      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <p className="rounded-full px-4 py-1.5 text-lg font-medium">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Swap Smarter, Study Better — in Just a Few Steps
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>
          {[
            {
              step: "01",
              title: "Create Account",
              description:
                "Join with your email or wallet. No setup hassle — start exploring right away.",
            },
            {
              step: "02",
              title: "Upload & Earn",
              description:
                "Share your handwritten notes or guides. Earn credits instantly on Solana.",
            },
            {
              step: "03",
              title: "Discover & Download",
              description:
                "Use your credits to access high-quality resources from peers across the world.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xl font-bold shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
