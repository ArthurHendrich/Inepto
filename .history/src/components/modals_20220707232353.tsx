import React, { useState } from "react";

import styles from "./styles.module.scss";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.OpenModal}>
      <button onClick={() => setShowModal(true)}>
        Contribuir
      </button>
      {showModal ? (
        <div className={styles.OverlayModal}>
          <div className={styles.OverlayStyles}>
            <button onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
