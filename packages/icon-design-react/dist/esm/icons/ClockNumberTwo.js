import { forwardRef } from 'react';

const ClockNumberTwo = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <path d="M2,16.999999999887223v-.000001999998858c0-1.104568388791449.895429604910532-1.999998000001142,1.999997999999323-1.999998000001142h.000004000001354c1.104568395088791,0,1.999997999999323.895429604910532,1.999997999999323,1.999998000001142v.171575703679991c0,.530432449249929-.210713470019982,1.039139766338849-.585785851839319,1.414212148160004l-3.414214148160681,3.414214148158862h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10,21.799072265508585c.646240234369543.13134765625,1.31494140625.200927734378638,2,.200927734378638,5.52294921875,0,10-4.477172851558862,10-10,0-5.522827148439319-4.47705078125-10-10-10C6.814697265619543,1.999999999887223,2.552368164060681,5.946777343637223,2.050537109369543,10.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ClockNumberTwo.displayName = 'ClockNumberTwo';

export default ClockNumberTwo;
export { ClockNumberTwo };
