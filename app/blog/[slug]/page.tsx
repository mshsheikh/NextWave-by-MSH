import { GetStaticProps, GetStaticPaths } from "next";
import { detailedData } from "@/Data/detailedData"; // Assuming this contains your data

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = detailedData.map((post) => ({
    params: { slug: post.title.toLowerCase().replace(/ /g, "-") },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = detailedData.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === params?.slug
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

const Slug = ({ post }: { post: Post }) => {
  if (!post) {
    return (
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-center text-5xl font-bold">Post Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[1000px] mx-auto md:py-24 py-12">
      {/* Your component content */}
      <h1 className="Heading md:text-5xl text-3xl text-center font-bold">
        {post.heading}
      </h1>
      {/* ... */}
    </div>
  );
};

export default Slug;
