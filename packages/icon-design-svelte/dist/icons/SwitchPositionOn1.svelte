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
  <circle cx="11.974731413636164" cy="15.998779298523914" r="6.000000000000682" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16.217372100765715" y1="11.756138611421193" x2="12.681838194845113" y2="15.291672517352708" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="1.974738038148786" y="1.9987792977455" width="4.000000003485354" height="5.999999999998408" rx="1.999998005051629" ry="1.999998005051629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="19.974731413605696" y1="1.998779298537556" x2="19.974731413605696" y2="7.998779298537556" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
