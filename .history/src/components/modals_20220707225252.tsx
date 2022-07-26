import React, { useState } from "react";

export function Modals() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <input type="text" placeholder="Digite o nome do conteúdo" onClick={() => setShowModal(true)}/>
      {showModal ? (
        <div>May your life testing </div>
      ) : null}
    </div>
  );
}
