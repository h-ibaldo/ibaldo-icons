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
  <path d="M13.999999999959982,21.795837402209145c4.563842773441138-.926879882810681,8-4.958374023441138,8-9.795837402340112,0-5.522888183601026-4.477172851558862-10-10-10C6.814758300739413,1.999999999869033,2.552368164020663,5.946716308459145,2.050476074180551,10.999999999869033"/>
  <path d="M2.999999999959982,21.999999999869033v-1c0-1.656854249489697,1.343145750499389-3,3-3h1c1.656854249489697,0,3,1.343145750510303,3,3v1"/>
  <polyline points="11.999999999949068 6.999999999869033 11.999999999949068 11.999999999869033 16.999999999949068 11.999999999887223"/>
  <rect x="4.000000099005206" y="12.999999995775156" width="4.999999801909553" height="5.000000008186845" rx="2.499997398888987" ry="2.499997398888987"/>
</svg>
