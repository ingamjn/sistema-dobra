'use client';

import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  className = '',
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
