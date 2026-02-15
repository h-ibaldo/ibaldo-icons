import { forwardRef } from 'react';

const ChartCandlestick22 = forwardRef(({
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
    <rect x="2.016630450973025" y="10.000000000480213" width="4" height="8.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.016630450973025" y1="7.000000000480213" x2="4.016630450973025" y2="10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.016630450973025" y1="19.000000000480213" x2="4.016630450973025" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.016630450973025" y="10.000000000480213" width="4" height="5.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="7.000000000480213" x2="12.016630450973025" y2="10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="16.000000000480213" x2="12.016630450973025" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.016630450973025" y="5.000000000480213" width="4" height="10.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="2.000000000480213" x2="20.016630450973025" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="16.000000000480213" x2="20.016630450973025" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartCandlestick22.displayName = 'ChartCandlestick22';

export default ChartCandlestick22;
export { ChartCandlestick22 };
