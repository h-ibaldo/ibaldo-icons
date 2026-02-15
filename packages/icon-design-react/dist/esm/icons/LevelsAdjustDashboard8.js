import { forwardRef } from 'react';

const LevelsAdjustDashboard8 = forwardRef(({
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
    <line x1="9.999999990754077" y1="4.99999999973079" x2="21.99999999074862" y2="5.000000000439286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999990756805" y1="5.000000000170985" x2="4.999999990754077" y2="5.000000000308319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.999999990754077" y="1.99999999973079" width="4.999999999999091" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.999999990754077" y="8.99999999973079" width="4.999999999999091" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999990754077" y1="18.99999999973079" x2="21.99999999074862" y2="19.000000000439286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999990756805" y1="19.000000000170985" x2="4.999999990754077" y2="19.000000000308319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.999999990754077" y="15.99999999973079" width="4.999999999999091" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999990574906" y1="12.000000000627551" x2="1.999999990754077" y2="11.999999998838575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.99999999074862" y1="11.999999999929969" x2="18.999999990574906" y2="11.999999999527972" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LevelsAdjustDashboard8.displayName = 'LevelsAdjustDashboard8';

export default LevelsAdjustDashboard8;
export { LevelsAdjustDashboard8 };
