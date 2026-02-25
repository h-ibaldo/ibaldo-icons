import { forwardRef } from 'react';

const FormCheckboxChecked22 = forwardRef(({
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
    <polyline points="5.050537107349555 11.998779300163733 6.550537107349555 13.498779300163733 9.050537107350465 10.498779300163733" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.050537107350465" y1="11.998779300163733" x2="22.050537107350465" y2="11.998779300163733" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.050537107349555" y="6.998779300163733" width="10.000000000000909" height="10" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormCheckboxChecked22.displayName = 'FormCheckboxChecked22';

export default FormCheckboxChecked22;
export { FormCheckboxChecked22 };
