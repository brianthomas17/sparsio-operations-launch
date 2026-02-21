import { motion } from "framer-motion";
import { Users, FolderKanban, BarChart3, Cog, FileInput, Workflow } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "CRM & Client Tracking",
    description: "Know where every client stands. Track communications, deals, and follow-ups in one place.",
  },
  {
    icon: FolderKanban,
    title: "Project Management Systems",
    description: "Keep every project on track with clear stages, owners, and deadlines your team can actually follow.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboards",
    description: "See your numbers at a glance. Custom dashboards that show what matters without the noise.",
  },
  {
    icon: Cog,
    title: "Team Workflow Automation",
    description: "Automate the repetitive stuff — notifications, status updates, handoffs — so your team can focus on real work.",
  },
  {
    icon: FileInput,
    title: "Client Intake Portals",
    description: "Onboard new clients smoothly with forms that feed directly into your operations system.",
  },
  {
    icon: Workflow,
    title: "Process Design & SOPs",
    description: "Document and systematize your core processes so your business runs the same way every time.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What We Build</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Custom systems designed around how your business actually operates.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-card p-7 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
