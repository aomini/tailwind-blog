import Image from 'next/image'
const BlogCard = (Props) => {

    return (
        <a href="#" className=" ">
            <div className="m-2 p-2 hover:ring-2 ring-black ring-offset-2 outline-none  transition duration-500 aspect-h-4 aspect-w-3 rounded-lg">
                {/* <img src="https://kentcdodds.com/img/image/upload/c_fill,w_560,ar_3:4,q_auto,f_auto,b_rgb:e6e9ee/unsplash/photo-1486338892246-cd25343d5338" className="focus-ring w-full rounded-lg object-cover object-center transition" alt="" /> */}
                <Image src="/eggnest.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={650}
                    className="focus-ring w-full rounded-lg object-cover object-center transition" />
            </div>
            <div className="mx-2 px-2 py-2">

                <h3 className="mt-2 text-gray-500 text-xl font-medium">{Props.blogCardTitle}</h3>
                <h2 className="text-2xl font-medium md:text-3xl text-black dark:text-white mt-4">{Props.blogCardText}</h2>
            </div>
        </a>

    )
}

export default BlogCard
