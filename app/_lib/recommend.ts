import type { UserProfile, Surfboard } from './types';
import { getBoardMatchScore } from './volumeCalc';
import { SURFBOARDS } from './data';

export function recommendBoard(user: UserProfile, count: number = 4): Surfboard[] {
  // 1. Map all boards and attach their match score
  const boardsWithScores = SURFBOARDS.map((board) => ({
    board,
    score: getBoardMatchScore(board, user),
  }));

  // 2. Sort from lowest score (best match) to highest score
  boardsWithScores.sort((a, b) => a.score - b.score);

  // 3. Take exactly the requested amount (default 4) and strip out the score
  return boardsWithScores
    .slice(0, count)
    .map((item) => item.board);
}
