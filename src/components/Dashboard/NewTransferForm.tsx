'use client';

import { useState } from 'react';

type NewTransferFormProps = {
  users: { id: string; email: string; full_name?: string | null }[];
  onSend: (
    recipient: string,
    amount: number,
    message: string,
    anonymous: boolean
  ) => void;
};

export default function NewTransferForm({
  users,
  onSend,
}: NewTransferFormProps) {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!recipient || !amount) return;
    onSend(recipient, Number(amount), message, anonymous);
    setRecipient('');
    setAmount('');
    setMessage('');
    setAnonymous(false);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-gray-50">
      <label className="block mb-2 font-semibold">
        Recipient:
        <select
          className="w-full p-2 border rounded"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        >
          <option value="">Select recipient</option>
          {users.map((u) => (
            <option key={u.id} value={u.email}>
              {u.full_name ?? u.email}
            </option>
          ))}
        </select>
      </label>

      <label className="block mb-2 font-semibold">
        Amount:
        <input
          type="number"
          step="0.01"
          min="0"
          className="w-full p-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <label className="block mb-2 font-semibold">
        Message (optional):
        <textarea
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
        />
      </label>

      <label className="inline-flex items-center mb-4">
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
          className="mr-2"
        />
        Send anonymously
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700"
      >
        Send Goodness
      </button>
    </form>
  );
}
