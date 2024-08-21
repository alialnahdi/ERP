import { useEffect, useState } from "react";
import Loading from "../Loading";

function Select({ path, string, name, elementId, label, setError }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/" + path);
      const resData = await res.json();
      if (!resData.length) {
        setError("You have to make at least one " + label.toLowerCase());
      } else {
        setData(resData);
      }
    };
    fetchData();
  }, []);

  return data ? (
    <label>
      <p className="font-bold">{label}:</p>
      <select
        name={name}
        {...(elementId ? { defaultValue: elementId } : {})}
        className="w-full border-b border-slate-400"
      >
        {data.map((e) => (
          <option key={e.id} value={e.id}>
            {e[string]}
          </option>
        ))}
      </select>
    </label>
  ) : (
    <div className="*:h-10 *:*:size-8">
      <Loading />
    </div>
  );
}

export default Select;
