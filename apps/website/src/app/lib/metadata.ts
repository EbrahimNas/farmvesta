import type { Metadata } from "next";
import { placeholderBlogs } from "@/app/lib/placeholder-data";
import { notFound } from "next/navigation";

export async function generateBlogMetadata(slug: string): Promise<Metadata> {
    const post = placeholderBlogs.find((blog) => blog.slug === slug);

    if (!post) {
        notFound(); // If blog not found, return 404
      }

    return {
        title: post.title,
        description: post?.description,
        openGraph: {
            title: post.title,
            description: post?.description,
            url: `https://farmvesta.vercel.app/${post.slug}`,
            siteName: "FarmVesta",
            images: [
                {
                    url: post.image || "/favicon1.png",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            site: "@FarmVesta",
            title: post.title,
            description: post?.description,
            images: [post.image || "/favicon1.png"],
        },
    };
}
