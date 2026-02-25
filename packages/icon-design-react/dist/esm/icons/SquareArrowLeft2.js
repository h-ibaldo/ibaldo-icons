import { forwardRef } from 'react';

const SquareArrowLeft2 = forwardRef(({
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
    <polyline points="11.000000001078661 14.99999999877582 8.000000001609806 11.999999998237399 11.000000002148226 8.99999999877582" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000001609806" y1="11.999999999674401" x2="8.000000001609806" y2="11.999999998237399" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000001614353" y="1.999999999045031" width="20" height="20" rx="1.999999999998408" ry="1.999999999998408" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SquareArrowLeft2.displayName = 'SquareArrowLeft2';

export default SquareArrowLeft2;
export { SquareArrowLeft2 };
