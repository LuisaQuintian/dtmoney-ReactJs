import Modal from "react-modal"
import closeImg from '../../assets/close.svg'
import { Container } from "./style"

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
            <input placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    )
}