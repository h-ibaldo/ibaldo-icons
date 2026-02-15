import { forwardRef } from 'react';

const MenuThreeDots2 = forwardRef(({
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
    <line x1="12.035268553439892" y1="2.999996485714291" x2="12.025268553439673" y2="2.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="11.999996485714291" x2="12.025268553439673" y2="11.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.035268553439892" y1="20.999996485714291" x2="12.025268553439673" y2="20.999996485714291" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuThreeDots2.displayName = 'MenuThreeDots2';

export default MenuThreeDots2;
export { MenuThreeDots2 };
