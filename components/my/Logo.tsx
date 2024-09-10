import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex gap-x-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={46} height={40} />
        <p className="font-bold text-xl">ZD-chat</p>
      </div>
    </Link>
  );
};

export default Logo;
