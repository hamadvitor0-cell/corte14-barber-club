import test from "node:test";
import assert from "node:assert/strict";
import {
  addDays,
  todayInBrazil,
  validDate,
  timeSlots,
} from "../src/lib/booking.ts";

test("Brazilian date stays on the previous day before 03:00 UTC", () => {
  assert.equal(todayInBrazil(new Date("2026-10-29T01:00:00Z")), "2026-10-28");
  assert.equal(addDays("2026-12-31", 1), "2027-01-01");
});
test("booking dates reject past days, Sundays, invalid dates and dates beyond 60 days", () => {
  assert.equal(validDate("2026-10-27", "2026-10-28"), false);
  assert.equal(validDate("2026-11-01", "2026-10-28"), false);
  assert.equal(validDate("2027-01-01", "2026-10-28"), false);
  assert.equal(validDate("2026-02-31", "2026-02-01"), false);
  assert.equal(validDate("2026-10-29", "2026-10-28"), true);
  assert.equal(validDate("", "2026-10-28"), false);
});
test("service duration always fits before closing, including Saturday", () => {
  const now = new Date("2026-10-28T12:00:00Z");
  assert.equal(timeSlots("2026-10-29", 75, now).at(-1), "17:30");
  assert.equal(timeSlots("2026-10-31", 75, now).at(-1), "15:30");
  assert.deepEqual(timeSlots("2026-11-01", 45, now), []);
});
test("same-day slots exclude elapsed times in São Paulo", () => {
  const now = new Date("2026-10-28T17:30:00Z");
  assert.equal(timeSlots("2026-10-28", 45, now)[0], "15:00");
  assert.deepEqual(timeSlots("2026-10-27", 45, now), []);
  assert.deepEqual(
    timeSlots("2026-10-28", 45, new Date("2026-10-29T01:00:00Z")),
    [],
  );
});
