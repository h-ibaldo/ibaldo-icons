import { forwardRef } from 'react';

const SunBrightness5D2 = forwardRef(({
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
    <circle cx="12" cy="12.000000011850716" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.050252531362275" y1="16.949747479824509" x2="4.928932187658575" y2="19.07106782324081" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.949747468639544" y1="7.050252543878742" x2="19.071067812341425" y2="4.928932200462441" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.050252532028026" y1="7.050252543212991" x2="4.928932188611725" y2="4.92893219951111" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.949747467971974" y1="16.949747480490259" x2="19.071067811388275" y2="19.07106782419396" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.010000000000218" y1="12.000000011401426" x2="2" y2="12.000000011401426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.989999999999782" y1="12.000000012300006" x2="22" y2="12.000000012300006" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.00000000044929" y1="2.010000011850934" x2="12.00000000044929" y2="2.000000011850716" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.99999999955071" y1="21.990000011850498" x2="11.99999999955071" y2="22.000000011850716" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SunBrightness5D2.displayName = 'SunBrightness5D2';

export default SunBrightness5D2;
export { SunBrightness5D2 };
