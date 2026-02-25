import { forwardRef } from 'react';

const KeyPassword82 = forwardRef(({
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
    <line x1="22.000019575950319" y1="12.000015258789062" x2="8.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.000019575950319" y1="16.000015258789062" x2="20.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000019575950319" y1="16.000015258789062" x2="16.000019575950319" y2="12.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000019606326418" y="7.000015258789062" width="5.999999963723212" height="10" rx="2.999996979915418" ry="2.999996979915418" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

KeyPassword82.displayName = 'KeyPassword82';

export default KeyPassword82;
export { KeyPassword82 };
