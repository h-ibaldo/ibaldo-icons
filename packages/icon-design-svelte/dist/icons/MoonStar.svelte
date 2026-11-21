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
  <path d="M2 12C2 6.477 6.477 2 12 2C12.555 2 13.102 2.047 13.637 2.133C10.422 2.77 8 5.602 8 9C8 12.867 11.133 16 15 16C18.398 16 21.23 13.578 21.867 10.363C21.953 10.898 22 11.441 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"/>
  <path d="M13 8L19 8"/>
  <path d="M14.5 10.598L17.5 5.402"/>
  <path d="M14.5 5.402L17.5 10.598"/>
</svg>
