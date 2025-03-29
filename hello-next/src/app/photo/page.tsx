import Image from "next/image";
import summersale from "../../../public/summersale.jpg";

export default function Photo() {
  return (
    <Image src={summersale} alt="Summer Sale" quality={50} placeholder="blur" />
  );
}
