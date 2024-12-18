import { Button } from "@/components/ui/button";
import { Camera, Calendar, Palette, Link, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
  );
};

export default ServicesSection;
