import { forwardRef } from 'react';

const MenuSquared2 = forwardRef(({
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
    <rect x="4.000000004889444" y="3.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.000000004889444" y="3.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.000000004889444" y="3.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.000000004889444" y="10.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.000000004889444" y="10.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.000000004889444" y="10.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.000000004889444" y="17.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11.000000004889444" y="17.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.000000004889444" y="17.999999995256076" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuSquared2.displayName = 'MenuSquared2';

export default MenuSquared2;
export { MenuSquared2 };
