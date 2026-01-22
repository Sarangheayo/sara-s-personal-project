import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <main className="max-w-3xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr,2fr] gap-12 md:gap-20 items-start">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden bg-secondary/30"
          >
            {/* Unsplash image: Minimalist portrait of a photographer or creative professional */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
              alt="Portrait"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </motion.div>

          {/* Bio Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight">
                About Me
              </h1>
              <div className="w-12 h-[1px] bg-foreground/20" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed font-sans text-lg">
              <p>
                I am a visual storyteller obsessed with light, shadow, and the spaces in between. 
                My work strips away the distraction of color to reveal the raw emotion and structure 
                of the subject.
              </p>
              <p>
                With a background in architecture, I bring a structured yet organic approach to 
                composition. I believe that photography is not just about capturing what you see, 
                but interpreting what you feel.
              </p>
              <p>
                Based in New York City, available for commissions worldwide.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-sm font-medium uppercase tracking-widest mb-4 text-foreground">
                Connect
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    instagram @alexander
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    twitter @alexander
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@alexander.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    hello@alexander.com
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
