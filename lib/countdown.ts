export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isComplete: boolean;
}

/**
 * Computes remaining time to an ISO timestamp with explicit timezone offset
 * (e.g. "2026-11-24T19:00:00+05:30" for Asia/Kolkata).
 * Clamps cleanly to zero once the target instant has passed.
 */
export function getCountdownValues(
  targetIso: string,
  nowMs: number = Date.now()
): CountdownValues {
  const targetMs = Date.parse(targetIso);
  if (Number.isNaN(targetMs)) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0,
      isComplete: true,
    };
  }

  const diff = Math.max(0, targetMs - nowMs);
  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0,
      isComplete: true,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMs: diff,
    isComplete: false,
  };
}
