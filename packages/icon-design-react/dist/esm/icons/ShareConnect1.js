import { forwardRef } from 'react';

const ShareConnect1 = forwardRef(({
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
    <circle cx="4" cy="11.999999999998181" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="20" cy="3.999999999998181" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="20" cy="19.999999999998181" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.78173828125" y1="12.890869140617724" x2="18.21826171875" y2="19.109130859367724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.21826171875" y1="4.890869140617724" x2="5.78173828125" y2="11.109130859367724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ShareConnect1.displayName = 'ShareConnect1';

export default ShareConnect1;
export { ShareConnect1 };
