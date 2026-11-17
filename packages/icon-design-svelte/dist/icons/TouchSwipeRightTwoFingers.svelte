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
  <polyline points="17.025268544746723 2.998779304674827 20.025268544335631 5.998779305078642 17.025268543935454 8.998779304674827"/>
  <line x1="12.025268544335631" y1="5.9987793040018" x2="20.025268544335631" y2="5.998779305078642"/>
  <circle cx="8.025268544333358" cy="5.99877930346338" r="4.000000000001137"/>
  <polyline points="17.025268544746723 14.998779304674827 20.025268544335631 17.998779305078642 17.025268543935454 20.998779304674827"/>
  <line x1="12.025268544335631" y1="17.9987793040018" x2="20.025268544335631" y2="17.998779305078642"/>
  <circle cx="8.025268544333358" cy="17.99877930346338" r="4.000000000001137"/>
</svg>
