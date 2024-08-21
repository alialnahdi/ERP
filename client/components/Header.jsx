"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pathes = [
  { title: "Dashboard", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Sales", href: "/sales" },
  { title: "Sales reps", href: "/sales-reps" },
];

function Header() {
  const pathName = usePathname();

  return (
    <div className="bg-emerald-600 text-xl h-screen py-8 space-y-10">
      <span>
        <h2 className="select-none text-2xl lg:text-4xl italic font-bold text-white text-center">
          THE ERP 🛰
        </h2>
      </span>
      <nav className="space-y-3 *:py-2 text-emerald-100">
        {pathes.map((l) => {
          const isActive = pathName === l.href;

          return (
            <Link
              key={l.title}
              href={l.href}
              className={"block " + (isActive ? "bg-emerald-500" : null)}
            >
              <span className="px-4">{l.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
