import { useEffect, useState } from 'react';

export type Transfer = {
  id: number;
  from: string;
  to: string;
  amount: number;
  message?: string;
  step: string;
  timestamp: string;
};

const STORAGE_KEY = 'transfers';

export function useLocalTransfers() {
  const [transfers, setTransfers] = useState<Transfer[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTransfers(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse transfers from localStorage:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transfers));
  }, [transfers]);

  function addTransfer(newTransfer: Omit<Transfer, 'id' | 'timestamp'>) {
    const transfer: Transfer = {
      ...newTransfer,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    setTransfers((prev) => [...prev, transfer]);
  }

  function removeTransfer(id: number) {
    setTransfers((prev) => prev.filter((t) => t.id !== id));
  }

  return { transfers, addTransfer, removeTransfer };
}

