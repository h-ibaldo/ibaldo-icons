import { forwardRef } from 'react';

const Poll3Vertical = forwardRef(({
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
    <rect x=".999999999865395" y="8.99999999945976" width="6" height="4" transform="translate(-6.999999999773841 14.999999998831598) rotate(-89.999999997429214)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6" y="5.999999999818101" width="12" height="4" transform="translate(3.999999999643473 19.999999999459149) rotate(-89.999999997429214)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.499999999930878" y="7.500000000178261" width="9" height="4" transform="translate(10.499999998863341 29.499999999686732) rotate(-89.99999999745242)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.99999999946067" y="17.99999999945976" width="4" height="4" transform="translate(-16.00000000017917 23.999999998020034) rotate(-89.999999997420559)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.99999999946067" y="17.999999999818101" width="4" height="4" transform="translate(-8.000000000897668 31.999999998378374) rotate(-89.999999997420559)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="17.99999999946067" y="18.000000000178261" width="4" height="4" transform="translate(-.000000001617988 39.999999998738531) rotate(-89.999999997420559)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Poll3Vertical.displayName = 'Poll3Vertical';

export default Poll3Vertical;
export { Poll3Vertical };
