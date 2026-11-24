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
  <circle cx="5" cy="11.999999999998181" r="3"/>
  <circle cx="19" cy="4.999999999998181" r="3"/>
  <circle cx="19" cy="18.999999999998181" r="3"/>
  <line x1="7.6728515625" y1="13.336425781248181" x2="16.3271484375" y2="17.663574218748181"/>
  <line x1="16.3271484375" y1="6.336425781248181" x2="7.6728515625" y2="10.663574218748181"/>
  <line x1="19" y1="7.999999999998181" x2="19" y2="15.999999999998181"/>
</svg>
