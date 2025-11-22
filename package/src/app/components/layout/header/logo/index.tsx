import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div style={{ position: "relative", width: "160px", height: "50px" }}>
        <Image
          src="/images/logo/Untitled_design__5_-removebg-preview.png"
          alt="logo"
          fill
          quality={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};

export default Logo;
