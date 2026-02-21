import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Audit",
    description:
      "We dig into how your business actually runs — your tools, your team, your bottlenecks. No assumptions, just clarity.",
  },
  {
    num: "02",
    icon: Wrench,
    title: "Build",
    description:
      "We design and build a custom system around your real workflows using tools like Airtable — tailored, not templated.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Hand Off",
    description:
      "You get a clean, documented system your team can actually use — plus training so you're never left guessing.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">How It Works</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            A simple, proven process to get your operations running smoothly.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <step.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Step {step.num}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
