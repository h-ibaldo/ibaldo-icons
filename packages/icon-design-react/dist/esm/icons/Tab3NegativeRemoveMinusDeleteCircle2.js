import { forwardRef } from 'react';

const Tab3NegativeRemoveMinusDeleteCircle2 = forwardRef(({
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
    <polyline points="12.149805223290059 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 10.050537109160359 1.998782740736715 13.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.050537109160359 1.998782740736715 22.050537109160359 1.998782740736715 22.050537109160359 5.998782740736715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.050537109160359" y1="18.998782740733986" x2="22.050537109160359" y2="18.998782740733986" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Tab3NegativeRemoveMinusDeleteCircle2.displayName = 'Tab3NegativeRemoveMinusDeleteCircle2';

export default Tab3NegativeRemoveMinusDeleteCircle2;
export { Tab3NegativeRemoveMinusDeleteCircle2 };
