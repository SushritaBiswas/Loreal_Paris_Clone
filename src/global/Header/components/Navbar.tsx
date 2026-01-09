import { NavbarData } from "@/data/Navbar.data";

export default function Navbar() {
  return (
    <section className="max-w-500 w-full flex justify-center py-4 gap-10">
      {NavbarData.map((items, index) => (
        <div
          key={index}
          className="uppercase text-[10px] text-white"
        >
          {items.menu}
          <div></div>
        </div>
      ))}
    </section>
  );
}
