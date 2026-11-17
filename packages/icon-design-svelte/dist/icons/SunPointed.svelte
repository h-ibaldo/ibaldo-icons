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
  <polygon points="17.797607421869543 14.401428222658069 22 11.999999999998181 17.797607421869543 9.598571777338293 19.071044921869543 4.92889404296875 14.4013671875 6.202453613277612 12 1.999999999998181 9.5986328125 6.202453613277612 4.928955078119543 4.92889404296875 6.202514648439319 9.598571777338293 2 11.999999999998181 6.202514648439319 14.401428222658069 4.928955078119543 19.071044921867724 9.5986328125 17.797485351558862 12 21.999999999998181 14.4013671875 17.797485351558862 19.071044921869543 19.071044921867724 17.797607421869543 14.401428222658069"/>
  <circle cx="12" cy="11.999999999998181" r="3"/>
</svg>
