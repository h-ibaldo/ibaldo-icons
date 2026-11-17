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
  <polyline points="2.0252685457599 4.000000001481567 9.0252685457599 4.000000001481567 9.0252685457599 2.000000001481567 15.0252685457599 2.000000001481567 15.0252685457599 4.000000001481567 22.0252685457599 4.000000001481567"/>
  <path d="M4.0252685457599,4.000000001481567v16c0,1.10456949966283.895430500338989,2,2,2h12c1.104569499661011,0,2-.89543050033717,2-2V4.000000001481567"/>
  <line x1="9.025268545770814" y1="16.000000001481567" x2="15.025268545770814" y2="10.000000001479748"/>
  <line x1="15.025268545899962" y1="16.000000001346962" x2="9.025268545628933" y2="10.000000001614353"/>
</svg>
