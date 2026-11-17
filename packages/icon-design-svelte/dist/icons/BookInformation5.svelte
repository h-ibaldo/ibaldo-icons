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
  <rect x="5.025268548599342" y="2.998779303362426" width="15" height="18" rx="2" ry="2"/>
  <line x1="3.025268548599342" y1="6.998779303362426" x2="7.025268548599342" y2="6.998779303362426"/>
  <line x1="3.025268548599342" y1="11.998779303362426" x2="7.025268548599342" y2="11.998779303362426"/>
  <line x1="3.025268548599342" y1="16.998779303362426" x2="7.025268548599342" y2="16.998779303362426"/>
  <line x1="13.025268548599342" y1="8.988779303362207" x2="13.025268548599342" y2="8.998779303362426"/>
  <line x1="13.025268548599342" y1="14.998779303362426" x2="13.025268548599342" y2="11.998779303362426"/>
</svg>
