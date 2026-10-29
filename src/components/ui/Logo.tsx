export function Logo({
  className = "",
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      className={`logo ${className}`}
      viewBox="0 0 330 94"
      fill="none"
      role="img"
      aria-label="Corte 14 — Barber Club"
    >
      <g fill={light ? "currentColor" : "#111210"}>
        <path d="M43 12H14V58H43V47H26V23H43V12ZM51 12H85V58H51V12ZM63 23V47H73V23H63ZM94 12H127V39H119L131 58H117L106 39V58H94V12ZM106 23V29H115V23H106ZM135 12H173V23H160V58H148V23H135V12ZM181 12H213V23H193V29H209V40H193V47H213V58H181V12Z" />
        <path
          d="M236 12H253V58H241V25H230L236 12ZM267 12H279V32H291V12H303V58H291V43H267V12Z"
          className="logo-number"
        />
        <path d="M229 65H305V68H229V65Z" className="logo-number" />
      </g>
      <text
        x="15"
        y="85"
        fill="currentColor"
        fontFamily="Arial,sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="8.2"
      >
        BARBER CLUB
      </text>
      <path
        d="M320 10L312 61"
        stroke="currentColor"
        strokeWidth="2"
        className="logo-number"
      />
    </svg>
  );
}
