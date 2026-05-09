import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center sm:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground max-w-md">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="mailto:Ganesh.Kaparapu@infinite.com"
            className="flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Ganesh.Kaparapu@infinite.com
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Germantown, MD
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ganesh Kaparapu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
