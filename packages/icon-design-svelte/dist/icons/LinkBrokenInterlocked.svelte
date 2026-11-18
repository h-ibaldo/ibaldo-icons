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
  <path d="M11 12.898L10.586 13.313C9.023 14.875 9.023 17.41 10.586 18.969L10.93 19.313C12.492 20.875 15.023 20.875 16.586 19.313L20.93 14.969C22.492 13.41 22.492 10.875 20.93 9.313L20.586 8.969C19.219 7.605 17.109 7.434 15.559 8.457"/>
  <path d="M9 2L9 5"/>
  <path d="M15 3L13 5"/>
  <path d="M3 6L6 7"/>
  <path d="M13 16.898L13.414 16.484C14.977 14.922 14.977 12.391 13.414 10.828L13.07 10.484C13.051 10.461 13.023 10.449 13 10.426"/>
  <path d="M6.898 11L3.07 14.828C1.508 16.391 1.508 18.922 3.07 20.484L3.414 20.828C4.781 22.195 6.891 22.367 8.441 21.344"/>
</svg>
