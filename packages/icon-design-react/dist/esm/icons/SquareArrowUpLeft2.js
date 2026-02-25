import { forwardRef } from 'react';

const SquareArrowUpLeft2 = forwardRef(({
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
    <rect x="2.000000001433364" y="1.999999999045031" width="20" height="20" rx="1.999999999999545" ry="1.999999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.000000000129148 8.999999999132342 9.000000000129148 8.999999998910425 8.999999999909051 13.999999998910425" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999999859938" y1="14.999999999179636" x2="9.000000000129148" y2="8.999999998910425" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SquareArrowUpLeft2.displayName = 'SquareArrowUpLeft2';

export default SquareArrowUpLeft2;
export { SquareArrowUpLeft2 };
