import { forwardRef } from 'react';

const ScreensharingScreenComputersArrows2 = forwardRef(({
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
    <rect x="1.974731440099276" y="2.000000003885361" width="10" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.974731440099276" y1="11.000000003885361" x2="8.974731440099276" y2="11.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.974731440099276" y="13.000000003885361" width="10" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.974731440099276" y1="22.000000003885361" x2="18.974731440099276" y2="22.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.974731440099276 7.000000003885361 18.974731440099276 9.000000003885361 20.974731440099276 7.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731440099276,2.000000003885361h1c1.104569499670106,0,2,.895430500338989,2,2v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731440099276 17.000000003885361 4.974731440099276 15.000000003885361 2.974731440099276 17.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.974731440099276,22.000000003885361h-2c-1.104569499659192,0-2-.895430500338989-2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ScreensharingScreenComputersArrows2.displayName = 'ScreensharingScreenComputersArrows2';

export default ScreensharingScreenComputersArrows2;
export { ScreensharingScreenComputersArrows2 };
