import Image from "next/image"

const Reviews = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image
        src=""
          // src={review.customer.avatar_url}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        {/* <span>{review.customer.display_name}</span> */}
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        {/* {Array.from({ length: review.rating }).map((_, index) => ( */}
          <Image src="/star.png" alt="" key="" width={16} height={16} />
        {/* ))} */}
      </div>
      {/* DESC */}
      {/* {review.heading && <p>{review.heading}</p>} */}
      {/* {review.body && <p>{review.body}</p>} */}
      <div className="">
        {/* {review.media.map((media: any) => ( */}
          <Image
          src=""
            // src={media.url}
            // key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        {/* ))} */}
      </div>
    </div>
  )
}

export default Reviews