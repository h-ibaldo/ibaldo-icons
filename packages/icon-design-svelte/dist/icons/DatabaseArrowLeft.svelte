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
  <path d="M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z"/>
  <path d="M2 17L2 7"/>
  <path d="M18 7L18 13"/>
  <path d="M14 15.465C12.824 15.805 11.457 16 10 16C5.582 16 2 14.211 2 12"/>
  <path d="M13.004 20.707C12.074 20.898 11.063 21 10 21C5.582 21 2 19.211 2 17"/>
  <path d="M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z"/>
  <path d="M2 17L2 7"/>
  <path d="M18 7L18 13"/>
  <path d="M14 15.465C12.824 15.805 11.457 16 10 16C5.582 16 2 14.211 2 12"/>
  <path d="M13.004 20.707C12.074 20.898 11.063 21 10 21C5.582 21 2 19.211 2 17"/>
  <path d="M22 19L16 19"/>
  <path d="M19 16L16 19L19 22"/>
</svg>
