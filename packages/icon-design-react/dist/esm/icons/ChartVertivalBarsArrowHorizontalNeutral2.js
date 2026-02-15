import { forwardRef } from 'react';

const ChartVertivalBarsArrowHorizontalNeutral2 = forwardRef(({
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
    <polyline points="19.016630450973025 2.000000000480213 22.016630450973025 5.000000000480213 19.016630450973025 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.016630450973025" y1="5.000000000480213" x2="2.016630450973025" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.016630450681987" y="12.000000000480213" width="4.000000000289219" height="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.016630450683806" y="12.000000000480213" width="4.000000000289219" height="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.016630450973025" y="12.000000000480213" width="4.000000000289219" height="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVertivalBarsArrowHorizontalNeutral2.displayName = 'ChartVertivalBarsArrowHorizontalNeutral2';

export default ChartVertivalBarsArrowHorizontalNeutral2;
export { ChartVertivalBarsArrowHorizontalNeutral2 };
