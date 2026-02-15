import { forwardRef } from 'react';

const FormDropdownSelect1 = forwardRef(({
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
    <path d="M1.974731444090139,6.999999995568942h19c.5522847498396,0,1,.559644062712323,1,1.25v7.500000000003638c0,.690355937287677-.4477152501604,1.25-1,1.25H1.974731444090139" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.974731444090139,10.99999999557258l1.292893218811514,1.292893218815152c.390524291749898.390524291749898,1.023689270619798.390524291749898,1.414213562369696,0l1.29289321881879-1.292893218815152" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731444090139" y1="6.99999999557258" x2="11.974731444090139" y2="16.99999999557258" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormDropdownSelect1.displayName = 'FormDropdownSelect1';

export default FormDropdownSelect1;
export { FormDropdownSelect1 };
