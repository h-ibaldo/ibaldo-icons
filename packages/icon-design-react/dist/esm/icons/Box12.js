import { forwardRef } from 'react';

const Box12 = forwardRef(({
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
    <line x1="12" y1="8.999999999998181" x2="20" y2="5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 8.999999999998181 14 12.999999999998181 22 9.999999999998181 20 5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4 5.999999999998181 2 9.999999999998181 4 10.749999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="8.999999999998181" x2="12" y2="20.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4" y1="5.999999999998181" x2="12" y2="8.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="20 5.999999999998181 12 2.999999999998181 4 5.999999999998181 4 17.999999999998181 12 20.999999999998181 20 17.999999999998181 20 10.749999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Box12.displayName = 'Box12';

export default Box12;
export { Box12 };
