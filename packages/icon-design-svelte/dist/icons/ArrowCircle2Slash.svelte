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
  <polyline points="19.99999999963984 1.99999999963984 19.999999999688953 5.999999999959982 15.999999999379725 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="2" y1="2.00000000044929" x2="22.000000000896762" y2="21.999999999548891" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <path d="M21.949523926185066,10.999999999559805c.032653808608302.328979492180224.050476074247854.662353515619543.050476074264225.999999999989086.000000000123691,2.761474609380457-1.119323730232281,5.26147460942957-2.928955077810315,7.071044922009605" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.928955078255967,4.928955078439685c1.809692382730645-1.809570312580036,4.309631347525283-2.928955078310537,7.071044921744033-2.928955078439685,3.2684326171875-.000000000141881,6.161621093820941,1.575195312228971,7.98638916033633,3.99999999963984" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.395874024306977,21.395874023288343c-1.06170654295056.383911132859794-2.201721191377146.604125976660725-3.395874023410215.604125976711657-5.5228271484375.000000000249202-10.000000000200089-4.477172851111391-10.000000000447471-9.99999999955071-.00000000005457-1.194091796869543.220153808488249-2.334228515630457.604125976409705-3.395874023461147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
