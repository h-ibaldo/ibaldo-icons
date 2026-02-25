import { forwardRef } from 'react';

const FunnelFilterHorizontalLinesMailCircle22 = forwardRef(({
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
    <circle cx="11.974731449501633" cy="12.000000000479986" r="10.000000000000341" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731449501633" y1="8.000000000480213" x2="16.974731449501633" y2="8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731449501633" y1="12.000000000480213" x2="15.974731449501633" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.974731449501633" y1="16.000000000480213" x2="14.974731449501633" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FunnelFilterHorizontalLinesMailCircle22.displayName = 'FunnelFilterHorizontalLinesMailCircle22';

export default FunnelFilterHorizontalLinesMailCircle22;
export { FunnelFilterHorizontalLinesMailCircle22 };
