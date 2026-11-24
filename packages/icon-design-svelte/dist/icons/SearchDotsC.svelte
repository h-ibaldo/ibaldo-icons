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
  <circle cx="8.999999993273377" cy="8.998779299956368" r="7.000000000000001"/>
  <line x1="21.999999993273377" y1="21.998779299956368" x2="13.999999993273377" y2="13.998779299956368"/>
  <line x1="5.999999993283382" y1="9.008779299956586" x2="5.999999993283382" y2="8.998779299956368"/>
  <line x1="8.999999993283382" y1="9.008779299956586" x2="8.999999993283382" y2="8.998779299956368"/>
  <line x1="11.999999993283382" y1="9.008779299956586" x2="11.999999993283382" y2="8.998779299956368"/>
</svg>
