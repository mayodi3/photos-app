import { Button } from "@/components/ui/button";
import { Link, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Capture Your Moments with Maphotos
            </h1>
            <p className="text-xl mb-6">
              Professional photography, seamless event management, and creative
              branding solutions.
            </p>
            <Button asChild size="lg">
              <Link href="/services" className="flex items-center">
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
  );
};

export default HeroSection;
