import { forwardRef } from 'react';

const CheckMarkDoubleSquare = forwardRef(({
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
    <rect x="1.974731440099276" y="2.000000003885361" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.974731440099276 9.000000003885361 12.974731440099276 15.000000003885361 9.974731440099276 12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <line x1="12.611083979159957" y1="10.636352542947861" x2="13.974731440099276" y2="9.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731440099276" y1="12.000000003885361" x2="8.974731440099276" y2="15.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

CheckMarkDoubleSquare.displayName = 'CheckMarkDoubleSquare';

export default CheckMarkDoubleSquare;
export { CheckMarkDoubleSquare };
