"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ServiceId } from "@/lib/content";
import { Booking } from "@/components/sections/Booking";

const BookingContext = createContext<(service?: ServiceId) => void>(() => {});
export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<{ service?: ServiceId } | null>(null);
  return (
    <BookingContext.Provider value={(service) => setBooking({ service })}>
      {children}
      {booking && (
        <Booking
          preselected={booking.service}
          onClose={() => setBooking(null)}
        />
      )}
    </BookingContext.Provider>
  );
}
export function useBooking() {
  return useContext(BookingContext);
}
export function BookButton({
  children = "Reservar horário",
  service,
  className = "",
}: {
  children?: ReactNode;
  service?: ServiceId;
  className?: string;
}) {
  const open = useBooking();
  return (
    <button className={`button ${className}`} onClick={() => open(service)}>
      <span>{children}</span>
      <ArrowUpRight size={19} aria-hidden="true" />
    </button>
  );
}
