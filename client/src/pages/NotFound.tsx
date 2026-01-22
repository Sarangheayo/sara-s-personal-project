import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-12 w-12 text-muted-foreground opacity-20" />
        </div>
        
        <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground">
          404 Not Found
        </h1>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="pt-6">
          <Link href="/">
            <a className="inline-flex h-10 items-center justify-center rounded-none border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
