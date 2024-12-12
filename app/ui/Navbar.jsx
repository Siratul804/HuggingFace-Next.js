import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              HugNex
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/HugText"
              className="text-muted-foreground hover:text-primary"
            >
              HugText
            </Link>
            <Link
              href="/HugImg"
              className="text-muted-foreground hover:text-primary"
            >
              HugImg
            </Link>
            <Link
              href="/HugVideo"
              className="text-muted-foreground hover:text-primary"
            >
              HugVideo
            </Link>
            <Link
              href="/HugVoice"
              className="text-muted-foreground hover:text-primary"
            >
              HugVoice
            </Link>
          </nav>
          <div className="flex items-center justify-between">
            <Link
              href="/Docs"
              className="text-muted-foreground hover:text-primary px-4 sm:px-6 lg:px-8"
            >
              Docs
            </Link>
            <Link
              href="/Contact"
              className="text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
