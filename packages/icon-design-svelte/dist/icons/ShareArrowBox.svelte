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
  <path d="M12,1.999999999998181h-7c-1.656854249489697,0-3,1.343145750511212-3,3v14c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3v-6"/>
  <polyline points="18 1.999999999998181 22 5.999999999998181 18 9.999999999998181"/>
  <path d="M7,16.999999999998181v-2c0-4.970562748480006,4.029437251519994-9,9-9h6"/>
</svg>
