import { forwardRef } from 'react';

const DashboardLayout3 = forwardRef(({
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
    <rect x="2.999999990799552" y="2.000000000448381" width="18" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000015979822" y1="2.000000000448381" x2="12.000000015979822" y2="22.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.999999990799552" y1="9.000000000448381" x2="12.000000015979822" y2="9.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000015979822" y1="15.000000000448381" x2="20.999999990799552" y2="15.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DashboardLayout3.displayName = 'DashboardLayout3';

export default DashboardLayout3;
export { DashboardLayout3 };
