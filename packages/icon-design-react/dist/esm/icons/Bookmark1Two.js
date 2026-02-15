import { forwardRef } from 'react';

const Bookmark1Two = forwardRef(({
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
    <path d="M18,1.999999999998181H6c-.552284749830505,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10,8.999999999998181v-.000001999998858c0-1.104568388791449.895429604910532-1.999998000001142,1.999998000000232-1.999998000001142h.000003999999535c1.1045683950897,0,1.999998000000232.895429604910532,1.999998000000232,1.999998000001142v.171575703679991c0,.530432449249929-.210713470019982,1.039139766338849-.585785851840228,1.414212148160004l-3.414214148159772,3.414214148158862h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bookmark1Two.displayName = 'Bookmark1Two';

export default Bookmark1Two;
export { Bookmark1Two };
