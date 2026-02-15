import { forwardRef } from 'react';

const LupeSearchReflex = forwardRef(({
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
    <circle cx="11.025268548872191" cy="10.99877929993454" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.025268548282838,10.99877929993454c0-2.761423749325331,2.238576251260383-5.000000000585715,5.000000000589353-5.000000000585715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.389221185583665" y1="17.36273193665329" x2="22.025268548872191" y2="21.99877929993454" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LupeSearchReflex.displayName = 'LupeSearchReflex';

export default LupeSearchReflex;
export { LupeSearchReflex };
