import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// interface TransactionInput {
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //Omit=função do typescript!

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'> Outra função do typescript, funciona parecido com a de cima, so q o omit tira os selecionados e o pick só pega os selecionados!

interface TransactionProviderProps {
    children: ReactNode; //esse reactnode é do proprio react e indica q o elemento children pode receber qualquer tipo de dado
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)//essa parte final é um esquema, um trick pro typescript n dar erro!

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('/transactions') //esse link é fictício, pois vamos usar um mockApi, quando o suposto backend ficasse pronto, esse link seria substituído.
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context
}