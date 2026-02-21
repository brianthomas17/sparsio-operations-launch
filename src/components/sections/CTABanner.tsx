import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
            Ready to get your operations under control?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Let's talk about what's not working and build something that does.
          </p>
          <a
            href="mailto:hello@sparsiodesign.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-7 py-3.5 text-base font-semibold text-primary hover:bg-primary-foreground/90 transition-colors group"
          >
            Let's Talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
