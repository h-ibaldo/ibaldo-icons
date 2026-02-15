import { forwardRef } from 'react';

const ChartVerticalColumns32 = forwardRef(({
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
    <polygon points="9.016630450567391 12.000000000480213 9.016630450567391 3.000000000480213 15.016630450567391 3.000000000480213 15.016630450567391 8.000000000480213 21.016630450567391 8.000000000480213 21.016630450567391 21.000000000480213 15.016630450567391 21.000000000480213 9.016630450567391 21.000000000480213 3.016630450567391 21.000000000480213 3.016630450567391 12.000000000480213 9.016630450567391 12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.016630450567391" y1="3.000000000480213" x2="9.016630450567391" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.016630450567391" y1="8.000000000480213" x2="15.016630450567391" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumns32.displayName = 'ChartVerticalColumns32';

export default ChartVerticalColumns32;
export { ChartVerticalColumns32 };
