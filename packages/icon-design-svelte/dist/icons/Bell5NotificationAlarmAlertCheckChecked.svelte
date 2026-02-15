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
  <line x1="19.974731449499814" y1="17.000000000480213" x2="3.974731449499814" y2="17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.974731449499814,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814719774-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185279105,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v8.000006000002031" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.974731449499814" y1="21.000000000480213" x2="13.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="9.974731449499814 10.000000000480213 11.474731449499814 11.500000000480213 13.974731449499814 9.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
