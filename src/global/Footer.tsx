import Image from "next/image";

export default function Footer() {
  return (
    <section className="max-w-500 w-full relative">
      <Image
        src="/Footer.jpg"
        alt="Footer Image R Symbol"
        fill
        className="object-contain"
      />
    </section>
  );
}
