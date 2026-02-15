import { forwardRef } from 'react';

const HouseHome12 = forwardRef(({
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
    <polyline points="22.00000000018008 11.000000000842192 12.00000000018008 3.000000000842192 2.00000000018008 11.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.00000000018008" y1="21.000000000842192" x2="19.00000000018008" y2="13.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="3.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 15.000000000842192 14.00000000018008 15.000000000842192 14.00000000018008 21.000000000842192 21.00000000018008 21.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.00000000018008" y1="13.000000000842192" x2="5.00000000018008" y2="21.000000000842192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

HouseHome12.displayName = 'HouseHome12';

export default HouseHome12;
export { HouseHome12 };
