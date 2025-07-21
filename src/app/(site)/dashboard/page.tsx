'use client';

import React from 'react';
import TransferList from '@/components/Dashboard/TransferList';
import NewTransferForm from '@/components/Dashboard/NewTransferForm';
import { useLocalTransfers } from '@/hooks/useLocalTransfers';

export default function DashboardPage() {
  const { transfers } = useLocalTransfers();

  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
      <NewTransferForm users={[]} onSend={function (recipient: string, amount: number, message: string, anonymous: boolean): void {
        throw new Error('Function not implemented.');
      } } />
      <TransferList transfers={transfers} />
    </main>
  );
}

