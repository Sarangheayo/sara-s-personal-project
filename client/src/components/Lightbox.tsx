import { Photo } from "@shared/schema";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (photo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [photo]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground/50 hover:text-foreground transition-colors z-[110]"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            layoutId={`photo-${photo.id}`}
            className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-12"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-center max-w-2xl"
            >
              <h2 className="text-xl font-medium tracking-tight mb-2">{photo.title}</h2>
              {photo.description && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {photo.description}
                </p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
