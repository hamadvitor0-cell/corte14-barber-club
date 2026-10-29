"use client";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
export function Marquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`marquee ${paused ? "is-paused" : ""}`}>
      <div className="marquee-window">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i}>
              CORTE <i>✳</i> PRECISÃO <i>✳</i> ESTILO <i>✳</i> ATITUDE{" "}
              <i>✳</i>{" "}
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">Corte, precisão, estilo, atitude.</span>
      <button
        className="marquee-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Retomar faixa animada" : "Pausar faixa animada"}
        aria-pressed={paused}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </div>
  );
}
