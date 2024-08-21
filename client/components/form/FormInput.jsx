function FormInput(params) {
  return (
    <label>
      <p className="font-bold">{params.label}:</p>
      <input
        {...params}
        className="p-1 pb-0 border-b w-full border-slate-400 outline-none focus:bg-slate-100"
        {...(params.type === "number"
          ? { min: "0" }
          : params.type === "float"
          ? { type: "number", min: "0", step: "0.1" }
          : {})}
        required
      />
    </label>
  );
}

export default FormInput;
