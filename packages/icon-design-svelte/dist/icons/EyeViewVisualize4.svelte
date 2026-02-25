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
  <circle cx="12.075805663474966" cy="11.997565472718634" r="4.999999999999545" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.075805663474966,12.020331586000793c-2.27978515625-3.0439453125-5.904296875-5.02276611328125-10-5.02276611328125s-7.72021484375,1.97882080078125-10,5.02276611328125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
