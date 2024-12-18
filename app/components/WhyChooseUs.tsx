import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, Clock, ThumbsUp, Users } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description:
        "We use top-of-the-line cameras and lenses for the best quality.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Receive your edited photos within 5 business days.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our photographers have 10+ years of experience in various styles.",
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction Guarantee",
      description:
        "We'll reshoot or refund if you're not completely satisfied.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mb-16 px-3"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => {
          const Icon = reason.icon; // Extract the component as a variable
          return (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.section>
  );
}
