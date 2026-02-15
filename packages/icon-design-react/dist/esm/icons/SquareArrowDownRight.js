import { forwardRef } from 'react';

const SquareArrowDownRight = forwardRef(({
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
    <rect x="2.000000001433364" y="1.999999999043212" width="20" height="20" rx="1.999999999998636" ry="1.999999999998636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.000000002868546 14.999999999045031 15.000000002868546 14.999999999045031 15.000000002868546 9.999999999045031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.000000002868546" y1="8.999999999045031" x2="15.000000002868546" y2="14.999999999045031" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SquareArrowDownRight.displayName = 'SquareArrowDownRight';

export default SquareArrowDownRight;
export { SquareArrowDownRight };
