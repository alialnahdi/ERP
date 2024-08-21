import EditForm from "@/components/form/EditForm";

const inputs = [
  {
    type: "option",
    name: "salesRepId",
    label: "Sales Rep",
    path: "salesreps",
    string: "name",
  },
  {
    type: "option",
    name: "productId",
    label: "Product",
    path: "products",
    string: "title",
  },
  { type: "number", name: "quanity", label: "Quanity" },
  { type: "float", name: "totalPrice", label: "Total price" },
  { type: "date", name: "createdAt", label: "Sale date" },
];

export async function generateMetadata({ params }) {
  const { saleId } = params;

  const res = await fetch(`http://localhost:4000/api/sales/${saleId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return {
    title: `Sale made by ${data.salesRep.name}`,
  };
}

async function SalePage({ params }) {
  const { saleId } = params;

  const res = await fetch(`http://localhost:4000/api/sales/${saleId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <EditForm path="sales" elementId={saleId} data={data} inputs={inputs} />
  );
}

export default SalePage;
