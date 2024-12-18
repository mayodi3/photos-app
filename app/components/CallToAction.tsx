import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, ChevronRight } from "lucide-react";

export function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="text-center bg-primary text-primary-foreground rounded-lg p-12"
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready to Capture Your Moments?
      </h2>
      <p className="text-xl mb-8">
        Let&apos;s create beautiful memories together. Book your session now!
      </p>
      <Link href="/booking">
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
          Book Your Session
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </motion.section>
  );
}
