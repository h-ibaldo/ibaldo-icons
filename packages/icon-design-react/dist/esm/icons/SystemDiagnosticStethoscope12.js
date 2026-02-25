import { forwardRef } from 'react';

const SystemDiagnosticStethoscope12 = forwardRef(({
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
    <rect x="2.025268554610193" y="2.000000000709406" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="7.025268554610193" cy="7.000000000705768" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="13.025268554610193" cy="7.000000000705768" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="18.025268554610193" cy="14.000000000709406" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.025268554610193,13.000000000709406v2c0,1.656854249489697,1.343145750509393,3,3,3h2.000002999960088c1.656852592639552,0,2.999997000039912-1.343144416809082,2.999997000039912-2.999997000002622v-.000002999997378" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.025268554610193,7.000000000709406v3c0,1.656854249489697,1.343145750509393,3,3,3h2c1.656854249479693,0,3-1.343145750510303,3-3v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SystemDiagnosticStethoscope12.displayName = 'SystemDiagnosticStethoscope12';

export default SystemDiagnosticStethoscope12;
export { SystemDiagnosticStethoscope12 };
