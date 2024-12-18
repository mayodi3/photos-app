"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Clock,
  Users,
  Building,
  Users2,
  CheckCircle2,
  ArrowRight,
  Calendar,
} from "lucide-react";

export default function PhotographyService() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 flex items-center">
              <Camera className="mr-3" /> Photography Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/example.jpg"
                  alt="Photography Service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Capture Your Special Moments
                </h2>
                <p className="mb-6">
                  At Maphotos, we specialize in capturing life&apos;s most
                  precious moments. Our professional photographers are skilled
                  in various styles and techniques to ensure your memories are
                  preserved beautifully.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  Our Photography Services Include:
                </h3>
                <ul className="list-none mb-6">
                  <li className="flex items-center mb-2">
                    <Users className="mr-2" /> Wedding Photography
                  </li>
                  <li className="flex items-center mb-2">
                    <Users2 className="mr-2" /> Portrait Sessions
                  </li>
                  <li className="flex items-center mb-2">
                    <Calendar className="mr-2" /> Event Coverage
                  </li>
                  <li className="flex items-center mb-2">
                    <Building className="mr-2" /> Commercial Photography
                  </li>
                  <li className="flex items-center mb-2">
                    <Users className="mr-2" /> Family Photoshoots
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/contact" className="flex items-center">
                    Book a Session <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Photography Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", hours: 2, price: 150 },
                { name: "Standard", hours: 4, price: 250 },
                { name: "Premium", hours: 8, price: 450 },
              ].map((package_info) => (
                <div
                  key={package_info.name}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {package_info.name} Package
                  </h3>
                  <ul className="mb-6">
                    <li className="flex items-center mb-2">
                      <Clock className="mr-2" /> {package_info.hours} hours of
                      coverage
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Professional editing
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Online gallery
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> High-resolution images
                    </li>
                  </ul>
                  <p className="text-2xl font-bold mb-4">
                    Ksh {package_info.price}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/book/photography?package=${package_info.name.toLowerCase()}`}
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
              Our Photography Portfolio
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(`/example.jpg`)}
                >
                  <Image
                    src={`/example.jpg`}
                    alt={`Portfolio Image ${i}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary">View Larger</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              src={selectedImage!}
              alt="Enlarged Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Maphotos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
