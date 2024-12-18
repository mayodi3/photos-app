import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  Layers,
  PenTool,
  Megaphone,
  Briefcase,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function BrandingService() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 flex items-center">
              <Palette className="mr-3" /> Branding Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/example.jpg"
                  alt="Branding Service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Build a Powerful Brand Identity
                </h2>
                <p className="mb-6">
                  At Maphotos, we help businesses create compelling brand
                  identities that resonate with their target audience. Our
                  branding experts combine creativity with strategy to deliver
                  impactful results.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Our Branding Services Include:
                </h3>
                <ul className="list-none mb-6">
                  <li className="flex items-center mb-2">
                    <Layers className="mr-2" /> Logo Design
                  </li>
                  <li className="flex items-center mb-2">
                    <PenTool className="mr-2" /> Visual Identity Development
                  </li>
                  <li className="flex items-center mb-2">
                    <Megaphone className="mr-2" /> Brand Strategy
                  </li>
                  <li className="flex items-center mb-2">
                    <Briefcase className="mr-2" /> Brand Guidelines
                  </li>
                  <li className="flex items-center mb-2">
                    <Palette className="mr-2" /> Rebranding
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/book/branding" className="flex items-center">
                    Start Your Branding Project <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Branding Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: 1000,
                  description: "Perfect for small businesses",
                },
                {
                  name: "Professional",
                  price: 2500,
                  description: "Ideal for growing companies",
                },
                {
                  name: "Enterprise",
                  price: 5000,
                  description: "Comprehensive solution for large organizations",
                },
              ].map((package_info) => (
                <div
                  key={package_info.name}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {package_info.name} Package
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {package_info.description}
                  </p>
                  <ul className="mb-6">
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Logo design
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Brand guidelines
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Business card design
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Social media assets
                    </li>
                  </ul>
                  <p className="text-2xl font-bold mb-4">
                    ${package_info.price}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/book/branding?package=${package_info.name.toLowerCase()}`}
                      className="flex items-center justify-center"
                    >
                      Select Package <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Branding Portfolio
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/example.jpg`}
                    alt={`Branding Portfolio Image ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Maphotos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
