// Type-safe context display for surfboard recommendations

import type { UserProfile, Surfboard } from '../_lib/types';
import { getRecommendedVolumeRange } from '../_lib/volumeCalc';
import { recommendBoard } from '../_lib/recommend';

interface VolumeResultProps {
  volume: number;
  user?: UserProfile;
}

export function UserProfileSummary({ user }: { user: UserProfile }) {
  return (
    <div className="mt-2 text-sm text-green-700">
      <div>
        <span className="font-semibold">Weight:</span> {user.weightKg} kg
        <span className="mx-2">|</span>
        <span className="font-semibold">Skill:</span> {user.skillLevel}
        <span className="mx-2">|</span>
        <span className="font-semibold">Conditions:</span> {user.conditions}
        <span className="mx-2">|</span>
        <span className="font-semibold">Waves:</span> {user.wavesSurf}
      </div>
      <div>
        <span className="font-semibold">Wave Height:</span> {user.waveHeightFt} ft
        {user.location && (
          <>
            <span className="mx-2">|</span>
            <span className="font-semibold">Location:</span> {user.location}
          </>
        )}
      </div>
    </div>
  );
}

export function VolumeResult({ volume, user }: VolumeResultProps) {
  const showRange = !!user;
  let range: [number, number] | undefined;
  if (showRange && user) {
    range = getRecommendedVolumeRange(user);
  }

  // Explicitly request 4 boards here
  const recommendedBoards: Surfboard[] = user ? recommendBoard(user, 4) : [];

  return (
    <section className="my-4 p-4 bg-green-100 rounded shadow font-mono text-lg text-green-900">
      Target Board Volume: <span className="font-bold">{volume} L</span>
      {showRange && range && (
        <span className="block text-green-800 text-base mt-1">
          (Recommended range: <span className="font-semibold">{range[0]} L - {range[1]} L</span>)
        </span>
      )}
      {user && <UserProfileSummary user={user} />}

      {/* Render the 4 boards */}
      {recommendedBoards.length > 0 && (
        <div className="mt-6 pt-4 border-t border-green-200">
          <h3 className="text-base font-bold text-green-900 mb-3 font-sans">
            Top 4 Recommended Boards for You:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
            {recommendedBoards.map((board) => (
              <div key={board.id || board.model} className="bg-white p-3 rounded border border-green-200 shadow-sm text-sm">
                <div className="font-bold text-gray-900">{board.model}</div>
                <div className="text-gray-600 text-xs">{board.brand} • {board.volume}L</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
