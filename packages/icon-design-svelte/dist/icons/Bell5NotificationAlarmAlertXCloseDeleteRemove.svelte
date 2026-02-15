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
  <line x1="19.974731449501633" y1="17.000000000480213" x2="3.974731449501633" y2="17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.974731449501633,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814723412-5.999993999997969-5.999993999997969-5.999993999997969h-.000012000001334c-3.313705185274557,0-5.999994000000697,2.686288814718864-5.999994000000697,5.999993999997969v8.000006000002031" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.974731449501633" y1="21.000000000480213" x2="13.974731449501633" y2="21.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.974731449501633" y1="12.000000000480213" x2="13.974731449501633" y2="8.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="13.974731449501633" y1="12.000000000480213" x2="9.974731449390674" y2="8.000000000589353" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
