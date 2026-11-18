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
  <path d="M11 13.102L10.586 13.516C9.023 15.078 9.023 17.609 10.586 19.172L10.93 19.516C12.492 21.078 15.023 21.078 16.586 19.516L20.93 15.172C22.492 13.609 22.492 11.078 20.93 9.516L20.586 9.172C19.219 7.805 17.109 7.633 15.559 8.66"/>
  <path d="M13 17.102L13.414 16.688C14.977 15.125 14.977 12.59 13.414 11.031L13.07 10.688C11.508 9.125 8.977 9.125 7.414 10.688L3.07 15.031C1.508 16.59 1.508 19.125 3.07 20.688L3.414 21.031C4.781 22.395 6.891 22.566 8.441 21.543"/>
  <path d="M2 2L9 2"/>
  <path d="M2 5L9 5"/>
  <path d="M2 8L5 8"/>
</svg>
