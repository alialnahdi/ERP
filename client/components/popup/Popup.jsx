"use client";
import { usePopupState } from "./PopupContextProvider";

function Popup() {
  const { popupState, setPopupState } = usePopupState();
  const { open, type, message } = popupState;

  const handleClose = () => {
    setPopupState({ ...popupState, open: false });
  };

  return open ? (
    <div className="fixed w-full h-full bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4">
        <div className="w-full max-w-sm bg-white rounded-md overflow-hidden shadow-md flex flex-col justify-between">
          <div className="px-8 py-5 text-center">
            <h2 className="text-red-500 text-xl mb-3">{type}</h2>
            <h2 className="text-slate-700">{message}</h2>
          </div>
          <button
            onClick={handleClose}
            className="w-full bg-red-500 text-white py-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Popup;
