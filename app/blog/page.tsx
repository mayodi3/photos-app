"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { databases } from "@/lib/appwrite";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BlogPost = {
  $id: string;
  title: string;
  excerpt: string;
  date: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  async function fetchBlogPosts() {
    try {
      const response = await databases.listDocuments(
        'your-database-id',
        'blog-posts-collection-id'
      )
      setPosts(response.documents as unknown as BlogPost[])
    } catch (error) {
      console.error('Error fetching blog posts', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Blog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {posts.map((post) => ( */}
        {posts.map((post) => (
          <motion.div
            key={post.$id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/blog/${post.$id}`}>
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
