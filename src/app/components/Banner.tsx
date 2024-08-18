import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative mt-2 h-[250px] w-[100%] md:h-[500px]">
      <Image
        src="https://pbs.twimg.com/media/FqOVJqtWcAckzai.jpg:large"
        fill={true}
        alt="Picture of the author"
        className="w-full object-contain md:object-cover "
      />
    </div>
  );
};

export default Banner;
