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
  <rect x="1.99999997206578" y="1.997697219891961" width="20" height="19.999864816289119" rx="1.99999999997226" ry="1.99999999997226" transform="translate(23.999999944603495 23.995259255601013) rotate(180)"/>
  <line x1="14.999999971625584" y1="1.997562036452109" x2="14.999999972516889" y2="21.997562036452109"/>
  <line x1="14.999999971845682" y1="6.997562036452109" x2="21.999999971845682" y2="6.997562036135605"/>
</svg>
