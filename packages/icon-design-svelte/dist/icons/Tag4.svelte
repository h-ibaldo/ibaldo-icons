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
  <path d="M19.974731438273011,18.998779300285605h-11.080130155060033c-.583849774500777,0-1.138548808089581-.255125457006216-1.51851320472997-.698417253086518l-4.285714285710128-5c-.641982393709441-.748979459309339-.641982393709441-1.854186034517625,0-2.603165493823326l4.285714285710128-5c.379964396640389-.443291796080302.934663430229193-.698417253090156,1.51851320472997-.698417253090156h11.080130155060033c1.104569499659192,0,2,.895430500338989,2,2v10c0,1.104569499661011-.895430500340808,2-2,2Z"/>
</svg>
