'use client';

import TransferItem from './TransferItem';

type Transfer = {
  id: number;
  from: string;
  to: string;
  amount: number;
  message?: string;
  step: string;
  timestamp: string;
};

type TransferListProps = {
  transfers: Transfer[];
};

export default function TransferList({ transfers }: TransferListProps) {
  if (transfers.length === 0) {
    return <p className="text-gray-500 italic">No transfers found.</p>;
  }

  return (
    <div className="space-y-4">
      {transfers.map((t) => (
        <TransferItem key={t.id} {...t} />
      ))}
    </div>
  );
}
