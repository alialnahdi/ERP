function ChartCard({ children, title, className, bitHeight = false }) {
  return (
    <div
      className={`h-96 w-full my-2 rounded-xl overflow-hidden border border-slate-200`}
    >
      {title && (
        <div className="border-b border-slate-200 py-2 px-6">
          <span className="text-lg font-bold">{title}</span>
        </div>
      )}
      {/* <div className={` p-5 flex justify-center items-center h-full`}>
        <div className={`w-full ${bitHeight ? "max-h-80" : "max-h-72"}`}>
          {children}
        </div>
      </div> */}
      <div className="pb-14 pt-3 px-5 h-96 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default ChartCard;
