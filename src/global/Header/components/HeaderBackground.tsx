import { HeaderBackgroundType } from "@/@types/HeaderBackground.types";
import Image from "next/image";
import Header from "../Header";

export default function HeaderBackground({
  imgSrc,
  altText,
  topic,
}: HeaderBackgroundType) {
  return (
    <section className="max-w-500 w-full flex flex-col justify-center">
      {/* Background Image */}
      <Image
        src={imgSrc}
        alt={altText || ""}
        fill
        className="object-cover"
      />

      {/* Header and the Topic  */}
      <div className="relative z-50">
        <Header />
        {topic && <p>{topic}</p>}
      </div>
    </section>
  );
}
