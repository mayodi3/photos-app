import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="mb-6">
                  We&apos;d love to hear from you. Please fill out the form below or
                  reach out to us directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3 text-gray-600" />
                    <span>+256 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 text-gray-600" />
                    <span>info@mbaleevents.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 text-gray-600" />
                    <span>123 Main Street, Mbale, Uganda</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {/* Add social media icons here */}
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2" />
                  </Button>
                </form>
              </div>
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
