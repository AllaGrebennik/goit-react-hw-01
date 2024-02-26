import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    console.log(items)
    return (
        <div className={css.container}>
            <table className={css.tableTransaction}>
                <thead className={css.tableHead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return <tr className={css.tableRow} key={item.id}>
                            <TransactionHistoryItem data={item} />
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionHistory;
