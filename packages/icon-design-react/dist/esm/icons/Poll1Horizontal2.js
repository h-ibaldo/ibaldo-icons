import { forwardRef } from 'react';

const Poll1Horizontal2 = forwardRef(({
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
    <line x1="6.000000004160029" y1="5.999999996371116" x2="14.000000004160029" y2="5.999999996371116" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004160029" y1="13.999999996371116" x2="9.000000004160029" y2="13.999999996371116" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004160029" y1="17.999999996371116" x2="11.000000004160029" y2="17.999999996371116" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004160029" y1="9.999999996371116" x2="18.000000004160029" y2="9.999999996371116" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000004160029" y="1.999999996371116" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Poll1Horizontal2.displayName = 'Poll1Horizontal2';

export default Poll1Horizontal2;
export { Poll1Horizontal2 };
