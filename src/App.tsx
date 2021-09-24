import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global"
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }
    
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      /> 
      <GlobalStyle />
    </TransactionProvider>
  );
}
