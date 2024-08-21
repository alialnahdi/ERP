import Link from "next/link";

export const metadata = {
  title: "Sales",
  description: "Sales page.",
};

function ProductsLayout({ children }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Sales</h2>
        <Link
          href="/sales/create"
          className="bg-emerald-500 text-slate-50 px-4 py-2 rounded-md hover:bg-emerald-600"
          shallow={true}
        >
          Create
        </Link>
      </div>
      <hr className="my-4" />
      <div>{children}</div>
    </div>
  );
}

export default ProductsLayout;
