function FormDate({ label, name, defaultValue }) {
  const defaultDate = new Date(defaultValue).toISOString().split("T")[0];

  return (
    <label>
      <p className="font-bold">{label}:</p>
      <input type="date" name={name} defaultValue={defaultDate} />
    </label>
  );
}

export default FormDate;
