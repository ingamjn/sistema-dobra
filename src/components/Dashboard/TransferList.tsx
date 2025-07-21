'use client';

import TransferItem from './TransferItem';
import { Transfer } from '@/hooks/useLocalTransfers';

type TransferListProps = {
  transfers: Transfer[];
  onRemove?: (id: number) => void;
};

export default function TransferList({ transfers, onRemove }: TransferListProps) {
  if (transfers.length === 0) {
    return <p className='text-gray-500 italic'>No transfers found.</p>;
  }

  return (
    <div className='space-y-4'>
      {transfers.map((t) => (
        <TransferItem key={t.id} {...t} onDelete={onRemove} />
      ))}
    </div>
  );
}

