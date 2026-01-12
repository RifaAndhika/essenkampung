import BlogCard from "@/components/BlogCard";
import { blog } from "@/data/blog";

export default function Home() {
  return (
    <>
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          Blog & Edukasi
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((item) => (
          <BlogCard key={item.id} />
        ))}
      </div>
    </>
  );
}
