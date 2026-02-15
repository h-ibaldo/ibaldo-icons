import { forwardRef } from 'react';

const TouchScreenSwipeDown1 = forwardRef(({
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
    viewBox="0 0 24 24.000000000001819"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="9.025268549155953 16.998782739599847 12.025268549155953 19.998782739599847 15.025268549155953 16.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268549155953" y1="11.998782739599847" x2="12.025268549155953" y2="19.998782739599847" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268549155953" cy="7.998782739599847" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenSwipeDown1.displayName = 'TouchScreenSwipeDown1';

export default TouchScreenSwipeDown1;
export { TouchScreenSwipeDown1 };
