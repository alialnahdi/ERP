"use client";
import garbageIcon from "@/icons/garbage_icon.png";
import editIcon from "@/icons/edit_icon.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePopupState } from "./popup/PopupContextProvider";
import { useState } from "react";
import Loading from "./Loading";

function TdActions({ path, APIpath, elementId }) {
  const router = useRouter();
  const { setPopupState } = usePopupState();
  const [disabled, setDisabled] = useState(false);

  const handleDelete = async () => {
    setDisabled(true);
    const res = await fetch(`/api/${APIpath}/${elementId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.error) {
      setPopupState({ open: true, type: "Error", message: data.error });
    } else {
      router.refresh();
    }
    setDisabled(false);
  };

  return (
    <td className="flex flex-row justify-start items-center gap-2 *:opacity-70 hover:*:opacity-85">
      <Link href={`/${path}/${elementId}`}>
        <Image src={editIcon} width={20} alt="edit icon" />
      </Link>
      <button onClick={handleDelete} disabled={disabled}>
        {disabled ? (
          <div className="*:h-6 *:*:size-7 *:*:border-y-white *:*:border-slate-700">
            <Loading />
          </div>
        ) : (
          <Image src={garbageIcon} width={25} alt="garbage icon" />
        )}
      </button>
    </td>
  );
}

export default TdActions;
