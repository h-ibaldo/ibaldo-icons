import { forwardRef } from 'react';

const GripVerticalStripes2 = forwardRef(({
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
    <line x1="17.025268558149946" y1="1.998782736171052" x2="17.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268558149946" y1="1.998782736171052" x2="12.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.025268558149946" y1="1.998782736171052" x2="7.025268558149946" y2="21.998782736171052" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GripVerticalStripes2.displayName = 'GripVerticalStripes2';

export default GripVerticalStripes2;
export { GripVerticalStripes2 };
