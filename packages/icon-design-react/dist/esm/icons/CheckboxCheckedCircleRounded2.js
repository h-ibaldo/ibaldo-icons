import { forwardRef } from 'react';

const CheckboxCheckedCircleRounded2 = forwardRef(({
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
    <polyline points="8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 19.949462885140747 6.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.514404291390747,7.435058594230213c-1.445373535150793-2.074645996090112-3.844787597650793-3.43505859375-6.56494140625-3.43505859375-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

CheckboxCheckedCircleRounded2.displayName = 'CheckboxCheckedCircleRounded2';

export default CheckboxCheckedCircleRounded2;
export { CheckboxCheckedCircleRounded2 };
