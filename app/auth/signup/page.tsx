"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/appwrite";
import { ID, OAuthProvider } from "appwrite";
import { AuthForm } from "@/app/components/AuthForm";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);
      await account.createEmailPasswordSession(email, password);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Failed to sign up. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:3000/dashboard",
        "http://localhost:3000/auth/signup"
      );
    } catch (error) {
      console.error(error);
      setError("Failed to sign up with Google.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <AuthForm
          type="signup"
          onSubmit={handleSignUp}
          onGoogleLogin={handleGoogleLogin}
        />
      </div>
    </div>
  );
}
