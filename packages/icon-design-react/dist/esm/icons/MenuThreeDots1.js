import { forwardRef } from 'react';

const MenuThreeDots1 = forwardRef(({
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
    <line x1="12.035268553439892" y1="4.999996485714291" x2="12.025268553439673" y2="4.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="11.999996485714291" x2="12.025268553439673" y2="11.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="18.999996485714291" x2="12.025268553439673" y2="18.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuThreeDots1.displayName = 'MenuThreeDots1';

export default MenuThreeDots1;
export { MenuThreeDots1 };
