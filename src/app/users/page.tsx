'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const QRCodeCanvas = dynamic(
  () => import('qrcode.react').then((mod) => mod.QRCodeCanvas),
  { ssr: false }
);

type UserProfilePageProps = {
  email: string;
};

export default function UserProfilePage({
  email = 'example@example.com',
}: Partial<UserProfilePageProps>) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Profile for {email}</h1>
      <div>
        <QRCodeCanvas value={`https://iTip.life/user/${email}`} size={160} />
      </div>
    </main>
  );
}
