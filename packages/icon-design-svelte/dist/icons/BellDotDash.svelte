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
  <line x1="19.974731449499814" y1="17.000000000480213" x2="3.974731449499814" y2="17.000000000480213"/>
  <line x1="9.974731449499814" y1="21.000000000480213" x2="13.974731449499814" y2="21.000000000480213"/>
  <circle cx="17.974731449499814" cy="6.000000000480213" r="3"/>
  <path d="M15.578918461220383,4.211303711417713c-1.004211425779431-.757080078128638-2.249633789060681-1.2113037109375-3.604187011720569-1.2113037109375-3.313720703119543,0-6,2.686279296878638-6,6v8h12v-8"/>
</svg>
