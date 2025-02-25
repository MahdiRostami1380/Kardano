import Blog from "./Blog";

export default function Blogs() {
  const blogs = [{}, {}, {}, {}];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {blogs.map((blog, index) => (
        <Blog key={index} />
      ))}
    </div>
  );
}
