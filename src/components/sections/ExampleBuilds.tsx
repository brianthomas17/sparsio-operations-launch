import { motion } from "framer-motion";

const builds = [
  { title: "Job Tracking System", tag: "Operations" },
  { title: "Client Onboarding Pipeline", tag: "CRM" },
  { title: "Operations Dashboard", tag: "Reporting" },
];

const ExampleBuilds = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            See What's Possible
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            A few examples of systems we've built for small businesses like yours.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Browser frame mockup */}
              <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-border" />
                    <span className="w-3 h-3 rounded-full bg-border" />
                    <span className="w-3 h-3 rounded-full bg-border" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 rounded bg-border/60 max-w-[200px] mx-auto" />
                  </div>
                </div>
                {/* Placeholder content area */}
                <div className="aspect-[4/3] bg-muted/30 flex items-center justify-center p-8">
                  <div className="w-full space-y-3">
                    <div className="h-4 rounded bg-border/40 w-3/4" />
                    <div className="h-4 rounded bg-border/40 w-full" />
                    <div className="h-4 rounded bg-border/40 w-5/6" />
                    <div className="h-20 rounded bg-border/30 w-full mt-4" />
                    <div className="flex gap-3 mt-4">
                      <div className="h-8 rounded bg-primary/15 flex-1" />
                      <div className="h-8 rounded bg-border/30 flex-1" />
                      <div className="h-8 rounded bg-border/30 flex-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  {build.tag}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1">{build.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleBuilds;
