import { forwardRef } from 'react';

const FormDropdownSelect42 = forwardRef(({
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
    <rect x="1.974731444101053" y="7.99999999557258" width="20" height="7.999999999996362" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.974731444101053" y1="7.999999995576218" x2="13.974731444101053" y2="15.999999995568942" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.964731444100835" y1="11.99999999557258" x2="17.974731444101053" y2="11.99999999557258" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormDropdownSelect42.displayName = 'FormDropdownSelect42';

export default FormDropdownSelect42;
export { FormDropdownSelect42 };
