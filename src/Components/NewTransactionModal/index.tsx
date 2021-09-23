import { useState } from "react"
import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from "./style"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  const [type, setType] = useState('deposit')

  return(
        <Modal 
            isOpen={isOpen}//isOpen é uma required prop q vem junto com o pacoote react-modal, serve para abrir
            onRequestClose={onRequestClose}//O onRequestClose serve para fechar o modal com esc ou clicando fora dele
            overlayClassName="react-modal-overlay" //o modal vem com algumas estilizações, essa propriedade serve pra apagar as classes e trocar por nomes novos, pra podermos estilizar ele do zero
            className="react-modal-content"//essa é a classe q vai corresponder ao conteúdo, assim como o caso de cima
        >
          <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>
          <Container>
            <h2>Cadastrar transação:</h2>
            
            <input  placeholder="Título"/>
            <input type="number" placeholder="Valor" />

            <TransactionTypeContainer>
            <RadioBox
              type="button"
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'} //propriedade criada por nós, podia ser qualquer nome
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
              type="button"
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
            </TransactionTypeContainer> 

            <input placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    )
}