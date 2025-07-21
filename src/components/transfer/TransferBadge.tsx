type Props = {
  step: 'Sent' | 'Verification' | 'Received';
};

export default function TransferBadge({ step }: Props) {
  const colors: Record<Props['step'], string> = {
    Sent: 'bg-green-500',
    Verification: 'bg-yellow-400',
    Received: 'bg-purple-500',
  };

  return (
    <span className={`inline-block w-3 h-3 rounded-full ${colors[step]}`} />
  );
}
