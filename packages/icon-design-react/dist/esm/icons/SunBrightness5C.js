import { forwardRef } from 'react';

const SunBrightness5C = forwardRef(({
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
    <circle cx="12" cy="12.000000009875293" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="12.000000009426003" x2="3" y2="12.000000009471478" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21" y1="12.000000010279109" x2="22" y2="12.000000010324584" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.00000000044929" y1="2.000000009875293" x2="12.000000000403816" y2="3.000000009875293" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999999596184" y1="21.000000009875293" x2="11.99999999955071" y2="22.000000009875293" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932188287945" y1="4.928932197848553" x2="7.757359312980043" y2="7.757359322664342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.242640687019957" y1="16.242640697086244" x2="19.07106781170296" y2="19.071067821903853" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.07106781202674" y1="4.928932198174152" x2="16.242640687210951" y2="7.757359322855336" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.757359312779954" y1="16.242640696895251" x2="4.92893218797326" y2="19.071067821578254" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SunBrightness5C.displayName = 'SunBrightness5C';

export default SunBrightness5C;
export { SunBrightness5C };
