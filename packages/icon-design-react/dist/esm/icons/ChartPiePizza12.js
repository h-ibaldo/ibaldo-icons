import { forwardRef } from 'react';

const ChartPiePizza12 = forwardRef(({
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
    <circle cx="12.016630450973025" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.016630450973025 2.000000000480213 12.016630450973025 12.000000000480213 19.087675372848025 4.928955078605213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="18.000000000480213" x2="12.016630450973025" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartPiePizza12.displayName = 'ChartPiePizza12';

export default ChartPiePizza12;
export { ChartPiePizza12 };
