"use client";

import { useState } from "react";
import FormInput from "./FormInput";
import Loading from "../Loading";
import Card from "../Card";
import Select from "./Select";
import Link from "next/link";
import FormDate from "./FormDate";
import { usePopupState } from "../popup/PopupContextProvider";
import { useRouter } from "next/navigation";

function EditForm({ path, elementId, data, inputs }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const route = useRouter();
  const { setPopupState } = usePopupState();

  // Make fetch request
  async function onSaveEdit(e) {
    e.preventDefault();
    setButtonDisabled(true);

    const formData = new FormData(e.target);

    const res = await fetch(`/api/${path}/${elementId}`, {
      method: "PUT",
      body: formData,
    });
    const data = await res.json();

    setButtonDisabled(false);
    if (data.error) {
      setPopupState({ open: true, message: data.error, type: "Error" });
    } else {
      route.refresh();
    }
  }

  return (
    <Card>
      {data ? (
        data.error ? (
          <div className="py-5 px-3 text-center">
            <h2 className="text-lg mb-4">{data.error}</h2>
            <Link className="underline text-emerald-500" href="/">
              Home
            </Link>
          </div>
        ) : (
          <form onSubmit={onSaveEdit} onChange={() => setButtonDisabled(false)}>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row flex-wrap justify-between *:basis-1/2 *:pr-4 *:py-2">
                {inputs.map((i) => {
                  switch (i.type) {
                    case "option": {
                      return (
                        <Select
                          path={i.path}
                          name={i.name}
                          string={i.string}
                          label={i.label}
                          elementId={data[i.name]}
                          key={i.name}
                        />
                      );
                    }
                    case "date": {
                      return (
                        <FormDate
                          name={i.name}
                          label={i.label}
                          defaultValue={data[i.name]}
                          key={i.name}
                        />
                      );
                    }
                    default: {
                      return (
                        <FormInput
                          type={i.type}
                          name={i.name}
                          label={i.label}
                          defaultValue={data[i.name]}
                          key={i.name}
                        />
                      );
                    }
                  }
                })}
              </div>
            </div>
            <div className="mt-5 space-x-5">
              <button
                type="submit"
                disabled={buttonDisabled}
                className={
                  "h-10 w-20 rounded-md text-white " +
                  (buttonDisabled
                    ? "bg-emerald-600"
                    : "bg-emerald-400 hover:bg-emerald-500")
                }
              >
                Apply
              </button>
            </div>
          </form>
        )
      ) : (
        <Loading />
      )}
    </Card>
  );
}

export default EditForm;
