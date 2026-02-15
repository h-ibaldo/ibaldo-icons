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
  <line x1="2.974731449503452" y1="7.000000000480213" x2="20.974731449503452" y2="7.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2.974731449503452" y1="12.000000000480213" x2="20.974731449503452" y2="12.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.974731449503452" y1="17.000000000480213" x2="14.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="14.974731449503452" y1="2.000000000479304" x2="14.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8.974731449503452" y1="2.000000000479304" x2="8.974731449503452" y2="17.000000000480213" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="20.974731449503452 2.000000000479304 2.974731449503452 2.000000000479304 2.974731449503452 17.000000000480213 8.974731449503452 17.000000000480213 8.974731449503452 22.000000000480213 14.974731449503452 22.000000000480213 14.974731449503452 17.000000000480213 20.974731449503452 17.000000000480213 20.974731449503452 2.000000000479304" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
