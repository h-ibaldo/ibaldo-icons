import { forwardRef } from 'react';

const TouchScreenTwoFingersSwipeDown2 = forwardRef(({
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
    viewBox="0 0 24 24.000000000001819"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon-design ${className}`.trim()}
    {...props}
  >
    <polyline points="20.974731433996567 18.998779300560273 17.974731433996567 21.998779300560273 14.974731433996567 18.998779300560273" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731433996567" y1="13.998779300560273" x2="17.974731433996567" y2="21.998779300560273" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.974731433996567,5.998779300556635c0,2.209138999201969,1.790861000808945,4,4,4.000000000003638,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,3.999999999996362Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731433996567 18.998779301098693 5.974731433996567 21.998779301098693 2.974731433996567 18.998779301098693" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.974731433996567" y1="13.998779301098693" x2="5.974731433996567" y2="21.998779301098693" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731433996567,5.998779301098693c0,2.209138999198331,1.790861000808945,3.999999999996362,4,4,2.20913899920015-.000000000003638,4-1.790861000801669,4-4,0-2.209138999201969-1.79086100079985-4.000000000003638-4-4-2.209138999191055-.000000000003638-4,1.790861000798031-4,4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenTwoFingersSwipeDown2.displayName = 'TouchScreenTwoFingersSwipeDown2';

export default TouchScreenTwoFingersSwipeDown2;
export { TouchScreenTwoFingersSwipeDown2 };
