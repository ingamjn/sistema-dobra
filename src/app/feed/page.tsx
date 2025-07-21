'use client';

import { useEffect, useState } from 'react';

type Transfer = {
  id: number;
  from: string;
  to: string;
  step: string;
  timestamp: string;
  sentAt?: string;
  verifiedAt?: string;
  receivedAt?: string;
};

export default function FeedPage() {
  const [transfers, setTransfers] = useState<Transfer[]>([]);

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Good Deeds Feed</h1>
      <p className="text-gray-600 mb-8">
        All public transfers are displayed here
      </p>

      {transfers.length === 0 ? (
        <p className="text-gray-400 italic">No transfers yet</p>
      ) : (
        <div className="w-full max-w-md space-y-4 text-left">
          {transfers.map((t) => (
            <div
              key={t.id}
              className="border rounded-lg p-4 shadow bg-gray-50 hover:shadow-md transition-shadow"
            >
              <p>
                <strong>{t.from}</strong> → <strong>{t.to}</strong>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span
                  className={`inline-block w-3 h-3 rounded-full ${
                    t.step === 'Sent'
                      ? 'bg-green-500'
                      : t.step === 'Verification'
                        ? 'bg-yellow-400'
                        : 'bg-purple-500'
                  }`}
                ></span>
                {t.step}
              </p>
              <p className="text-xs text-gray-400">{t.timestamp}</p>
              {t.sentAt && (
                <p className="text-xs text-gray-400">⏱ Sent at {t.sentAt}</p>
              )}
              {t.verifiedAt && (
                <p className="text-xs text-yellow-500">
                  🔎 Verified at {t.verifiedAt}
                </p>
              )}
              {t.receivedAt && (
                <p className="text-xs text-purple-500">
                  📥 Received at {t.receivedAt}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
