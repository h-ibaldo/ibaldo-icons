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
  <polyline points="12.050537104490104 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 11.050537104500108 1.997565477288845 11.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="22.050537104500108" y1="1.997565477288845" x2="15.050537104500108" y2="1.997565477288845" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22.050537104500108 16.997565477285207 18.050537104500108 21.997565477285207 15.050537104500108 18.997565477285207" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
