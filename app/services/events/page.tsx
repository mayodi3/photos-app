import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  Music,
  Utensils,
  Camera,
  Gift,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function EventsService() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3" /> Event Management Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Image
                  src="/example.jpg"
                  alt="Event Management Service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Create Unforgettable Experiences
                </h2>
                <p className="mb-6">
                  Maphotos specializes in creating memorable experiences for all
                  types of events. Our expert team handles every detail,
                  ensuring your event is a resounding success.
                </p>
                <h3 className="text-xl font-semibold mb-2">
                  We Manage All Types of Events:
                </h3>
                <ul className="list-none mb-6">
                  <li className="flex items-center mb-2">
                    <Users className="mr-2" /> Weddings
                  </li>
                  <li className="flex items-center mb-2">
                    <Music className="mr-2" /> Corporate Events
                  </li>
                  <li className="flex items-center mb-2">
                    <Utensils className="mr-2" /> Galas and Fundraisers
                  </li>
                  <li className="flex items-center mb-2">
                    <Gift className="mr-2" /> Birthday Parties
                  </li>
                  <li className="flex items-center mb-2">
                    <Camera className="mr-2" /> Product Launches
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link href="/book/events" className="flex items-center">
                    Plan Your Event <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Event Planning Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Essential", guests: 50, price: 1500 },
                { name: "Deluxe", guests: 100, price: 3000 },
                { name: "Premium", guests: 200, price: 5000 },
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
                      <Users className="mr-2" /> Up to {package_info.guests}{" "}
                      guests
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Event planning and
                      coordination
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Venue selection
                      assistance
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> Vendor management
                    </li>
                    <li className="flex items-center mb-2">
                      <CheckCircle2 className="mr-2" /> On-site coordination
                    </li>
                  </ul>
                  <p className="text-2xl font-bold mb-4">
                    ${package_info.price}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={`/book/events?package=${package_info.name.toLowerCase()}`}
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
              Our Event Portfolio
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <Image
                    src={`/example.jpg`}
                    alt={`Event Portfolio Image ${i}`}
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
