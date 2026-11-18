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
  <path d="M16 22L16 20C16 19.449 16.449 19 17 19L19 19C20.656 19 22 17.656 22 16L22 11.5C22 10.672 21.328 10 20.5 10C19.672 10 19 10.672 19 11.5L19 12"/>
  <path d="M8 22L8 20C8 19.449 7.551 19 7 19L5 19C3.344 19 2 17.656 2 16L2 11.5C2 10.672 2.672 10 3.5 10C4.328 10 5 10.672 5 11.5L5 12"/>
  <path d="M9 15L9 13C9 11.344 10.344 10 12 10C13.656 10 15 11.344 15 13L15 15"/>
  <path d="M6 15L18 15"/>
  <path d="M21 7L19 7C18.449 7 18 6.551 18 6L18 4C18 3.449 18.449 3 19 3L21 3C21.551 3 22 3.449 22 4L22 6C22 6.551 21.551 7 21 7Z"/>
  <path d="M13 7L11 7C10.449 7 10 6.551 10 6L10 4C10 3.449 10.449 3 11 3L13 3C13.551 3 14 3.449 14 4L14 6C14 6.551 13.551 7 13 7Z"/>
  <path d="M5 7L3 7C2.449 7 2 6.551 2 6L2 4C2 3.449 2.449 3 3 3L5 3C5.551 3 6 3.449 6 4L6 6C6 6.551 5.551 7 5 7Z"/>
</svg>
