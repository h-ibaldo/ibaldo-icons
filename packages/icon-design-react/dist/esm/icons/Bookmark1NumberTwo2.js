import { forwardRef } from 'react';

const Bookmark1NumberTwo2 = forwardRef(({
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
    <path d="M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.000000026693669,3.999999999998181v-.000001999998858c0-1.104568388791449.895429604910532-1.999998000001142,1.999998000001142-1.999998000001142h.000004000001354c1.10456839509061,0,1.999997999997504.895429604910532,1.999997999997504,1.999998000001142v.171575703679991c0,.530432449249929-.210713470014525,1.039139766338849-.585785851839319,1.414212148160004l-3.414214148160681,3.414214148158862h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bookmark1NumberTwo2.displayName = 'Bookmark1NumberTwo2';

export default Bookmark1NumberTwo2;
export { Bookmark1NumberTwo2 };
