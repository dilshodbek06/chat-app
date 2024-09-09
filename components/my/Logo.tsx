import Image from "next/image";

const Logo = () => {
  return <Image src={"/logo.svg"} alt="logo" width={180} height={150} />;
};

export default Logo;
