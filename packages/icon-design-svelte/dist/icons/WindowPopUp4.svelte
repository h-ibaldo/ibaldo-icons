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
  <path d="M19,20h-5.000000238899702l-1.999999761100298,2-1.999999761090294-2h-5.000000238909706c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499661011.895430500339899-2,2-2h14c1.104569499670106,0,2,.895430500338989,2,2v14c0,1.104569499661011-.895430500329894,2-2,2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="3" y1="8" x2="21" y2="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7" y1="12" x2="17" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="7" y1="16" x2="15" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="6.060537104500327" y1="4.997565477289754" x2="6.050537104500108" y2="4.997565477289754" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.060537104500327" y1="4.997565477289754" x2="9.050537104500108" y2="4.997565477289754" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
