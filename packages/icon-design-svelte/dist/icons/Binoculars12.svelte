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
  <circle cx="5.999988017749274" cy="15.936828612988393" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.999988017749274,15.936828612988393V6.321991030057688c0-1.317288828779056-1.067873588228395-2.385162416998355-2.385162417009269-2.385162416998355h-.000003999999535c-.975303856479513,0-1.85234894774112.593788434889575-2.214567707409515,1.499335331858674l-2.685032781291739,6.712581936730203c-.472481103088285,1.181202754829428-.715233094289943,2.441712469890263-.715233094289943,3.713906771390612v.074175959949571" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="17.999988017749729" cy="15.936828612988393" r="3.999999999999773" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.999988017749274,15.936828612808313l.000000000100044-9.614837582808832c0-1.317288828760866,1.067873588210205-2.38516241697107,2.38516241697107-2.385162416991079h.000004000648914c.975303856561368-.000000000010914,1.852348947890277.593788434969611,2.214567707520473,1.499335332038754l2.685032780760594,6.712581936901188c.47248110289911,1.181202754631158.715233093998904,2.441712469439153.715233093998904,3.713906770679387v.074175960540742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.999988017749274" y1="7.936828612988393" x2="13.999988017749274" y2="7.936828612988393" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.999988017749274" y1="15.936828612988393" x2="13.999988017749274" y2="15.936828612988393" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
