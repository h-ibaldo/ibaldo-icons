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
  <path d="M18.719116210939319,13.967285156248181L6.548095703130457,2.195434570308862c-.57958984375-.560485839840112-1.548095703130457-.149841308590112-1.548095703130457.656372070308862v16.932556152351026c0,.863037109369543,1.086669921880457,1.244445800779431,1.6259765625.57080078125l2.725708007819776-3.40411376953125,2.140869140619543,5.048950195310681,4.203491210941138-1.782348632810681-2.1640625-5.103942871099207,4.467041015619543.419128417970569c.859130859380457.080627441409888,1.34033203125-.965576171871362.720092773439319-1.565551757810681Z"/>
</svg>
