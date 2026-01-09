import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Header() {
  return (
    <section className="max-w-500 w-full max-h-36 bg-amber-200 mx-auto py-5 hover:bg-white duration-200">
      {/* Image */}
      <div className="invert hover:invert-0 duration-200 relative max-w-60 w-full aspect-4/1 cursor-pointer mx-auto">
        <Image
          src="/loreal-paris-black-logo.svg"
          alt="Loreal Paris Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Navigation Menu */}
      <Navbar />
    </section>
  );
}
