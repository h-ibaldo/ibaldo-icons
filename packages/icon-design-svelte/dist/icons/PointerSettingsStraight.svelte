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
  <path d="M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z"/>
  <path d="M20.5 7C20.5 8.934 18.934 10.5 17 10.5C15.066 10.5 13.5 8.934 13.5 7C13.5 5.066 15.066 3.5 17 3.5C18.934 3.5 20.5 5.066 20.5 7Z"/>
  <path d="M17 7L17 7"/>
  <path d="M17 2L17 3.5"/>
  <path d="M17 10.5L17 12"/>
  <path d="M22 7L20.5 7"/>
  <path d="M13.5 7L12 7"/>
  <path d="M20.535 10.535L19.473 9.473"/>
  <path d="M14.527 4.527L13.465 3.465"/>
  <path d="M13.465 10.535L14.527 9.473"/>
  <path d="M19.473 4.527L20.535 3.465"/>
</svg>
