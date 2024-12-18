import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Camera, Calendar, Palette } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    { category: "Photography", icon: Camera, items: [1, 2, 3, 4] },
    { category: "Events", icon: Calendar, items: [5, 6, 7, 8] },
    { category: "Branding", icon: Palette, items: [9, 10, 11, 12] },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Our Portfolio
            </h1>
            <p className="text-xl text-center mb-12">
              Explore our diverse range of projects across photography, event
              management, and branding.
            </p>

            {portfolioItems.map((category) => (
              <div key={category.category} className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <category.icon className="mr-2" /> {category.category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <Image
                        src={`/example.jpg`}
                        alt={`${category.category} Portfolio Item ${item}`}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="secondary">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
