'use client';

import React from 'react';
import type { Transfer } from '@/types/transfer-types';
import TransferCard from './TransferCard';

type TransferListProps = {
  transfers: Transfer[];
  showSent: boolean;
  loading: boolean;
  bottomRef: React.RefObject<HTMLDivElement>;
};

export default function TransferList({
  transfers,
  showSent,
  loading,
  bottomRef,
}: TransferListProps) {
  if (loading) {
    return <p>Loading transfers...</p>;
  }

  if (transfers.length === 0) {
    return (
      <p className="text-gray-500 italic">
        No {showSent ? 'sent' : 'received'} transfers found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {transfers.map((transfer) => (
        <TransferCard key={transfer.id} transfer={transfer} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
