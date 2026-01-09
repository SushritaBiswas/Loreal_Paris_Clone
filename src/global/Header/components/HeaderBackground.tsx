import { HeaderBackgroundType } from "@/@types/HeaderBackground.types";
import Image from "next/image";
import Header from "../Header";

export default function HeaderBackground({
  imgSrc,
  altText,
  topic,
}: HeaderBackgroundType) {
  return (
    <section className="max-w-500 w-full mx-auto">
      {/* Header and the Topic  */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Background Image */}
      <div className="relative w-full max-w-500 aspect-21/9 -top-38 mx-auto">
        <Image
          src={imgSrc}
          alt={altText || ""}
          fill
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
