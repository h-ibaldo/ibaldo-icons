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
  <path d="M15 7.895L12 12.895"/>
  <path d="M13 12.895C13 12.34 12.555 11.895 12 11.895C11.445 11.895 11 12.34 11 12.895C11 13.445 11.445 13.895 12 13.895C12.555 13.895 13 13.445 13 12.895Z"/>
  <path d="M10.934 7C8.129 7.504 6 9.945 6 12.895"/>
  <path d="M18 12.895C18 12.328 17.914 11.781 17.77 11.262"/>
  <path d="M17.988 21L6.016 21C4.305 19.723 2.984 17.898 2.367 15.688C0.887 10.363 3.996 4.852 9.316 3.367C14.637 1.887 20.152 5 21.633 10.316C22.773 14.406 21.191 18.602 17.988 21Z"/>
</svg>
