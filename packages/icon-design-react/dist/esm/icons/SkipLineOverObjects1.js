import { forwardRef } from 'react';

const SkipLineOverObjects1 = forwardRef(({
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
    <rect x="1.974731440099276" y="15.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.974731440099276" y="15.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="17.974731440099276" y="15.000000003885361" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.974731440099276 7.000000003885361 21.974731440099276 11.000000003885361 17.974731440099276 11.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.450683588549509,11.000000003885361c-1.686401367200233-3.54412841796875-5.289733886729664-6-9.475952148450233-6-4.186218261709655,0-7.78955078125,2.45587158203125-9.475952148439319,6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SkipLineOverObjects1.displayName = 'SkipLineOverObjects1';

export default SkipLineOverObjects1;
export { SkipLineOverObjects1 };
