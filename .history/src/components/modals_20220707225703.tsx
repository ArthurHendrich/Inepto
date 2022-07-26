import Image from "next/image";
import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <button
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open First Modal <AiFillFire className="text-xl" />
        </button>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
        <Image src={'images/logo.svg'} width={100} height={100} objectFit="contain" />
        <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
          May your life be filled with success and achievements.
          Congratulations!
        </h2>
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
