import { forwardRef } from 'react';

const UpvoteArrowUpDown1 = forwardRef(({
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
    <line x1="12.016630450972116" y1="2.000000000480213" x2="12.016630450972116" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.016630450972116 6.000000000480213 12.016630450972116 2.000000000480213 16.016630450972116 6.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450972116" y1="22.000000000480213" x2="12.016630450972116" y2="15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.016630450972116 18.000000000480213 12.016630450972116 22.000000000480213 8.016630450972116 18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UpvoteArrowUpDown1.displayName = 'UpvoteArrowUpDown1';

export default UpvoteArrowUpDown1;
export { UpvoteArrowUpDown1 };
