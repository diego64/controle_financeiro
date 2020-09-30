import React, { useContext } from 'react';

import { GlobalContext } from "../context/GlobalState";

export default function Balance() {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(({ amount }) => amount);

    const total = amounts.reduce((acc, current) => (acc + current), 0).toFixed(2);

    return (
        <>
            <h4>Seu saldo</h4>
            <h1 id="balance">R$ {total}</h1>
        </>
    )
}
