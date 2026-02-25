import { forwardRef } from 'react';

const Tab3ThreeDotsSettings2 = forwardRef(({
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
    <polygon points="22.000000004678441 21.999999999999091 2.000000004678441 21.999999999999091 2.000000004678441 1.999999999999091 10.000000004678441 1.999999999999091 13.000000004678441 5.999999999999091 22.000000004678441 5.999999999999091 22.000000004678441 21.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.000000004678441 1.999999999999091 22.000000004678441 1.999999999999091 22.000000004678441 5.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000004678441" y1="14.009999999999309" x2="8.000000004678441" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000004678441" y1="14.009999999999309" x2="12.000000004678441" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000004678441" y1="14.009999999999309" x2="16.000000004678441" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab3ThreeDotsSettings2.displayName = 'Tab3ThreeDotsSettings2';

export default Tab3ThreeDotsSettings2;
export { Tab3ThreeDotsSettings2 };
