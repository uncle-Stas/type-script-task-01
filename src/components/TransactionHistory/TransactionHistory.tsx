import React from 'react';
import {
  TransactionTable,
  HeadRow,
  TableHead,
  BodyRow,
  TableData,
} from './TransactionHistory.styled';

interface IItem {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

interface IProp {
  transaction: IItem[];
}

export const TransactionHistory: React.FC<IProp> = ({ transaction }) => {
  return (
    <TransactionTable>
      <thead>
        <HeadRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </HeadRow>
      </thead>

      <tbody>
        {transaction.map(item => {
          return (
            <BodyRow key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </BodyRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};
