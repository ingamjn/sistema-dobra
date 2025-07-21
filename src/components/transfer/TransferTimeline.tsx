'use client';

import React from 'react';

type TransferTimelineProps = {
  sentAt?: string | null;
  verifiedAt?: string | null;
  receivedAt?: string | null;
};

export default function TransferTimeline({
  sentAt,
  verifiedAt,
  receivedAt,
}: TransferTimelineProps) {
  return (
    <div className="mt-2 space-y-1 text-xs text-gray-500">
      {sentAt && <p>⏱ Sent at {sentAt}</p>}
      {verifiedAt && <p>🔎 Verified at {verifiedAt}</p>}
      {receivedAt && <p>📥 Received at {receivedAt}</p>}
    </div>
  );
}
