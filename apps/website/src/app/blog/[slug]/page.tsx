import { notFound } from "next/navigation";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { placeholderBlogs } from "@/app/lib/placeholder-data";
import { Blog } from "@/app/lib/definitions";
import Image from "next/image";
import { GetServerSidePropsContext  } from 'next';

type BlogPostProps = {
    params: {
      slug: string;
    };
};

export default function BlogPost({ params }: BlogPostProps) {
    const blog: Blog | undefined = placeholderBlogs.find((post) => post.slug === params.slug);

  if (!blog) return notFound(); // Show 404 if not found

  return (
    <div>
        <Header/>
        <div className="my-24 m-auto max-w-6xl px-6 max-sm:px-3">
            <div className="py-6">
              <div className="flex-col justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl font-medium border-l-4 border-[#6da446] pl-3">{blog.title}</h3>
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
              <div className="rounded-2xl bg-[#ebebeb] dark:bg-[#363636] p-6">
                  <p>{blog.content}</p>
              </div>
            </div>
           
        </div>
        <Footer/>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { slug } = context.params as { slug: string };  // Extract the slug from the context
  
    // If you're fetching data from an API or database, you would do that here instead of using placeholder data.
    const blog = placeholderBlogs.find((post) => post.slug === slug);
  
    if (!blog) {
      return { notFound: true }; // Show 404 if not found
    }
  
    return {
      props: {
        params: { slug },
      },
    };
  }