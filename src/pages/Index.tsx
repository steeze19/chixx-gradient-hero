import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const Index = () => {
  const whatsappLink = "https://chat.whatsapp.com/LYq48GpgMN1ItFMjSou05u?mode=gi_t";

  const handleJoinWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Mesh gradient background */}
      <div className="mesh-bg" />
      
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Ambient glow blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />
      <div className="glow-blob glow-blob-3" />

      {/* Grid lines */}
      <div className="grid-lines" />

      {/* Main Content */}
      <main className="flex min-h-screen items-center justify-center p-6 relative z-10">
        <div className="max-w-lg w-full">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="icon-container">
              <div className="icon-ring" />
              <div className="icon-inner">
                <MessageCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-3"
          >
            <span className="text-white">Win Big.</span>{" "}
            <span className="text-gradient">Every Day.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-white/60 text-base mb-8 font-light"
          >
            Join the WhatsApp group. It's free.
          </motion.p>

          {/* Avatars + members */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="flex -space-x-2.5">
              {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-white/50 font-light">500+ members joined</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="btn-glow-ring" />
            <Button
              size="lg"
              className="relative w-full h-14 text-lg font-bold rounded-2xl bg-whatsapp-green hover:bg-whatsapp-green/90 text-white shadow-[0_0_40px_rgba(37,211,102,0.25)] hover:shadow-[0_0_60px_rgba(37,211,102,0.4)] transition-all duration-500 z-10 group"
              onClick={handleJoinWhatsApp}
            >
              <span className="flex items-center gap-2">
                Join WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-white/25 text-xs mt-10"
          >
            <p>© 2026 Flexoo</p>
          </motion.footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
