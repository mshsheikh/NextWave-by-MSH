"use client";

import Image from "next/image";
import Card from "./components/Card";
import { displayData } from "@/Data/displayData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function HomePage() {
  return (
    <div className="md:py-24 py-12">
      <div className="flex justify-center mb-8">
        <Image
          src="/nextwavebymsh-page.png"
          alt="NextWave Logo"
          width={450}
          height={450}
          className="rounded-md"
        />
      </div>

      <h2 className="md:text-5xl text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#191f37] via-[#0459ba] to-[#0784ef]">
        Your Trusted Partner in Reading and Discovery!
      </h2>

      <p className="text-lg text-center text-gray-700 mb-4">
        This is a place where we share simple ideas, helpful tips, and fun
        stories.
        <br /> Whether you’re here to learn, get inspired, or just enjoy a good
        read, you’re in the right spot.
      </p>
      <p className="text-lg text-center text-gray-700">
        Take a look around, and check out some posts.
        <br />
        Let’s explore together!
      </p>

      <br />
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="px-4"
      >
        {displayData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card
              image={data.image}
              title={data.title}
              category={data.category}
              date={data.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
