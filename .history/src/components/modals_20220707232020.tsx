import React, { useState } from "react";

import styles from "./styles.module.scss";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.OpenModal}>
      <button onClick={() => setShowModal(true)}>
        Abbrir modal
      </button>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}
