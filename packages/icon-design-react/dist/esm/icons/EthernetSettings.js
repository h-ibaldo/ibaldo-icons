import { forwardRef } from 'react';

const EthernetSettings = forwardRef(({
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
    <polyline points="5.000000000029104 7.999999999979991 2.000000000029104 11.999999999979991 5.000000000029104 15.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.000000000029104 15.999999999979991 22.000000000029104 11.999999999979991 19.000000000029104 7.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.000000000029104" y1="12.009999999980209" x2="12.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000000029104" y1="12.009999999980209" x2="16.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000000029104" y1="12.009999999980209" x2="8.000000000029104" y2="11.999999999979991" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

EthernetSettings.displayName = 'EthernetSettings';

export default EthernetSettings;
export { EthernetSettings };
