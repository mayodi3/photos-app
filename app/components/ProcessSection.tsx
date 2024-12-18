import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Book Your Session",
      description: "Choose your package and select a date that works for you.",
    },
    {
      number: 2,
      title: "Photo Shoot",
      description:
        "Our professional photographer captures your special moments.",
    },
    {
      number: 3,
      title: "Editing & Retouching",
      description:
        "We carefully edit and enhance your photos for the best results.",
    },
    {
      number: 4,
      title: "Review & Delivery",
      description: "Preview your photos and receive the final edited images.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mb-16 px-3"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
      <div className="flex flex-col md:flex-row justify-between items-center items-start">
        {steps.map((step, index) => (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 2,
              duration: 2,
              bounce: 0.5,
              type: "spring",
            }}
            key={index}
            className="flex-1 text-center mb-8 md:mb-0"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
