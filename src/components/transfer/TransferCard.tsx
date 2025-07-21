import TransferStatus from './TransferStatus';
import TransferBadge from './TransferBadge';

type Transfer = {
  id: number;
  from_user: string;
  to_user: string;
  step: 'Sent' | 'Verification' | 'Received';
  timestamp: string;
  amount?: number | null;
  message?: string | null;
};

type Props = {
  transfer: Transfer;
};

export default function TransferCard({ transfer }: Props) {
  return (
    <div className="p-4 border rounded shadow bg-gray-50">
      <p className="mb-1">
        <strong>{transfer.from_user}</strong> →{' '}
        <strong>{transfer.to_user}</strong> —{' '}
        <em>${transfer.amount?.toFixed(2) ?? '0.00'}</em>
      </p>
      {transfer.message && (
        <p className="text-sm italic text-gray-600 mb-1">{transfer.message}</p>
      )}
      <p className="text-sm flex items-center gap-2 mb-1">
        <TransferBadge step={transfer.step} />
        <TransferStatus step={transfer.step} />
      </p>
      <p className="text-xs text-gray-400">{transfer.timestamp}</p>
    </div>
  );
}
