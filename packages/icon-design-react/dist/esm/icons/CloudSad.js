import { forwardRef } from 'react';

const CloudSad = forwardRef(({
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
    <line x1="9.999999999996362" y1="11.499999999718057" x2="9.999999999996362" y2="10.499999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999999996362" y1="11.499999999718057" x2="13.999999999996362" y2="10.499999999718057" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.999999999996362,15.499999999718057c.88323974609375-.511657714840112,1.90582275390625-.809265136729664,3-.809265136729664s2.11676025390625.297607421889552,3,.809265136729664" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.999999999996362,10.999999999727152h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757808862.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390622272-4.89727783203125,3.00518798828125-.0345458984375-.000610351569776-.06805419921875-.00518798828125-.10272216796875-.00518798828125-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621101026,2.46246337890625,5.5,5.5,5.5h10.5c2.20916748046875,0,4-1.790832519538526,4-4,0-2.20916748046875-1.79083251953125-4-4-4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CloudSad.displayName = 'CloudSad';

export default CloudSad;
export { CloudSad };
