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
  <line x1="20.127668362430086" y1="13.460001109349832" x2="5.092586429799667" y2="18.932323402408656"/>
  <path d="M18.248283120849919,14.144041395979002l-2.736163198649592-7.517546604467498c-1.133353922380593-3.113864310071222-4.576404584279771-4.719385201180557-7.690268894360088-3.586031278802693l-.000011276310033.000004104240361c-3.113864310080316,1.133353922381502-4.719385201180557,4.576404584280681-3.586031278799965,7.690268894359178l2.736163198649592,7.517546604471136"/>
  <line x1="10.219437486220158" y1="21.323013312299736" x2="13.978207969379582" y2="19.954932739041396"/>
</svg>
