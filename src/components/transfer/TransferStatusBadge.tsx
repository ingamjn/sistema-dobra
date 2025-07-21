'use client';

import React from 'react';

type TransferStep = 'Sent' | 'Verified' | 'Received';

type Props = {
  step: TransferStep;
};

export default function TransferStatusBadge({ step }: Props) {
  const color =
    step === 'Sent'
      ? 'bg-yellow-200 text-yellow-800'
      : step === 'Verified'
        ? 'bg-blue-200 text-blue-800'
        : step === 'Received'
          ? 'bg-green-200 text-green-800'
          : 'bg-gray-200 text-gray-800';

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded ${color}`}
    >
      {step}
    </span>
  );
}
