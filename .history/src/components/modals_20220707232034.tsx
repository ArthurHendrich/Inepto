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
        <div>
          <button onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}
