import { forwardRef } from 'react';

const ArrowCircle4Slash = forwardRef(({
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
    <polyline points="4.00000000036016 2 4.000000000491127 6.000000000320142 8.000000000800355 6.000000000178261" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="2" x2="2" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <path d="M2.05047607421875,11c-.03265380859375.328979492189319-.05047607421875.662353515628638-.05047607421875,1,0,2.761474609378638,1.11932373046875,5.261474609378638,2.928955078125,7.071044921878638" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.071044921875,4.928955078128638c-1.809692382814319-1.8095703125-4.30963134765625-2.928955078128638-7.071044921875-2.928955078128638-3.268432617189319,0-6.16162109375,1.5751953125-7.98638916015625,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.604125976560681,21.395874023439319c1.061706542970569.383911132810681,2.201721191408069.604125976560681,3.395874023439319.604125976560681,5.522827148435681,0,10-4.477172851560681,10-10,0-1.194091796871362-.22015380859375-2.334228515621362-.604125976564319-3.395874023441138" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

ArrowCircle4Slash.displayName = 'ArrowCircle4Slash';

export default ArrowCircle4Slash;
export { ArrowCircle4Slash };
