import { forwardRef } from 'react';

const ApplicationWindow2EnergyLightning2 = forwardRef(({
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
    <path d="M12.000000000183718,22.000000000448381l-8,.000000000001819c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500338989-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499661011,0,2,.89543050033808,2,2v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="17.000000000183718 10.000000000448381 13.000000000183718 18.000000000448381 21.000000000183718 14.000000000448381 17.000000000183718 22.000000000448381 17.000000000183718 10.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000183936" y1="5.000000000448381" x2="5.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000183936" y1="5.000000000448381" x2="8.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000183936" y1="5.000000000448381" x2="11.000000000183718" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow2EnergyLightning2.displayName = 'ApplicationWindow2EnergyLightning2';

export default ApplicationWindow2EnergyLightning2;
export { ApplicationWindow2EnergyLightning2 };
