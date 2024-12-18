"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const sessionTypes = [
  { value: "portrait", label: "Portrait Session" },
  { value: "event", label: "Event Coverage" },
  { value: "commercial", label: "Commercial Shoot" },
];

export default function Booking() {
  // const { user } = useAuth();
  const [sessionType, setSessionType] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = async () => {
    // e.preventDefault();
    // if (!user || !sessionType || !date) return;
    // try {
    //   await databases.createDocument(
    //     "your-database-id",
    //     "bookings-collection-id",
    //     "unique()",
    //     {
    //       userId: user.$id,
    //       sessionType,
    //       date: date.toISOString(),
    //       additionalInfo,
    //       status: "pending",
    //     }
    //   );
    //   // Show success message and reset form
    // } catch (error) {
    //   console.error("Booking failed", error);
    //   // Show error message
    // }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Book a Session</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="sessionType"
              className="block text-sm font-medium mb-1"
            >
              Session Type
            </label>
            <Select value={sessionType} onValueChange={setSessionType}>
              <SelectTrigger id="sessionType">
                <SelectValue placeholder="Select a session type" />
              </SelectTrigger>
              <SelectContent>
                {sessionTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Preferred Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !date && "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label
              htmlFor="additionalInfo"
              className="block text-sm font-medium mb-1"
            >
              Additional Information
            </label>
            <Input
              id="additionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Any special requests or details?"
            />
          </div>
          <Button type="submit" className="w-full">
            Book Now
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
