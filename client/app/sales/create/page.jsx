import CreateForm from "@/components/form/CreateForm";

export const metadata = {
  title: "Create sale",
  description: "Creating new sale page.",
};

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
];

function SalesCreatePage() {
  return <CreateForm path="sales" inputs={inputs} />;
}

export default SalesCreatePage;
