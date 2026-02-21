import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-6">
              Hi, I'm the person behind Sparsio Design.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started Sparsio Design because I kept seeing the same thing — smart business
                owners buried in spreadsheets and manual processes that shouldn't exist anymore.
              </p>
              <p>
                I build practical, custom operations systems using tools like Airtable that fit how
                your business actually works. No bloated software, no one-size-fits-all templates.
              </p>
              <p>
                My approach is simple: understand your business first, then build a system you'll
                actually use. Every project is hands-on, collaborative, and designed to make your
                day-to-day easier from day one.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            {/* Photo placeholder */}
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl bg-muted border border-border flex items-center justify-center">
              <div className="text-center">
                <User size={48} className="text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Photo placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
