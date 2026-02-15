import { forwardRef } from 'react';

const CheckboxDropAddSquare3 = forwardRef(({
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
    <polyline points="6.974731440090181 10.000000003874447 8.974731440090181 12.000000003874447 12.974731440090181 8.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.974731440090181" y="3.000000003874447" width="14" height="14" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.974731440090181,8.000000003874447v10c0,1.656854249493335-1.343145750510303,3-3,3H7.974731440090181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxDropAddSquare3.displayName = 'CheckboxDropAddSquare3';

export default CheckboxDropAddSquare3;
export { CheckboxDropAddSquare3 };
