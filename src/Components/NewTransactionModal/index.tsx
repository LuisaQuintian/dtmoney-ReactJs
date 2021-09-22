import Modal from "react-modal"
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