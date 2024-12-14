import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="bg-background  flex h-screen ">
      <div className="container m-auto px-4 sm:px-6 lg:px-8  ">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Welcome to HugNext
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Harness the power of Next.js and Hugging Face. Explore a suite of
            AI-driven tools and services to enhance your web development
            capabilities. Discover cutting-edge features and services tailored
            to your needs.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/HugText" className="text-2xl font-bold text-primary">
                <Button size="lg">Get started</Button>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/" className="text-2xl font-bold text-primary">
                <Button variant="outline" size="lg">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
