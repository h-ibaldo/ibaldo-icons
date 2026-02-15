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
  <polyline points="6.97473145017193 7.999999999336069 11.974731451290609 3.000000000462023 16.97473145017193 8.000000001585249" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.974731448374769" y1="16.000000000462023" x2="11.974731451290609" y2="3.000000000462023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.974731450037325,18.000000000462023v1c0,1.104569499660101.895430500335351,2.000000000000909,2,2.000000000000909h16c1.104569499661011,0,2-.895430500340808,2-2.000000000000909v-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
