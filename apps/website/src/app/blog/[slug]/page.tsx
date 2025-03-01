import { notFound } from "next/navigation";
import Footer from "@/app/components/footer";
import { placeholderBlogs } from "@/app/lib/placeholder-data";
import Image from "next/image";

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    // Await the params to get the slug asynchronously
    const { slug } = await props.params;
  
    // Fetch the blog using the slug
    const blog = placeholderBlogs.find((post) => post.slug === slug);
  
    if (!blog) {
      notFound(); // If blog not found, return 404
    }
  
    return (
      <div>
        <div className="my-24 m-auto max-w-6xl px-6 max-sm:px-3">
          <div className="py-6">
            <div className="flex-col justify-between mb-8">
              <h3 className="text-2xl md:text-3xl font-medium border-l-4 border-[#6da446] pl-3">
                {blog.title}
              </h3>
              <p className="text-gray-500">{blog.date} • {blog.author}</p>
            </div>
  
            <div className="flex justify-center items-center">
              <Image 
                src={blog.image} 
                alt={blog.title}
                width={500}
                height={100}
                className="rounded-2xl mb-8" 
              />
            </div>

            {/* Blog Content */}
            <div className="rounded-2xl bg-[#ebebeb] dark:bg-[#363636] p-6 space-y-4 m-auto max-w-lg">
              <p>{blog.content}</p>
              {blog.content2 && <p>{blog.content2}</p>}
              {blog.content3 && <p>{blog.content3}</p>}
              {blog.content4 && <p>{blog.content4}</p>}
              {blog.content5 && <p>{blog.content5}</p>}
              {blog.content6 && <p>{blog.content6}</p>}
              {blog.content7 && <p>{blog.content7}</p>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }