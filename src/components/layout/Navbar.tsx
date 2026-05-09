import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-foreground hover:text-foreground/80 transition-colors">
          Ganesh Kaparapu
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Nav would go here if needed, keeping it simple for now */}
        <div className="md:hidden">
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
