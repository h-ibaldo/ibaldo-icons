import { forwardRef } from 'react';

const Music1 = forwardRef(({
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
    <ellipse cx="5.5" cy="18.999999999998181" rx="3.5" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <ellipse cx="18.5" cy="16.999999999998181" rx="3.5" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9" y1="7.999999999998181" x2="22" y2="5.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Music1.displayName = 'Music1';

export default Music1;
export { Music1 };
