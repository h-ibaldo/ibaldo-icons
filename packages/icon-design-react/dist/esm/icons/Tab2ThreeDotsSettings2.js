import { forwardRef } from 'react';

const Tab2ThreeDotsSettings2 = forwardRef(({
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
    <polygon points="22 21.999999999999091 2 21.999999999999091 2 1.999999999999091 11 1.999999999999091 11 5.999999999999091 22 5.999999999999091 22 21.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="1.999999999999091" x2="15" y2="1.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="14.009999999999309" x2="8" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12" y1="14.009999999999309" x2="12" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16" y1="14.009999999999309" x2="16" y2="13.999999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab2ThreeDotsSettings2.displayName = 'Tab2ThreeDotsSettings2';

export default Tab2ThreeDotsSettings2;
export { Tab2ThreeDotsSettings2 };
