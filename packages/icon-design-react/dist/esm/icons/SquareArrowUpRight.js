import { forwardRef } from 'react';

const SquareArrowUpRight = forwardRef(({
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
    <rect x="1.999999998563908" y="1.999999999045031" width="20" height="20" rx="1.999999999998408" ry="1.999999999998408" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.999999999998181 8.999999999045031 14.999999999998181 8.999999999045031 14.999999999998181 13.999999999045031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999999998181" y1="14.999999999045031" x2="14.999999999998181" y2="8.999999999045031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SquareArrowUpRight.displayName = 'SquareArrowUpRight';

export default SquareArrowUpRight;
export { SquareArrowUpRight };
