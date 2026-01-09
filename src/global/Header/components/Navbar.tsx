import { NavbarData } from "@/data/Navbar.data";

export default function Navbar() {
  return (
    <section className="max-w-500 w-full flex justify-center py-4 gap-12">
      {NavbarData.map((items, index) => (
        <div
          key={index}
          className="uppercase text-[10px] cursor-pointer group-hover:invert text-white hover:text-tertiary font-normal p-2"
        >
          {items.menu}
        </div>
      ))}
    </section>
  );
}
