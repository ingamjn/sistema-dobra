'use client';

type TransferItemProps = {
  from: string;
  to: string;
  amount: number;
  message?: string;
  step: string;
  timestamp: string;
};

export default function TransferItem({
  from,
  to,
  amount,
  message,
  step,
  timestamp,
}: TransferItemProps) {
  return (
    <div className="p-4 border rounded shadow bg-gray-50 hover:shadow-md transition">
      <p>
        <strong>{from}</strong> → <strong>{to}</strong> —{' '}
        <em>${amount.toFixed(2)}</em>
      </p>
      {message && <p className="italic text-gray-600">{message}</p>}
      <p className="text-sm text-gray-500">
        {step} at {timestamp}
      </p>
    </div>
  );
}
