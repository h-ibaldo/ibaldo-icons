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
  <circle cx="11.974731450040053" cy="15.000000003885361" r="7.000000000000001"/>
  <path d="M16.552612309009419,5.000000003885361c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574220569,0-5,2.23858642578125-5,5v3"/>
</svg>
