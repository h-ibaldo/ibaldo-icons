import { forwardRef } from 'react';

const MenuThreeStripes6 = forwardRef(({
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
    <line x1="2" y1="12.000000078527592" x2="22" y2="12.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="7.000000078527592" x2="22" y2="7.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="17.000000078527592" x2="22" y2="17.000000078527592" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuThreeStripes6.displayName = 'MenuThreeStripes6';

export default MenuThreeStripes6;
export { MenuThreeStripes6 };
