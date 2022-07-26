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
            <button className={styles.CloseButton} onClick={() => setShowModal(false)}>Close</button>
            <div className={styles.ModalForm}>
            <form>
              <input type='text' placeholder="nome" autoFocus required/>
              <input type='email' placeholder="Digite seu email" required/>
              <input type='text' placeholder="Tema Artigo" required/>
              <textarea placeholder="Insira o comentário"/>
            </form>
              <button className={styles.SentButton} onClick={() => setShowModal(false)}>Enviar</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
