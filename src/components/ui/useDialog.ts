"use client";
import { useEffect, useRef } from "react";
let locks = 0;
let previousOverflow = "";
export function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const focused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    if (locks === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    locks++;
    dialog.showModal();
    const cancel = (event: Event) => {
      event.preventDefault();
      onCloseRef.current();
    };
    dialog.addEventListener("cancel", cancel);
    return () => {
      dialog.removeEventListener("cancel", cancel);
      dialog.close();
      locks--;
      if (locks === 0) document.body.style.overflow = previousOverflow;
      focused?.focus({ preventScroll: true });
    };
  }, [open]);
  return ref;
}
