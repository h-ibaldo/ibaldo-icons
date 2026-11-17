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
  <path d="M22.025268548599342,11.498779303362426l-7,10.5-12-3-.000000888179784-.000001940898983c-.586376851719251-1.281381454300572-.914672186630924-2.665695142539334-.966148104309468-4.073930403752456l-.033851007510748-.926067655348561L10.025268548599342,1.998779303362426l12,3-8,12-12-3"/>
  <line x1="13.535268548599561" y1="6.988779303362207" x2="13.525268548599342" y2="6.998779303362426"/>
  <line x1="10.525268548599342" y1="11.998779303362426" x2="12.025268548599342" y2="9.498779303362426"/>
</svg>
