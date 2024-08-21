function Table({ titles, children }) {
  return (
    <table className="w-full text-xs md:text-sm lg:text-base rounded-md overflow-hidden border-collapse outline outline-1 outline-slate-200">
      <thead className="text-left bg-slate-200">
        <tr className="*:px-4 *:py-4">
          {titles.map((t) => (
            <th key={t}>{t}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-slate-200 text-slate-600">
        {children}
      </tbody>
    </table>
  );
}

export default Table;
