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
  <path d="M3 19L21 3"/>
  <path d="M9.152 13.531C9.887 14.422 10.984 15 12.227 15C14.438 15 16.227 13.211 16.227 11L16.227 7.242"/>
  <path d="M12.227 19L12.227 22"/>
  <path d="M15.215 3.363C14.48 2.535 13.422 2 12.227 2C10.02 2 8.227 3.793 8.227 6L8.227 9.578"/>
  <path d="M6.172 16.18C7.633 17.898 9.793 19 12.227 19C15.184 19 17.754 17.387 19.133 15"/>
</svg>
