import { forwardRef } from 'react';

const FormRadiusChecked22 = forwardRef(({
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
    <line x1="18.00000000376167" y1="11.999999998985004" x2="22.00000000376167" y2="11.999999998985004" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.00000000376167" cy="11.999999998985004" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.00000000376167" cy="11.999999998984094" r=".999999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormRadiusChecked22.displayName = 'FormRadiusChecked22';

export default FormRadiusChecked22;
export { FormRadiusChecked22 };
