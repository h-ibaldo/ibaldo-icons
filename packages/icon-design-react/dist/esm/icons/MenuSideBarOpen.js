import { forwardRef } from 'react';

const MenuSideBarOpen = forwardRef(({
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
    <path d="M2.132132553721021,1.999999995256076h10.867867451179336c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H2.000000004900357" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="6.999999995256076" x2="9.000000004900357" y2="6.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="11.999999995256076" x2="9.000000004900357" y2="11.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.132132553721021" y1="16.999999995256076" x2="9.000000004900357" y2="16.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.000000004900357 8.999999995256076 22.000000004900357 11.999999995256076 19.000000004900357 14.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuSideBarOpen.displayName = 'MenuSideBarOpen';

export default MenuSideBarOpen;
export { MenuSideBarOpen };
