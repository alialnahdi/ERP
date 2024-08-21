"use client";

function ErrorPage(params) {
  const { error } = params;
  return (
    <div className="h-96 flex justify-center items-center">
      <div className="text-center space-y-5">
        <h2 className="font-bold text-2xl text-slate-700">
          {error.message === "fetch failed"
            ? "Failed to fetch data from the server"
            : error.message}
        </h2>
        <p className="text-lg text-slate-500">Try again later</p>
      </div>
    </div>
  );
}

export default ErrorPage;
