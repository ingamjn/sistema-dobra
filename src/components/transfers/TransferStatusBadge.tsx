import React from 'react';

type TransferStatusBadgeProps = {
  step: 'Sent' | 'Verification' | 'Received';
};

export default function TransferStatusBadge({
  step,
}: TransferStatusBadgeProps) {
  let colorClass = '';

  switch (step) {
    case 'Sent':
      colorClass = 'bg-green-500';
      break;
    case 'Verification':
      colorClass = 'bg-yellow-400';
      break;
    case 'Received':
      colorClass = 'bg-purple-500';
      break;
    default:
      colorClass = 'bg-gray-400';
  }

  return (
    <span
      className={`inline-block w-3 h-3 rounded-full ${colorClass}`}
      aria-label={step}
    />
  );
}
