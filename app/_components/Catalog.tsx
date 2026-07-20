// --- New AllBoardsCatalog page ---
'use client';

import { useState } from 'react';
import { SURFBOARDS } from '../_lib/data';
import type { Surfboard } from '../_lib/types';

export function AllBoardsCatalog() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter boards dynamically based on user search input
  const filteredBoards = SURFBOARDS.filter((board) =>
    `${board.brand} ${board.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Surfboard Database</h2>
          <p className="text-gray-600 text-sm">Browse all {SURFBOARDS.length} models and find your next match.</p>
        </div>
        <input
          type="text"
          placeholder="Search by brand or model (e.g., Channel Islands)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Board Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBoards.map((board: Surfboard) => (
          <div key={board.id} className="border border-gray-200 rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between hover:shadow-md transition">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {board.brand}
                </span>
                <span className="text-sm font-bold text-gray-700">{board.volume}L</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{board.model}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Length: <span className="font-medium text-gray-800">{board.lengthFt} ft</span> | 
                Waves: <span className="font-medium text-gray-800">{board.minWaveFt}ft - {board.maxWaveFt}ft</span>
              </p>
            </div>

            {/* Affiliate Button */}
            <div className="pt-4 border-t border-gray-100">
              {board.affiliateUrl ? (
                <a
                  href={board.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Check Price / Buy Now
                </a>
              ) : (
                <span className="block w-full text-center bg-gray-100 text-gray-400 py-2 px-4 rounded-lg text-sm">
                  Link Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBoards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No surfboards found matching &quot;{searchTerm}&quot;.</p>
        </div>
      )}
    </div>
  );
}