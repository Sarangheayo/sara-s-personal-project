import { usePhotos } from "@/hooks/use-photos";
import { PhotoCard } from "@/components/PhotoCard";
import { Lightbox } from "@/components/Lightbox";
import { useState } from "react";
import { Photo } from "@shared/schema";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Gallery() {
  const { data: photos, isLoading, error } = usePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center space-y-4">
          <p className="text-destructive font-medium">Unable to load gallery</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-sm underline hover:text-muted-foreground transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground"
          >
            Selected Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            A curated collection of moments captured in monochrome.
          </motion.p>
        </div>

        {/* Masonry-style grid using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos?.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={setSelectedPhoto}
            />
          ))}
        </div>

        {photos?.length === 0 && (
          <div className="h-64 flex flex-col items-center justify-center text-muted-foreground border border-dashed rounded-lg">
            <p>No photos uploaded yet.</p>
          </div>
        )}
      </main>

      <Lightbox 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </div>
  );
}
