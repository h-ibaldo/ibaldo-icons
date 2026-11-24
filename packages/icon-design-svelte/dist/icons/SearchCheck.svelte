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
  <circle cx="10.999999993264282" cy="10.998779299955459" r="8.999999999998636"/>
  <line x1="17.363952629983032" y1="17.362731936675118" x2="21.999999993264282" y2="21.998779299956368"/>
  <polyline points="7.999999993283382 10.998779299956368 9.999999993283382 12.998779299956368 13.999999993283382 8.998779299956368"/>
</svg>
