"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
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
              className={
                pathname === "/HugText"
                  ? "text-primary"
                  : "text-muted-foreground "
              }
            >
              HugText
            </Link>
            <Link
              href="/LagHug"
              className={
                pathname === "/LagHug"
                  ? "text-primary"
                  : "text-muted-foreground "
              }
            >
              LagHug
            </Link>
            <Link
              href="/HugImg"
              className={
                pathname === "/HugImg"
                  ? "text-primary"
                  : "text-muted-foreground "
              }
            >
              HugImg
            </Link>
            <Link
              href="/HugVideo"
              className={
                pathname === "/HugVideo"
                  ? "text-primary"
                  : "text-muted-foreground "
              }
            >
              HugVideo
            </Link>
            <Link
              href="/HugVoice"
              className={
                pathname === "/HugVoice"
                  ? "text-primary"
                  : "text-muted-foreground "
              }
            >
              HugVoice
            </Link>
          </nav>
          <div className="flex items-center justify-between">
            <Link
              href="/Docs"
              className={
                pathname === "/Docs"
                  ? "text-primary px-4 sm:px-6 lg:px-8"
                  : "text-muted-foreground px-4 sm:px-6 lg:px-8 "
              }
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
