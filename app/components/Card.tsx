import { PropsDisplay } from "@/Data/displayData"
import Image from "next/image"
import Link from "next/link"


const Card = ({title, category, date, image}:PropsDisplay) => {
  return (
    <div className='max-w-[330px] overflow-hidden shadow-md  mx-auto'>
      <div className="w-full overflow-hidden ">
      <Link href={`/blog/${title.toLowerCase().replace(/ /g, "-")}`}>
      <Image src={image} alt="" height={2000} width={2000} className="hover:scale-110 transition ease-in duration-200 hover:opacity-50 cursor-pointer"/>
        </Link>
      </div>
      <div className="bg-white p-5">
        <h2 className="text-center font-[600] tracking-widest text-blue-800 mb-4">{category}</h2>
        <h3 className="Heading md:text-4xl  text-2xl font-[500] text-center">{title}</h3>
        
        <p className="text-center text-sm tracking-widest mt-10 mb-5 text-black/60">{date}</p>
        
      </div>
    </div>
  )
}

export default Card