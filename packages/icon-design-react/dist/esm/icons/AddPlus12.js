import { forwardRef } from 'react';

const AddPlus12 = forwardRef(({
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
    <line x1="11.974731445219732" y1="3.000000000448381" x2="11.974731445219732" y2="21.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.974731445219732" y1="12.0000000004502" x2="2.974731445219732" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AddPlus12.displayName = 'AddPlus12';

export default AddPlus12;
export { AddPlus12 };
