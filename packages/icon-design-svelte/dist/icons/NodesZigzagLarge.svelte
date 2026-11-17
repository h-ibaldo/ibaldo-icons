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
  <circle cx="5" cy="9.999999999998181" r="3"/>
  <circle cx="13" cy="18.999999999998181" r="3"/>
  <circle cx="19" cy="4.999999999998181" r="3"/>
  <line x1="14.181396484380457" y1="16.243164062498181" x2="17.818603515630457" y2="7.756835937498181"/>
  <line x1="6.9853515625" y1="12.233520507808862" x2="11.0146484375" y2="16.766479492188409"/>
</svg>
