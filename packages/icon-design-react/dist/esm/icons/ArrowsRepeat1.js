import { forwardRef } from 'react';

const ArrowsRepeat1 = forwardRef(({
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
    <polyline points="16.999999999539796 1.999999999728971 19.999999999679858 4.999999999599822 16.999999999809916 7.999999999728971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.000000000650289,13.000000000229193l-.000000000040018-1c-.000000000170076-3.865993248818995,3.134006750879962-7.000000000140062,6.999999999689862-7.000000000320142l10.999999999379725-.000000000309228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.000000001060471 22 4.000000000920409 19.000000000138243 7.000000000800355 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.999999999939973,10.999999999508873l.000000000060027,1c.000000000160071,3.865993248820814-3.134006750879962,7.000000000140062-6.999999999699867,7.000000000309228l-10.999999999379725.000000000320142" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ArrowsRepeat1.displayName = 'ArrowsRepeat1';

export default ArrowsRepeat1;
export { ArrowsRepeat1 };
