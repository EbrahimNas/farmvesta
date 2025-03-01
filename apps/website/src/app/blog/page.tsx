import Link from "next/link";
import Footer from "../components/footer";
import { placeholderBlogs } from "../lib/placeholder-data";

export default function BlogPage() {
  return (
    <div >
        <div className="my-24 m-auto max-w-6xl px-6 max-sm:px-3">
           <div className="flex justify-center mb-8">
              <h3 className="text-2xl md:text-3xl font-medium border-l-4 border-[#6da446] pl-3">Blog</h3>
           </div>

            {placeholderBlogs.map((blog, index) => (
                <div key={blog.id} 
                className={`mt-6 pb-4 rounded-3xl p-6 ${index % 2 === 0 ? '' : 'bg-[#ebebeb] dark:bg-[#363636]'}`}
                >
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="italic text-gray-600 dark:text-gray-300">{blog.description}</p>
                    <Link href={`/blog/${blog.slug}`} className="text-[#6da446]">Read More</Link>
                </div>
            ))}
        </div>

        <Footer/>
    </div>
  );
}
