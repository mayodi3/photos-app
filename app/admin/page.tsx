"use client";

import { useState, useEffect } from "react";
import { databases } from "@/lib/appwrite";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "../contexts/AuthContext";

type Booking = {
  $id: string;
  userId: string;
  sessionType: string;
  date: string;
  status: string;
};

type Customer = {
  $id: string;
  name: string;
  email: string;
  phone: string;
};

export default function AdminDashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress] = useState(0);

  useEffect(() => {
    if (user) {
      fetchBookings();
      fetchCustomers();
    }
  }, [user]);

  async function fetchBookings() {
    try {
      const response = await databases.listDocuments(
        "your-database-id",
        "bookings-collection-id"
      );
      setBookings(response.documents as unknown as Booking[]);
    } catch (error) {
      console.error("Error fetching bookings", error);
    }
  }

  async function fetchCustomers() {
    try {
      const response = await databases.listDocuments(
        "your-database-id",
        "customers-collection-id"
      );
      setCustomers(response.documents as unknown as Customer[]);
    } catch (error) {
      console.error("Error fetching customers", error);
    }
  }

  // async function handleFileUpload(e: React.FormEvent) {
  //   e.preventDefault();
  //   if (!selectedFile) return;

  //   try {
  //     const upload = await storage.createFile(
  //       "your-bucket-id",
  //       "unique()",
  //       selectedFile,
  //       [
  //         // Add permissions if needed
  //       ],
  //       (progress) => {
  //         setUploadProgress(
  //           Math.round((progress.loaded / progress.total) * 100)
  //         );
  //       }
  //     );
  //     console.log("File uploaded successfully", upload);
  //     // Reset form and show success message
  //   } catch (error) {
  //     console.error("Error uploading file", error);
  //     // Show error message
  //   }
  // }

  if (!user) {
    return <div>Access denied. Please log in as an admin.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Admin Dashboard
      </motion.h1>
      <Tabs defaultValue="bookings">
        <TabsList>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="upload">Upload Photos</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Session Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.$id}>
                  <TableCell>{booking.$id}</TableCell>
                  <TableCell>{booking.userId}</TableCell>
                  <TableCell>{booking.sessionType}</TableCell>
                  <TableCell>
                    {new Date(booking.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{booking.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="customers">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.$id}>
                  <TableCell>{customer.$id}</TableCell>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="upload">
          <form
            // onSubmit={handleFileUpload}
            className="space-y-4"
          >
            <Input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              accept="image/*"
            />
            <Button type="submit" disabled={!selectedFile}>
              Upload Photo
            </Button>
            {uploadProgress > 0 && (
              <progress value={uploadProgress} max="100" />
            )}
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
