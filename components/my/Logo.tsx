import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.svg"} alt="logo" width={180} height={150} />
    </Link>
  );
};

export default Logo;
