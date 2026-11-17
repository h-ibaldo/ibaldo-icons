import { forwardRef } from 'react';

const AccessibilityPersonSquare = forwardRef(({
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
    <rect x="1.999999998670319" y="1.998782736206522" width="20" height="20.000000000002728" rx="1.999999999999727" ry="1.999999999999727" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999998670319" cy="7.499391368103716" r="1.500608631892192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999998670319 9.998782736161957 9.999999998670319 10.998782736161957 13.999999998670319 10.998782736161957 16.999999998670319 9.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.999999998670319 10.998782736161957 9.999999998670319 14.998782736161957 7.999999998670319 17.99878273620925" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.999999998310159 10.99878273620925 13.999999998490239 14.99878273620925 15.999999998670319 17.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.999999998670319" y1="14.998782736161957" x2="13.999999998670319" y2="14.998782736161957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AccessibilityPersonSquare.displayName = 'AccessibilityPersonSquare';

export default AccessibilityPersonSquare;
export { AccessibilityPersonSquare };
