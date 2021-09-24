import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";



export function TransactionsTable() {
    const { transactions } = useContext(TransactionContext)
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', { //essa Intl é uma API nativa do próprio browser
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date (transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </Container>
    )
}