import { forwardRef } from 'react';

const UpvoteArrowUpDown3 = forwardRef(({
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
    <polygon points="7.016630450972116 9.000000000480213 12.016630450972116 3.000000000480213 17.016630450972116 9.000000000480213 7.016630450972116 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="17.016630450972116 15.000000000480213 12.016630450972116 21.000000000480213 7.016630450972116 15.000000000480213 17.016630450972116 15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UpvoteArrowUpDown3.displayName = 'UpvoteArrowUpDown3';

export default UpvoteArrowUpDown3;
export { UpvoteArrowUpDown3 };
