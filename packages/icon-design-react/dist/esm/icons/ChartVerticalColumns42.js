import { forwardRef } from 'react';

const ChartVerticalColumns42 = forwardRef(({
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
    <polyline points="5.016630450163575 21.000000000010914 5.016630450163575 12.000000000010914 10.016630450163575 12.000000000010914 10.016630450163575 3.000000000010914 15.016630450163575 3.000000000010914 15.016630450163575 8.000000000010914 20.016630450163575 8.000000000010914 20.016630450163575 21.000000000010914" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.766630450163575" y1="21.000000000050932" x2="2.266630450163575" y2="21.000000000040018" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.016630450163575" y1="12.000000000010914" x2="10.016630450163575" y2="21.000000000010914" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.016630450163575" y1="8.000000000010914" x2="15.016630450163575" y2="21.000000000010914" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChartVerticalColumns42.displayName = 'ChartVerticalColumns42';

export default ChartVerticalColumns42;
export { ChartVerticalColumns42 };
