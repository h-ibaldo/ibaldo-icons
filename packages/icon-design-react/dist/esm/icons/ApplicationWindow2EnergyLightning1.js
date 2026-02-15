import { forwardRef } from 'react';

const ApplicationWindow2EnergyLightning1 = forwardRef(({
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
    <rect x="2.000000000183718" y="2.00000000044929" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.000000000183718 14.000000000448381 12.000000000183718 18.000000000448381 15.000000000183718 13.000000000448381 9.000000000183718 15.000000000448381 12.000000000183718 10.000000000448381 12.000000000183718 14.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000183936" y1="5.000000000448381" x2="5.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000183936" y1="5.000000000448381" x2="8.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000183936" y1="5.000000000448381" x2="11.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow2EnergyLightning1.displayName = 'ApplicationWindow2EnergyLightning1';

export default ApplicationWindow2EnergyLightning1;
export { ApplicationWindow2EnergyLightning1 };
