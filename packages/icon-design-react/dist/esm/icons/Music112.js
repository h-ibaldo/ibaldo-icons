import { forwardRef } from 'react';

const Music112 = forwardRef(({
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
    <ellipse cx="9" cy="18.499999499998012" rx="4" ry="3.500000500000169" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20,8.999996998138158c0-1.656853143769695-1.343144854368802-2.999997997789251-2.999997998140316-2.99999799733996h-.000007000000551c-2.209136238749124.000000000580258-3.999995001859133-1.790858763140932-3.999995001859133-3.999995000800482v-.000003999999535,16.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Music112.displayName = 'Music112';

export default Music112;
export { Music112 };
