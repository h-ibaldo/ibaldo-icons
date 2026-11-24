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
  <path d="M7.781 18.172L5.777 16.172C4.188 14.578 2.988 12.641 2.277 10.504C1.723 8.844 1.922 7.023 2.824 5.52L3.754 3.973C4.113 3.367 4.766 3 5.469 3L6.199 3C6.867 3 7.492 3.336 7.863 3.891L9.922 6.98C10.59 7.98 10.227 9.34 9.152 9.879L7.27 10.82L7.73 11.746C8.699 13.684 10.27 15.25 12.203 16.219L13.133 16.684L14.074 14.801C14.613 13.723 15.973 13.363 16.973 14.031L20.063 16.09C20.617 16.461 20.953 17.086 20.953 17.754L20.953 18.484C20.953 19.188 20.582 19.836 19.98 20.199L18.43 21.129C16.93 22.027 15.109 22.23 13.445 21.676C11.313 20.965 9.371 19.766 7.781 18.172Z"/>
  <path d="M16 8L15 8C14.449 8 14 8.449 14 9C14 9.551 14.449 10 15 10C15.551 10 16 9.551 16 9L16 3L22 2L22 8C22 8.551 21.551 9 21 9C20.449 9 20 8.551 20 8C20 7.449 20.449 7 21 7L22 7"/>
</svg>
