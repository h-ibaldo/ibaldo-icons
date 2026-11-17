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
  <polyline points="6 18 8 20 6 22"/>
  <line x1="2" y1="20" x2="8" y2="20"/>
  <path d="M12,22c5.522827148430224,0,10-4.4771728515625,10-10,0-5.52294921875-4.477172851569776-10-10-10C6.477172851549767,2,2,6.47705078125,2,12c0,1.04541015625.161682128909888,2.052734375.459228515619543,3"/>
  <polyline points="7 14 10 10 14 13 17 9"/>
</svg>
