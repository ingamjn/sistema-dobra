'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

type Transfer = {
  id: number;
  from: string;
  to: string;
  step: string;
  timestamp: string;
  sent_at?: string;
  verified_at?: string;
  received_at?: string;
  private?: boolean;
};

export default function UserProfilePage() {
  const params = useParams();
  const email = decodeURIComponent((params.email as string) || '');

  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    const saved = localStorage.getItem('transfers');
    if (saved) {
      try {
        setTransfers(JSON.parse(saved));
      } catch {
        setTransfers([]);
      }
    }
  }, []);

  const receivedTransfers = transfers.filter(
    (t) => t.to === email && !t.private
  );

  const filteredTransfers = receivedTransfers.filter((t) =>
    statusFilter === 'all' ? true : t.step === statusFilter
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-white">
      <h1 className="text-3xl font-bold mb-4">Public Profile</h1>
      <p className="text-lg text-gray-700 mb-2 break-all">{email}</p>

      <div className="mt-4 mb-6">
        <QRCodeCanvas value={`https://iTip.life/user/${email}`} size={160} />
        <p className="text-sm text-gray-500 mt-2">
          Scan the code to view this profile
        </p>
      </div>

      <div className="mb-4">
        <label className="mr-2 font-semibold">
          Filter transfers by status:
        </label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded p-1"
        >
          <option value="all">All</option>
          <option value="Sent">Sent</option>
          <option value="Verification">Verification</option>
          <option value="Received">Received</option>
        </select>
      </div>

      {filteredTransfers.length === 0 ? (
        <p className="text-sm text-gray-400 italic">
          No public transfers found
        </p>
      ) : (
        <div className="mt-6 w-full max-w-md space-y-4 text-left">
          {filteredTransfers.map((t) => (
            <div
              key={t.id}
              className="border rounded-lg p-5 shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <p className="text-base font-semibold mb-1">
                <span className="text-blue-600 break-words">{t.from}</span> →{' '}
                <span className="text-green-600 break-words">{t.to}</span>
              </p>
              <p className="text-sm font-medium text-gray-700 mb-2">{t.step}</p>
              {t.sent_at && (
                <p className="text-xs text-gray-400 mb-1">
                  ⏱ Sent at {t.sent_at}
                </p>
              )}
              {t.verified_at && (
                <p className="text-xs text-yellow-500 mb-1">
                  🔎 Verified at {t.verified_at}
                </p>
              )}
              {t.received_at && (
                <p className="text-xs text-purple-500 mb-1">
                  📥 Received at {t.received_at}
                </p>
              )}
              <p className="text-xs text-gray-400">{t.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
