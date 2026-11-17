import { forwardRef } from 'react';

const Lock5CheckOpen = forwardRef(({
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
    <polyline points="8.949462885142566 15.331108250880789 10.949462885142566 17.331108244550705 14.949462885142566 13.331108244732604" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885142566" cy="15.000000000480213" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.527343744112841,5.000000000480213c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574221478,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock5CheckOpen.displayName = 'Lock5CheckOpen';

export default Lock5CheckOpen;
export { Lock5CheckOpen };
