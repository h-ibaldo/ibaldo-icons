import { forwardRef } from 'react';

const TouchScreenSwipeDown22 = forwardRef(({
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
    <polyline points="9.025268549155953 18.998782739599847 12.025268549155953 21.998782739599847 15.025268549155953 18.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="13.998782739599847" x2="12.025268549155953" y2="21.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268549155953" cy="5.998782739599847" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenSwipeDown22.displayName = 'TouchScreenSwipeDown22';

export default TouchScreenSwipeDown22;
export { TouchScreenSwipeDown22 };
