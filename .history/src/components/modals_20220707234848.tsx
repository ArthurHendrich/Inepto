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
              <input type='text' placeholder="nome" autoFocus/>
              <input type='email' placeholder="Digite seu email"/>
              <input type='text' placeholder="Tema Artigo"/>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
