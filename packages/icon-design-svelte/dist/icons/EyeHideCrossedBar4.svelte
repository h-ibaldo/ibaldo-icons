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
  <line x1="3.974731433785564" y1="19.997562040497542" x2="19.974731433785564" y2="3.997562040497542" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <path d="M21.974731433785564,12.020328153778792c-.71337890625-.95269775390625-1.5712890625-1.78521728515625-2.521484375-2.501220703125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.223266590035564,7.748965849091292c-1.326171875-.482177734375-2.754638671869543-.75140380859375-4.24853515625-.75140380859375-4.095703125,0-7.72021484375,1.97882080078125-10,5.02276611328125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g>
    <path d="M15.510375965035564,8.462039579560042c-.905029296869543-.90478515625-2.15478515625-1.4644775390625-3.53564453125-1.4644775390625-2.761474609369543,0-5,2.23858642578125-5,5,0,1.38067626953125.5595703125,2.6307373046875,1.46435546875,3.5355224609375" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.974731433785564,16.997562040497542c2.761474609380457,0,5-2.23858642578125,5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
