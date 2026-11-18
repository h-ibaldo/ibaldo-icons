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
  <path d="M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z"/>
  <path d="M21 11L13 11C12.445 11 12 10.555 12 10L12 3C12 2.445 12.445 2 13 2L21 2C21.555 2 22 2.445 22 3L22 10C22 10.555 21.555 11 21 11Z"/>
  <path d="M15 5L19 5"/>
  <path d="M15 8L17.5 8"/>
</svg>
