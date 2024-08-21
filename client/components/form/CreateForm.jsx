"use client";
import { useRouter } from "next/navigation";
import Card from "../Card";
import FormInput from "./FormInput";
import Select from "./Select";
import { usePopupState } from "../popup/PopupContextProvider";
import { useRef, useState } from "react";

function CreateForm({ path, routePath, inputs }) {
  const router = useRouter();
  const formRef = useRef();
  const { setPopupState } = usePopupState();
  const [error, setError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const route = routePath ? routePath : path;

  async function onSubmit(e) {
    setButtonDisabled(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch(`/api/${path}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    setButtonDisabled(false);
    if (data.error) {
      setPopupState({ open: true, message: data.error, type: "Error" });
    } else {
      formRef.current.reset();
      router.refresh();
    }
  }

  return (
    <Card>
      {error ? (
        <div className="py-5 px-3 text-center">
          <h2 className="text-lg mb-4">{error}</h2>
        </div>
      ) : (
        <form onSubmit={onSubmit} ref={formRef}>
          <div className="flex flex-col md:flex-row flex-wrap justify-between *:basis-1/2 *:pr-4 *:py-2">
            {inputs.map((i) =>
              i.type !== "option" ? (
                <FormInput {...i} key={i.name} />
              ) : (
                <Select {...i} setError={setError} key={i.name} />
              )
            )}
          </div>
          <div className="mt-5 space-x-7">
            <button
              type="submit"
              className={
                "h-10 w-20 rounded-md text-white  " +
                (buttonDisabled
                  ? "bg-emerald-600"
                  : "bg-emerald-400 hover:bg-emerald-500")
              }
              disabled={buttonDisabled}
            >
              Create
            </button>
            <button
              className="text-emerald-500"
              onClick={() => router.push(`/${route}`)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </Card>
  );
}

export default CreateForm;
