import { forwardRef } from 'react';

const IInformation22 = forwardRef(({
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
    <polygon points="7.025268553439673 21.99999656424734 17.025268553439673 21.99999656424734 17.025268553439673 18.99999656424734 14.025268553439673 18.99999656424734 14.025268553439673 10.99999656424734 7.025268553439673 10.99999656424734 7.025268553439673 13.99999656424734 10.025268553439673 13.99999656424734 10.025268553439673 18.99999656424734 7.025268553439673 18.99999656424734 7.025268553439673 21.99999656424734" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.025268553439673" cy="4.99999656424734" r="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

IInformation22.displayName = 'IInformation22';

export default IInformation22;
export { IInformation22 };
