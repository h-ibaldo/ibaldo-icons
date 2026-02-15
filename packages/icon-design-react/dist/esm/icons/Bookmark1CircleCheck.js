import { forwardRef } from 'react';

const Bookmark1CircleCheck = forwardRef(({
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
    <path d="M16.999999973079866,5.999999999998181l.000000000220098-3c0-.552284749830505-.447715250170404-1-1-1H3.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4-.000000000220098-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <circle cx="16.999999973079866" cy="10.999999999998181" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="15.499999973079866 10.999999997568011 16.499999973079866 12.000000002428351 18.499999973079866 9.999999997568011" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

Bookmark1CircleCheck.displayName = 'Bookmark1CircleCheck';

export default Bookmark1CircleCheck;
export { Bookmark1CircleCheck };
