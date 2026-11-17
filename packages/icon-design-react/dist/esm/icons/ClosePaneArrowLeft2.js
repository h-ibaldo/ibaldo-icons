import { forwardRef } from 'react';

const ClosePaneArrowLeft2 = forwardRef(({
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
    <line x1="8.000000003413334" y1="16.000000004040885" x2="2.000000003413334" y2="16.000000003501555" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000003772584" y1="12.000000004040885" x2="2.000000003772584" y2="12.000000003501555" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000004131834" y1="8.000000004040885" x2="2.000000004131834" y2="8.000000003501555" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000003772584" y="4.000000004400135" width="20" height="16" rx="1.999999999999394" ry="1.999999999999394" transform="translate(24.000000006467417 24.000000009878022) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.000000003054083" y1="20.000000004040885" x2="8.000000004491085" y2="4.000000004040885" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.000000003772584" y1="12.000000004938556" x2="12.000000003772584" y2="12.000000004400135" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.000000003503374 15.000000004669346 12.000000003772584 12.000000004400135 15.000000004041794 9.000000004669346" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ClosePaneArrowLeft2.displayName = 'ClosePaneArrowLeft2';

export default ClosePaneArrowLeft2;
export { ClosePaneArrowLeft2 };
