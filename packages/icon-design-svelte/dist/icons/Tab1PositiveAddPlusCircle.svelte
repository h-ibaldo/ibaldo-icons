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
  <path d="M8.025268532079281,1.99877930112325h8.558125457540882c.911351166329041,0,1.773289868140637.414269157099625,2.342606428330328,1.125914857337193l2.441874542459118,3.052343178074807c.425551315509438.531939144388161.657393571669672,1.192870657007006.657393571669672,1.874085142662807v.947656821925193" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.025268532079281,21.99877930112325h-6c-1.104569499659192,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500340808-2,2-2h3.558125457540882c.911351166329041,0,1.773289868140637.414269157099625,2.342606428330328,1.125914857333555l2.1985362282594,2.748170285329252c.569316560189691.711645700237568,1.431255261999468,1.125914857337193,2.342606428330328,1.125914857337193h5.558125457539063c1.104569499661011,0,2,.895430500338989,2,2v1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <g>
    <circle cx="17.025268532090195" cy="16.998779306063625" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <g>
      <line x1="17.025268532090195" y1="14.998779301214199" x2="17.025268532090195" y2="18.998779301211471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="19.025268532079281" y1="16.99877930112325" x2="15.025268532079281" y2="16.998779301301511" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
</svg>
