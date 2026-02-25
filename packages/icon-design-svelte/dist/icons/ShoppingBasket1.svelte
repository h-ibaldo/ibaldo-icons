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
  <path d="M18.204487379680359,21.999999999998181H5.795512620319641c-.465655982399767,0-.86968402121056-.321409403833968-.974391195699354-.775140493300569l-2.538461538460979-11c-.144603787170126-.626616411092982.331306145400958-1.224859506699431.974391195701173-1.224859506699431h17.485897836279037c.643085050300215,0,1.1189949828713.598243095606449.974391195701173,1.224859506699431l-2.538461538460979,11c-.104707174499708.453731089466601-.508735213310501.775140493300569-.974391195699354.775140493300569Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="12" y1="12.999999999998181" x2="12" y2="17.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="8" y1="12.999999999998181" x2="8" y2="17.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="16" y1="12.999999999998181" x2="16" y2="17.999999999998181" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5,8.999999999998181l2.480502255930332-5.787838597156224c.315157583880136-.7353676957282,1.038233842878981-1.212161402843776,1.838290060029976-1.212161402843776h5.362415368079382c.800056217150996,0,1.52313247614984.476793707115576,1.83829006004089,1.212161402843776l2.480502255919419,5.787838597156224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
