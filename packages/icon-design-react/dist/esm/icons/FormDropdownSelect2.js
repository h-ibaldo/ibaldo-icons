import { forwardRef } from 'react';

const FormDropdownSelect2 = forwardRef(({
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
    <rect x="1.974731444090139" y="6.99999999557258" width="20" height="9.999999999996362" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731444090139,11.49999999557258l.792893218811514.792893218811514c.390524291749898.390524291753536,1.023689270620707.390524291753536,1.414213562389705,0l.792893218798781-.792893218811514" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.974731444090139" y1="6.999999995576218" x2="12.974731444090139" y2="16.999999995568942" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormDropdownSelect2.displayName = 'FormDropdownSelect2';

export default FormDropdownSelect2;
export { FormDropdownSelect2 };
