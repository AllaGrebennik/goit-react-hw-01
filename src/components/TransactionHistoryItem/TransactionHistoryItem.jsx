export const TransactionHistoryItem = ({ data: { type, amount, currency } }) => {
    console.log(type)
    return (
        <>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
        </>
    )
}