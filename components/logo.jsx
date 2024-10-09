import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition hidden md:flex md:items-center md:gap-x-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="pb-1 text-neutral-700 text-lg">PMME</p>
      </div>
    </Link>
  );
};

export default Logo;
