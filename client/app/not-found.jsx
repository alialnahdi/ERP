import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="h-full text-center space-y-3 px-12 flex flex-col justify-center">
      <h2 className="text-7xl font-bold">404</h2>
      <div className="space-y-2">
        <h3 className="text-xl">Sorrr, the page not found</h3>
        <p className="text-slate-700">
          The link you followed probably broken. Go back to{" "}
          <Link href="/" className="text-emerald-600 underline">
            home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
