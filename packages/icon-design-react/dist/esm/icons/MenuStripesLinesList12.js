import { forwardRef } from 'react';

const MenuStripesLinesList12 = forwardRef(({
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
    <line x1="4.000000004889444" y1="11.999999995256076" x2="20.000000004889444" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004889444" y1="4.999999995256076" x2="20.000000004889444" y2="4.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000004889444" y1="18.999999995256076" x2="15.000000004889444" y2="18.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuStripesLinesList12.displayName = 'MenuStripesLinesList12';

export default MenuStripesLinesList12;
export { MenuStripesLinesList12 };
