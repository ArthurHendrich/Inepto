import { AppProps } from "next/app";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';

import '../styles/global.scss';
import { useState } from "react";


Modal.setAppElement('#root')


function MyApp({ Component, pageProps }: AppProps) {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }


  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}

export default MyApp;
