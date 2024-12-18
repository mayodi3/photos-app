"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Camera, Calendar, Palette, Star, ArrowRight } from "lucide-react";
// import L from "leaflet"; // Import Leaflet
import { PricingPlans } from "./components/PricingPlans";
import { FAQ } from "./components/FAQ";
import { ProcessSection } from "./components/ProcessSection";
import { WhyChooseUs } from "./components/WhyChooseUs";

const MapComponent = dynamic(() => import("@/app/components/MapComponent"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function Home() {
  useEffect(() => {
    let L; // Declare Leaflet locally
    if (typeof window !== "undefined") {
      // Perform dynamic import
      import("leaflet").then((module) => {
        L = module.default;

        // This is needed to fix a bug with Leaflet's icons
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "/leaflet/marker-icon-2x.png",
          iconUrl: "/leaflet/marker-icon.png",
          shadowUrl: "/leaflet/marker-shadow.png",
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Capture Your Moments with Maphotos
                </h1>
                <p className="text-xl mb-6">
                  Professional photography, seamless event management, and
                  creative branding solutions.
                </p>
                <Button asChild size="lg">
                  <Link href="#" className="flex items-center">
                    Explore Our Services <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/example.jpg"
                  alt="Maphotos Services"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Photography",
                  icon: Camera,
                  image: "/example.jpg",
                },
                {
                  name: "Event Management",
                  icon: Calendar,
                  image: "/example.jpg",
                },
                { name: "Branding", icon: Palette, image: "/example.jpg" },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <service.icon className="mr-2" /> {service.name}
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Button asChild variant="outline">
                      <Link
                        href={`/services/${service.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center"
                      >
                        Learn More <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />
        <WhyChooseUs />

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                    <Star className="text-yellow-400" />
                  </div>
                  <p className="mb-4">
                    &quot;Maphotos exceeded our expectations. Their attention to
                    detail and creativity made our event truly special.&quot;
                  </p>
                  <div className="flex items-center">
                    <Image
                      src="/example.jpg"
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="rounded-full mr-3 w-[40px] h-[40px]"
                    />
                    <p className="font-semibold">Happy Client {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingPlans />
        <FAQ />
        {/* Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Find Us</h2>
            <div className="h-[400px]">
              <MapComponent />
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
