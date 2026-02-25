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
  <circle cx="16.999999980989742" cy="11.997562035418014" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
