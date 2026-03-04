import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import sparsioLogo from "@/assets/sparsio-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          {/* Logo - mobile only, shown above headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="md:hidden flex justify-center"
          >
            <img src={sparsioLogo} alt="Sparsio logo mark" className="w-[160px] h-auto" />
          </motion.div>

          {/* Left column - 60% */}
          <div className="w-full md:w-[60%]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground"
            >
              Your business has outgrown your systems.
              <br />
              Enterprise software was built for someone else.
              <br />
              We build yours.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Not another SaaS subscription. A custom operational system, built with modern AI, engineered specifically for how your business runs — and where it's going.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("open-contact-form"));
                  }
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-accent transition-colors group"
              >
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right column - 40%, desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex w-[40%] items-center justify-center"
          >
            <img src={sparsioLogo} alt="Sparsio logo mark" className="w-[70%] h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
