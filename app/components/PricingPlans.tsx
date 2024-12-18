import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: 199,
      features: [
        "2-hour photo session",
        "50 edited digital photos",
        "Online gallery",
        "Print release",
      ],
    },
    {
      name: "Premium",
      price: 399,
      features: [
        "4-hour photo session",
        "100 edited digital photos",
        "Online gallery",
        "Print release",
        "10 printed 8x10 photos",
      ],
    },
    {
      name: "Ultimate",
      price: 699,
      features: [
        "Full-day photo session",
        "200 edited digital photos",
        "Online gallery",
        "Print release",
        "20 printed 8x10 photos",
        "Custom photo album",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="mb-16 px-3"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`text-center ${index === 1 ? "border-primary" : ""}`}
          >
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">${plan.price}</p>
              <ul className="text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
