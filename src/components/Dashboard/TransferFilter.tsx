'use client';

import React from 'react';

type TransferFilterProps = {
  currentFilter: string;
  onChange: (filter: string) => void;
};

const filters = ['all', 'pending', 'completed'];

export default function TransferFilter({ currentFilter, onChange }: TransferFilterProps) {
  return (
    <div className='mb-4 flex space-x-4'>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-3 py-1 rounded ${currentFilter === filter ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

