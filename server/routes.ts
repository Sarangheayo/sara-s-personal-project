import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data if empty
  const existingPhotos = await storage.getPhotos();
  if (existingPhotos.length === 0) {
    const seedPhotos = [
      {
        title: "Vintage Camera",
        description: "A classic analog camera captured in natural light.",
        url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
        alt: "Vintage camera on table",
        category: "Equipment"
      },
      {
        title: "Urban Architecture",
        description: "Modern minimalist architecture reaching for the sky.",
        url: "https://images.unsplash.com/photo-1518005052304-a4b16a750387?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern white building",
        category: "Architecture"
      },
      {
        title: "Mountain Landscape",
        description: "Serene mountain peaks touching the clouds.",
        url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        alt: "Mountain landscape",
        category: "Nature"
      },
      {
        title: "City Lights",
        description: "The vibrant life of the city at night.",
        url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
        alt: "City street at night",
        category: "Urban"
      },
      {
        title: "Abstract Shapes",
        description: "Light and shadow playing with geometric forms.",
        url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
        alt: "Abstract geometric pattern",
        category: "Abstract"
      },
      {
        title: "Portrait Study",
        description: "Capturing the emotion in a moment of silence.",
        url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
        alt: "Woman portrait",
        category: "Portrait"
      }
    ];

    for (const photo of seedPhotos) {
      await storage.createPhoto(photo);
    }
  }

  app.get(api.photos.list.path, async (req, res) => {
    const photos = await storage.getPhotos();
    res.json(photos);
  });

  app.get(api.photos.get.path, async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(404).json({ message: "Photo not found" });
    }
    const photo = await storage.getPhoto(id);
    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }
    res.json(photo);
  });

  return httpServer;
}
