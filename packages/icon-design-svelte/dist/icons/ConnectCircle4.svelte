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
  <circle cx="5" cy="4.999999999998181" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="19" cy="4.999999999998181" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="5" cy="18.999999999998181" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="19" cy="18.999999999998181" r="2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.4794921875,20.334960937498181c1.58251953125,1.05029296875,3.47900390625,1.6650390625,5.5205078125,1.6650390625s3.93798828125-.61474609375,5.5205078125-1.6650390625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.6650390625,6.479492187498181c-1.05029296875,1.58251953125-1.6650390625,3.47900390625-1.6650390625,5.5205078125s.61474609375,3.93798828125,1.6650390625,5.5205078125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.5205078125,3.665039062498181c-1.58251953125-1.05029296875-3.47900390625-1.6650390625-5.5205078125-1.6650390625s-3.93798828125.61474609375-5.5205078125,1.6650390625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.3349609375,17.520507812498181c1.05029296875-1.58251953125,1.6650390625-3.47900390625,1.6650390625-5.5205078125s-.61474609375-3.93798828125-1.6650390625-5.5205078125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
