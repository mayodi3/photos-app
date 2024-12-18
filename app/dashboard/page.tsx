"use client";

import { Button } from "@/components/ui/button";

export default function Dashboard() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {/* Welcome, {user.name || user.email} */}
        Welcome, User
      </h1>
      <Button
        // onClick={handleLogout}
        className="mb-4"
      >
        Logout
      </Button>

        <div>
          <h2 className="text-xl font-semibold mb-2">Admin Dashboard</h2>
          <ul className="list-disc pl-5">
            <li>Manage Users</li>
            <li>View Bookings</li>
            <li>Update Services</li>
            <li>Manage Content</li>
          </ul>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Customer Dashboard</h2>
          <ul className="list-disc pl-5">
            <li>View My Bookings</li>
            <li>Update Profile</li>
            <li>Leave Reviews</li>
            <li>Contact Support</li>
          </ul>
        </div>
    </div>
  );
}
