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
  <line x1="14.974731449499814" y1="18.000000000480213" x2="20.974731449499814" y2="18.000000000480213"/>
  <line x1="17.974731449499814" y1="15.000000000480213" x2="17.974731449499814" y2="21.000000000480213"/>
  <path d="M20.832946781530154,12.000000000480213c1.491271972659888-1.94085693359375,1.368957519530341-4.72259521484375-.408447265620453-6.500000000000909-1.932983398439319-1.932983398435681-5.067016601569776-1.932983398435681-7,0l-1.5,1.500000000000909-1.5-1.500000000000909c-1.932983398439319-1.932983398435681-5.067016601569776-1.932983398435681-7,0-1.932983398439319,1.932983398438409-1.932983398439319,5.067016601563409,0,7.000000000000909l8.5,8.5"/>
</svg>
