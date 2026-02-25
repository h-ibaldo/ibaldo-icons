import { forwardRef } from 'react';

const MenuStripesLinesListHamburgerCircled2 = forwardRef(({
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
    <circle cx="12.000000004889444" cy="11.999999995256076" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000004889444" y1="7.999999995256076" x2="16.000000004889444" y2="7.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000004889444" y1="11.999999995256076" x2="16.000000004889444" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000004889444" y1="15.999999995256076" x2="16.000000004889444" y2="15.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuStripesLinesListHamburgerCircled2.displayName = 'MenuStripesLinesListHamburgerCircled2';

export default MenuStripesLinesListHamburgerCircled2;
export { MenuStripesLinesListHamburgerCircled2 };
