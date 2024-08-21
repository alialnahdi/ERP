import CreateForm from "@/components/form/CreateForm";

export const metadata = {
  title: "Create sales reps",
  description: "Creating new sales reps page.",
};

const inputs = [
  { type: "text", name: "name", label: "Name" },
  { type: "float", name: "commissionRate", label: "Commission rate" },
];

function SalesRepCreatePage() {
  return <CreateForm path="salesreps" routePath="sales-reps" inputs={inputs} />;
}

export default SalesRepCreatePage;
