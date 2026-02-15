import { forwardRef } from 'react';

const CheckboxDropAddSquare1 = forwardRef(({
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
    <polyline points="5.974731440090181 9.000000003874447 7.974731440090181 11.000000003874447 11.974731440090181 7.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.974731440090181" y="2.000000003874447" width="14" height="14" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731440090181,8.000000003874447h3c1.656854249489697,0,3,1.343145750510303,3,3v8c0,1.656854249493335-1.343145750510303,3-3,3h-8c-1.656854249489697,0-3-1.343145750506665-3-3v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxDropAddSquare1.displayName = 'CheckboxDropAddSquare1';

export default CheckboxDropAddSquare1;
export { CheckboxDropAddSquare1 };
