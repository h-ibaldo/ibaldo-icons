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
  <path d="M10.029410036418994,21.970769791338171l.000008920831533-7-3.964829355350957,1.972687661900636c-.679522769300092.338094294309485-1.403882796270409-.371621352671355-1.079735753179193-1.057906745430955L11.303384003489555,2.507933847078675c.289095405110857-.612073927179154,1.160349720530576-.610838735730795,1.447708472640443.002052439918771l6.268231328400361,13.369154897402041c.322387114219964.687601181418358-.404934401331047,1.395409675747942-1.083516219630837,1.054446991609439l-3.906379706810185-1.962813730320704-.000008920838809,7-4.000008920831533-.00000465435005Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
