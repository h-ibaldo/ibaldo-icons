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
  <polyline points="20.974731438316667 4.99877930375078 17.974731438316667 1.99877930375078 14.974731438316667 4.99877930375078"/>
  <line x1="17.974731438316667" y1="9.99877930375078" x2="17.974731438316667" y2="1.99877930375078"/>
  <circle cx="17.974731438316667" cy="17.99877930375078" r="4"/>
  <polyline points="8.974731438316667 4.998779303212359 5.974731438316667 1.998779303212359 2.974731438316667 4.998779303212359"/>
  <line x1="5.974731438316667" y1="9.998779303212359" x2="5.974731438316667" y2="1.998779303212359"/>
  <circle cx="5.974731438316667" cy="17.998779303212359" r="4"/>
</svg>
