import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  process: z.string().trim().min(1, "Please describe the process you'd like to improve").max(2000),
  notARobot: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you're not a robot" }),
  }),
});

type ContactForm = z.infer<typeof contactSchema>;

type FormState = "banner" | "form" | "success";

const CTABanner = () => {
  const [formState, setFormState] = useState<FormState>("banner");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", process: "", notARobot: undefined as unknown as true },
  });

  const notARobot = watch("notARobot");

  const openForm = () => setFormState("form");

  useEffect(() => {
    const handler = () => setFormState("form");
    window.addEventListener("open-contact-form", handler);
    return () => window.removeEventListener("open-contact-form", handler);
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.phone) formData.append("phone", data.phone);
      formData.append("process", data.process);
      // Honeypot field for spam protection
      formData.append("_honey", "");
      // Disable Formsubmit captcha (we have our own checkbox)
      formData.append("_captcha", "false");
      formData.append("_subject", `New inquiry from ${data.name}`);

      const res = await fetch("https://formsubmit.co/ajax/hello@sparsiodesign.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setFormState("success");
      }
    } catch {
      // silently fail — user can retry
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          {formState === "banner" && (
            <motion.div
              key="banner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6">
                Ready to get your operations under control?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
                Let's talk about what's not working and build something that does.
              </p>
              <button
                onClick={openForm}
                className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-7 py-3.5 text-base font-semibold text-primary hover:bg-primary-foreground/90 transition-colors group"
              >
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {formState === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-lg mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-2 text-center">
                Let's Talk
              </h2>
              <p className="text-primary-foreground/70 text-sm text-center mb-8">
                Tell us a little about what you need — we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot — hidden from real users */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-primary-foreground/90">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-sm text-red-300">{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-primary-foreground/90">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-primary-foreground/90">Phone <span className="text-primary-foreground/50">(optional)</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="process" className="text-primary-foreground/90">What process would you like to improve? *</Label>
                  <Textarea
                    id="process"
                    placeholder="Tell us about the workflow or process that's causing headaches…"
                    rows={4}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30 resize-none"
                    {...register("process")}
                  />
                  {errors.process && <p className="text-sm text-red-300">{errors.process.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="notARobot"
                    checked={notARobot === true}
                    onCheckedChange={(checked) => setValue("notARobot", checked === true ? true : undefined as unknown as true, { shouldValidate: true })}
                    className="border-primary-foreground/30 data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary mt-0.5"
                  />
                  <Label htmlFor="notARobot" className="text-primary-foreground/90 text-sm font-normal cursor-pointer">
                    I'm not a robot
                  </Label>
                </div>
                {errors.notARobot && <p className="text-sm text-red-300 -mt-3">{errors.notARobot.message}</p>}

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-7 py-3 text-base font-semibold text-primary hover:bg-primary-foreground/90 transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                    <Send size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormState("banner")}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {formState === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <CheckCircle size={48} className="text-primary-foreground mx-auto mb-5" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                Thanks! We'll be in touch.
              </h2>
              <p className="text-primary-foreground/70 text-base max-w-md mx-auto">
                We've received your message and will get back to you shortly.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CTABanner;
