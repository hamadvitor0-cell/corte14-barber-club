export function todayInBrazil(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export function addDays(date: string, amount: number): string {
  const result = new Date(`${date}T12:00:00Z`);
  result.setUTCDate(result.getUTCDate() + amount);
  return result.toISOString().slice(0, 10);
}
export function dayOfWeek(date: string): number {
  return new Date(`${date}T12:00:00Z`).getUTCDay();
}
export function validDate(date: string, today: string): boolean {
  const parsed = new Date(`${date}T12:00:00Z`);
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(date) &&
    !Number.isNaN(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === date &&
    date >= today &&
    date <= addDays(today, 60) &&
    dayOfWeek(date) !== 0
  );
}
export function timeSlots(
  date: string,
  duration: number,
  now = new Date(),
): string[] {
  if (dayOfWeek(date) === 0) return [];
  const end = (dayOfWeek(date) === 6 ? 17 : 19) * 60;
  const today = todayInBrazil(now);
  if (date < today) return [];
  const clock = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(now);
  const [hour, minute] = clock.split(":").map(Number);
  const earliest = date === today ? hour * 60 + minute + 1 : 0;
  const slots: string[] = [];
  for (let start = 9 * 60; start + duration <= end; start += 30) {
    if (start >= earliest)
      slots.push(
        `${String(Math.floor(start / 60)).padStart(2, "0")}:${String(start % 60).padStart(2, "0")}`,
      );
  }
  return slots;
}
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
