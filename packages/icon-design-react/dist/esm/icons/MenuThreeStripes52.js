import { forwardRef } from 'react';

const MenuThreeStripes52 = forwardRef(({
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
    <rect x="2" y="2.000000076632091" width="20" height="3.999999993410484" rx="1.999998018237277" ry="1.999998018237277" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2" y="10.000000075584353" width="20" height="3.999999995505959" rx="1.999998032602977" ry="1.999998032602977" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2" y="18.000000081987196" width="20" height="3.999999982700274" rx="1.999998009715652" ry="1.999998009715652" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MenuThreeStripes52.displayName = 'MenuThreeStripes52';

export default MenuThreeStripes52;
export { MenuThreeStripes52 };
