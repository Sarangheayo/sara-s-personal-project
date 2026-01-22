import { useState } from "react";
import { Photo } from "@shared/schema";
import { motion } from "framer-motion";

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layoutId={`photo-${photo.id}`}
      className="relative group cursor-zoom-in break-inside-avoid mb-6 overflow-hidden"
      onClick={() => onClick(photo)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-auto w-full bg-secondary/30 relative">
        <img
          src={photo.url}
          alt={photo.alt}
          className={`
            w-full h-auto object-cover grayscale-filter
            transition-all duration-700 ease-in-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 to-transparent">
          <p className="text-white text-sm font-medium font-sans tracking-wide">
            {photo.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
