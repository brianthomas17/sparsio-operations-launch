import { motion } from "framer-motion";
import { TableProperties, AlertTriangle, EyeOff } from "lucide-react";

const painPoints = [
  {
    icon: TableProperties,
    title: "Drowning in Spreadsheets",
    description:
      "Your data is scattered across spreadsheets that don't talk to each other, making it hard to find anything, track progress, or make confident decisions.",
  },
  {
    icon: AlertTriangle,
    title: "Things Falling Through the Cracks",
    description:
      "Tasks get lost, follow-ups get missed, and clients slip through because there's no system catching what falls.",
  },
  {
    icon: EyeOff,
    title: "No Visibility Into What's Happening",
    description:
      "You can't see the big picture because your data is scattered everywhere. Decisions get made on gut feeling instead of real information.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Sound Familiar?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl bg-card p-8 shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <point.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
