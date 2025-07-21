type Props = {
  step: 'Sent' | 'Verification' | 'Received';
};

export default function TransferStatus({ step }: Props) {
  const colors: Record<Props['step'], string> = {
    Sent: 'text-green-600',
    Verification: 'text-yellow-600',
    Received: 'text-purple-600',
  };

  return <span className={`font-semibold ${colors[step]}`}>{step}</span>;
}
