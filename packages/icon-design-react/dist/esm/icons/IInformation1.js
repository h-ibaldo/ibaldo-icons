import { forwardRef } from 'react';

const IInformation1 = forwardRef(({
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
    <polyline points="8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.025268553439673" y1="20.999996564243702" x2="16.025268553439673" y2="20.999996564243702" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

IInformation1.displayName = 'IInformation1';

export default IInformation1;
export { IInformation1 };
