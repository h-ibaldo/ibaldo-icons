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
  <path d="M13.82 4.07L20.945 16.898C21.926 18.664 20.074 20.648 18.246 19.797L13.16 17.422C12.426 17.078 11.574 17.078 10.84 17.422L5.754 19.797C3.926 20.648 2.074 18.664 3.055 16.898L10.18 4.07C10.973 2.641 13.027 2.641 13.82 4.07Z"/>
</svg>
