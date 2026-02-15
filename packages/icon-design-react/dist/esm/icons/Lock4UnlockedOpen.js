import { forwardRef } from 'react';

const Lock4UnlockedOpen = forwardRef(({
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
    <rect x="3.974731450040053" y="13.000000003885361" width="16" height="9" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731450040053,7.000000003885361c0-2.76141357421875-2.238525390610448-5-5-5-2.761474609360448,0-5,2.23858642578125-5,5v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock4UnlockedOpen.displayName = 'Lock4UnlockedOpen';

export default Lock4UnlockedOpen;
export { Lock4UnlockedOpen };
