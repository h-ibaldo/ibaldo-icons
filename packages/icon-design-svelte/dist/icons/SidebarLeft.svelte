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
  <rect x="1.99999997206578" y="1.997697219891506" width="20" height="19.999864816289573" rx="1.999999999975455" ry="1.999999999975455"/>
  <line x1="8.999999972054866" y1="1.997562036587624" x2="8.999999972054866" y2="21.997562036587624"/>
  <line x1="8.999999972054866" y1="6.997562036587624" x2="1.999999972054866" y2="6.997562036587624"/>
</svg>
