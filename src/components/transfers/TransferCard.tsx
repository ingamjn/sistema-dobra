'use client';

import React from 'react';
import type { Transfer } from '@/types/transfer-types';
import TransferTimeline from '@/components/transfer/TransferTimeline';

type TransferCardProps = {
  transfer: Transfer;
};

export default function TransferCard({ transfer }: TransferCardProps) {
  return (
    <div className="p-4 border rounded shadow bg-gray-50">
      <p>
        <strong>{transfer.from_user}</strong> →{' '}
        <strong>{transfer.to_user}</strong> —{' '}
        <em>${transfer.amount?.toFixed(2)}</em>
      </p>
      {transfer.message && (
        <p className="text-sm italic text-gray-600">{transfer.message}</p>
      )}
      <p className="text-sm font-medium">{transfer.step}</p>
      <TransferTimeline
        sentAt={transfer.sent_at}
        verifiedAt={transfer.verified_at}
        receivedAt={transfer.received_at}
      />
      <p className="text-xs text-gray-400">{transfer.timestamp}</p>
    </div>
  );
}
