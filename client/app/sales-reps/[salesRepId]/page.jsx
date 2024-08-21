import EditForm from "@/components/form/EditForm";

const inputs = [
  { type: "text", name: "name", label: "Name" },
  { type: "float", name: "commissionRate", label: "Commission rate" },
];

export async function generateMetadata({ params }) {
  const { salesRepId } = params;

  const res = await fetch(`http://localhost:4000/api/salesreps/${salesRepId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return {
    title: `${data.name} Sales rep`,
  };
}

async function SalesRepPage({ params }) {
  const { salesRepId } = params;

  const res = await fetch(
    `http://localhost:4000/api/salesreps/${salesRepId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <EditForm
      path="salesreps"
      elementId={salesRepId}
      data={data}
      inputs={inputs}
    />
  );
}

export default SalesRepPage;
