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
            <div className={styles.ModalForm}>
            <form>
              <input type='text' placeholder="nome" autoFocus/>
              <input type='email' placeholder="Digite seu email"/>
              <input type='text' placeholder="Tema Artigo"/>
              <textarea placeholder="Digite a observação"/>
            </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
