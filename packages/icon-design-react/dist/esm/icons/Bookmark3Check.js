import { forwardRef } from 'react';

const Bookmark3Check = forwardRef(({
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
    <path d="M16.000000026696398,1.999999999998181h-8.000000000001819c-1.656854249492426,0-3,1.343145750509393-3,3v17l7.000000000001819-4,7,4V4.999999999998181c0-1.656854249490607-1.343145750507574-3-3-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.000000053394615 10.999999999998181 11.000000053394615 12.999999999998181 15.000000053394615 7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bookmark3Check.displayName = 'Bookmark3Check';

export default Bookmark3Check;
export { Bookmark3Check };
