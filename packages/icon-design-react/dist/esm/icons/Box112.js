import { forwardRef } from 'react';

const Box112 = forwardRef(({
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
    <polygon points="14 13.999999999998181 22 10.999999999998181 20 5.999999999998181 12 8.999999999998181 14 13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 20.999999999998181 20 17.999999999998181 20 11.749999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20" y1="5.999999999998181" x2="12" y2="2.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="10.000000000130058 13.999999999869033 2 11.000000000218279 3.999999999779902 6.000000000138243 11.99999999990996 8.999999999778083 10.000000000130058 13.999999999869033" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.0000000004502 20.999999999778083 4.000000000310138 18.000000000138243 4.000000000030013 11.750000000138243" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.999999999779902" y1="6.000000000138243" x2="11.99999999963984" y2="2.999999999778083" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Box112.displayName = 'Box112';

export default Box112;
export { Box112 };
