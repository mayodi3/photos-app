"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";
import {  OAuthProvider } from "appwrite";
import { AuthForm } from "@/app/components/AuthForm";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:3000/dashboard",
        "http://localhost:3000/auth/signin"
      );
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <AuthForm
          type="signin"
          onSubmit={handleSignIn}
          onGoogleLogin={handleGoogleLogin}
        />
      </div>
    </div>
  );
}
