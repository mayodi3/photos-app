"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';
import { account } from '@/lib/appwrite';
import { useRouter } from 'next/navigation';

type User = {
  $id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (phone: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUserStatus();
  }, []);

  async function checkUserStatus() {
    try {
      const session = await account.get();
      setUser(session);
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function login(phone: string) {
    try {
      await account.createSession('unique()', phone);
      await checkUserStatus();
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
    router.push('/');
  }

  const contextValue = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

