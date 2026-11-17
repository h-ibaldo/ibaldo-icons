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
  <rect x="2" y="2" width="16" height="16" rx="2" ry="2"/>
  <path d="M22,8.000000000000909v11.866666666671335c0,1.178207466298772-.955125867019888,2.133333333327755-2.133333333329574,2.133333333327755h-11.866666666670426"/>
  <line x1="5.035268548598651" y1="4.998779303362426" x2="5.025268548599342" y2="4.998779303362426"/>
  <line x1="8.035268548598651" y1="4.998779303362426" x2="8.025268548599342" y2="4.998779303362426"/>
</svg>
