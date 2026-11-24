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
  <path d="M3.160238702219431,3.999999999998181h17.679522595550225c.640353171760346,0,1.160238702230345.519885530469997,1.160238702230345,1.160238702230345v9.839761297769655c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5V5.160238702217612c0-.640353171754324.519885530465107-1.160238702219431,1.160238702219431-1.160238702219431Z"/>
  <line x1="9" y1="7.999999999998181" x2="15" y2="7.999999999998181"/>
</svg>
