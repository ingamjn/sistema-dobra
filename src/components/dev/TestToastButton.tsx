'use client';

import { toast } from 'sonner';

export default function TestToastButton() {
  return (
    <button
      onClick={() => toast.success('Toaster works! 🎉')}
      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded"
    >
      Show Toast
    </button>
  );
}
