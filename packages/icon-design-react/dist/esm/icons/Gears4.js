import { forwardRef } from 'react';

const Gears4 = forwardRef(({
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
    <g>
  <polyline points="11.572265625 19.723144531248181 12.634033203121362 21.562255859367724 14.365966796871362 20.562255859367724 13.305419921871362 18.725341796867724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.694580078121362 18.725341796867724 5.634033203121362 20.562255859367724 7.365966796871362 21.562255859367724 8.427734375 19.723144531248181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.100830078121362 13.999999999998181 3 13.999999999998181 3 15.999999999998181 5.100830078121362 15.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.427734375 10.276855468748181 7.365966796871362 8.437744140617724 5.634033203121362 9.437744140617724 6.694580078121362 11.274658203117724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.305419921871362 11.274658203117724 14.365966796871362 9.437744140617724 12.634033203121362 8.437744140617724 11.572265625 10.276855468748181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.899169921871362 15.999999999998181 17 15.999999999998181 17 13.999999999998181 14.899169921871362 13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="10" cy="14.999999999998181" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <polyline points="19.723144531319122 7.427734375207365 21.562255859491415 6.365966797167857 20.562255859571451 4.634033203368745 18.725341797020519 5.694580078288709" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="20.562255859182187 13.365966797118745 21.562255859262223 11.634033203417857 19.723144531180878 10.572265625207365" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.000000000221917 4.100830078168656 16.000000000320142 2.000000000038199 14.000000000309228 1.999999999949068 14.000000000221917 4.100830078077706" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.274658203121362" y1="5.694580078117724" x2="9.437744140621362" y2="4.634033203117724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.72314453125,10.572265624998181l.012939453121362.007446289060681c.169555664069776-.495483398441138.263916015628638-1.025512695310681.263916015628638-1.579711914060681,0-2.761474609380457-2.238525390628638-5-5-5-1.380615234378638,0-2.630737304691138.559692382810681-3.535522460941138,1.464477539060681" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Gears4.displayName = 'Gears4';

export default Gears4;
export { Gears4 };
