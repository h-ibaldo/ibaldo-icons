import { forwardRef } from 'react';

const MenuStripesLinesListHamburger1 = forwardRef(({
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
    <line x1="7.000000004889444" y1="7.999999995256076" x2="17.000000004889444" y2="7.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000004889444" y1="11.999999995256076" x2="17.000000004889444" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000004889444" y1="15.999999995256076" x2="17.000000004889444" y2="15.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuStripesLinesListHamburger1.displayName = 'MenuStripesLinesListHamburger1';

export default MenuStripesLinesListHamburger1;
export { MenuStripesLinesListHamburger1 };
