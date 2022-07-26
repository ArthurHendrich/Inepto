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
        <div className={styles.OverlayStyles}>
          <div className={styles.ModalStyles}>
            <button onClick={() => setShowModal(false)}>Close</button>
            <form>
              <label htmlFor="email">Email</label>
              <input id="email" type='email' placeholder="Digite seu email" autoFocus/>
              <label>Assunto</label>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
