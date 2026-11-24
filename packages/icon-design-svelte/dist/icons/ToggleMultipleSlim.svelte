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
  <circle cx="18.499999977098923" cy="6.499996563434252" r="3.5"/>
  <path d="M16.055603004439035,3.999996563434252H4.499999977098923c-1.380737304689319,0-2.5,1.1192626953125-2.5,2.5,0,1.38067626953125,1.119262695310681,2.5,2.5,2.5h11.555603027340112"/>
  <circle cx="5.499999977092557" cy="17.499996563728018" r="3.499999999999091"/>
  <path d="M7.944396949749716,19.999996563434252h11.555603027349207c1.380737304680224,0,2.5-1.11932373046875,2.5-2.5,0-1.3807373046875-1.119262695319776-2.5-2.5-2.5H7.944396949749716"/>
</svg>
