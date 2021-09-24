import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionProviderProps {
    children: ReactNode; //esse reactnode é do proprio react e indica q o elemento children pode receber qualquer tipo de dado
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect(() => {
        api.get('/transactions') //esse link é fictício, pois vamos usar um mockApi, quando o suposto backend ficasse pronto, esse link seria substituído.
        .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}