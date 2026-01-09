import { NavbarData } from "@/data/Navbar.data";

export default function Navbar() {
  return (
    <section className="max-w-500 mx-auto w-full flex justify-center my-1 space-x-10">
      {NavbarData.map((items, index) => (
        <div
          key={index}
          className="uppercase text-[10px] group-hover:invert text-white hover:text-tertiary font-semibold"
        >
          <p className="m-3.5 cursor-pointer">
            {items.menu}
          </p>
        </div>
      ))}
    </section>
  );
}
