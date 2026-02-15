import { forwardRef } from 'react';

const Lock5UnlockedOpen = forwardRef(({
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
    <circle cx="11.974731450040053" cy="15.000000003885361" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.552612309009419,5.000000003885361c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574220569,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock5UnlockedOpen.displayName = 'Lock5UnlockedOpen';

export default Lock5UnlockedOpen;
export { Lock5UnlockedOpen };
