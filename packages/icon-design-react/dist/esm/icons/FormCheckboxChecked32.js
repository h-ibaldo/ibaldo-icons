import { forwardRef } from 'react';

const FormCheckboxChecked32 = forwardRef(({
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
    <rect x="2.025268551144109" y="5.998779324585485" width="12.000000013759745" height="11.999999973355443" rx=".999999999993439" ry=".999999999993439" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.025268569828768" y1="11.998779303612537" x2="22.025268569828768" y2="11.998779303612537" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.025268561499615 11.99877929957438 7.525268569828768 13.498779303612537 10.025268561488701 10.498779303612537" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

FormCheckboxChecked32.displayName = 'FormCheckboxChecked32';

export default FormCheckboxChecked32;
export { FormCheckboxChecked32 };
