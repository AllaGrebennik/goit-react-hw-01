import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem'

export const TransactionHistory = ({ items }) => {
     console.log(items)
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return <tr key={item.id}>
                        <TransactionHistoryItem data={item} />
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}
