import React from "react";
import CardsAll from "../components/CardsAll";
import { displayData2 } from "@/Data/displayData";

const Blog = () => {
  return (
    <div className="md:py-24 py-12">
      <h1 className="md:text-5xl text-4xl font-bold text-center Heading mb-20">
        Latest Blogs
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-auto px-4">
        {displayData2.map((data, index) => (
          <CardsAll
            key={index}
            image={data.image}
            title={data.title}
            category={data.category}
            date={data.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
