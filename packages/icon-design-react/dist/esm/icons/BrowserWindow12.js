import { forwardRef } from 'react';

const BrowserWindow12 = forwardRef(({
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
    <rect x="1.99999999963984" y="1.999999996951374" width="20" height="20" rx="1.999999999997272" ry="1.999999999997272" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.99999999981992" y1="7.999999997398845" x2="1.99999999981992" y2="7.999999996503902" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.009999999640058" y1="4.99999999726424" x2="7.99999999963984" y2="4.99999999726424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.99999999963984" y1="4.99999999726424" x2="10.99999999963984" y2="4.99999999726424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.009999999640058" y1="4.999999997129635" x2="4.99999999963984" y2="4.999999997129635" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindow12.displayName = 'BrowserWindow12';

export default BrowserWindow12;
export { BrowserWindow12 };
