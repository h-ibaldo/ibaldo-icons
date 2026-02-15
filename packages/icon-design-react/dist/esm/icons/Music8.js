import { forwardRef } from 'react';

const Music8 = forwardRef(({
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
    <ellipse cx="8" cy="18.499999999998181" rx="4" ry="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20,6.999999999998181v-.000004999999874c0-2.761420986889789-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-3.000004999999874v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Music8.displayName = 'Music8';

export default Music8;
export { Music8 };
