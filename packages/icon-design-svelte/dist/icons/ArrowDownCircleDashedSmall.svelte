<script>
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {number|string} */
  export let size = 24;
  /** @type {number|string} */
  export let strokeWidth = 1.5;
  /** @type {string} */
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  <path d="M5.371 4.52C5.07 4.785 4.789 5.074 4.523 5.371"/>
  <path d="M4.523 18.625C4.789 18.926 5.07 19.215 5.371 19.48"/>
  <path d="M10 2.199C9.602 2.281 9.215 2.395 8.836 2.52"/>
  <path d="M8.836 21.48C9.215 21.605 9.602 21.719 10 21.801"/>
  <path d="M2.207 14C2.289 14.398 2.395 14.785 2.52 15.164"/>
  <path d="M2.52 8.836C2.395 9.215 2.289 9.602 2.207 10"/>
  <path d="M18.629 19.48C18.93 19.215 19.211 18.926 19.477 18.629"/>
  <path d="M19.477 5.375C19.211 5.074 18.93 4.785 18.629 4.52"/>
  <path d="M14 21.801C14.398 21.719 14.785 21.605 15.164 21.48"/>
  <path d="M15.164 2.52C14.785 2.395 14.398 2.281 14 2.199"/>
  <path d="M21.793 10C21.711 9.602 21.605 9.215 21.48 8.836"/>
  <path d="M21.48 15.164C21.605 14.785 21.711 14.398 21.793 14"/>
  <path d="M15 13L12 16L9 13"/>
  <path d="M12 8L12 16"/>
</svg>
