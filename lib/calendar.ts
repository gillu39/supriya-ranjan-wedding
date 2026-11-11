import type { WeddingEventData } from "./wedding-data";

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function formatUtcIcsStamp(istDateISO: string, hour24: number, minute: number): string {
  // Construct IST instant explicitly (+05:30) and format in UTC for universal .ics compatibility
  const iso = `${istDateISO}T${pad2(hour24)}:${pad2(minute)}:00+05:30`;
  const d = new Date(iso);
  return (
    d.getUTCFullYear() +
    pad2(d.getUTCMonth() + 1) +
    pad2(d.getUTCDate()) +
    "T" +
    pad2(d.getUTCHours()) +
    pad2(d.getUTCMinutes()) +
    "00Z"
  );
}

function escapeIcsText(input: string): string {
  return input
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function buildGoogleCalendarUrl(
  event: WeddingEventData,
  title: string,
  description: string,
  location: string
): string {
  const startUtc = formatUtcIcsStamp(event.dateISO, event.startHour24, event.startMinute);
  const endHour = event.startHour24 + event.durationHours;
  const endUtc = formatUtcIcsStamp(event.dateISO, endHour, event.startMinute);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Supriya & Dr. Ranjan — ${title}`,
    dates: `${startUtc}/${endUtc}`,
    details: description,
    location,
    ctz: "Asia/Kolkata",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(
  event: WeddingEventData,
  title: string,
  description: string,
  location: string
): void {
  const startUtc = formatUtcIcsStamp(event.dateISO, event.startHour24, event.startMinute);
  const endUtc = formatUtcIcsStamp(
    event.dateISO,
    event.startHour24 + event.durationHours,
    event.startMinute
  );
  const nowUtc = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Supriya & Dr. Ranjan Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}-2026@supriya-ranjan-wedding`,
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${escapeIcsText(`Supriya & Dr. Ranjan — ${title}`)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `supriya-ranjan-${event.id}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
