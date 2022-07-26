import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button" className="btn btn-primary"
        onClick={() => setShowModal(true)}
      > 
      Abbrir modal
      </button>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">

          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}