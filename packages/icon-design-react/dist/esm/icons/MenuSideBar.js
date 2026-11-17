import { forwardRef } from 'react';

const MenuSideBar = forwardRef(({
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
    <path d="M5.000000004900357,1.999999995256076h13c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H4.867867456059685" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000004900357" y1="6.999999995256076" x2="14.000000004900357" y2="6.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000004900357" y1="11.999999995256076" x2="14.000000004900357" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.000000004900357" y1="16.999999995256076" x2="14.000000004900357" y2="16.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuSideBar.displayName = 'MenuSideBar';

export default MenuSideBar;
export { MenuSideBar };
