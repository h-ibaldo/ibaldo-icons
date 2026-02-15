import { forwardRef } from 'react';

const SwitchKnobButton11 = forwardRef(({
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
    <circle cx="11.99999997708619" cy="11.997562035419833" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932165386868" y1="4.92649422339673" x2="9.171572852405006" y2="9.169134910611319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SwitchKnobButton11.displayName = 'SwitchKnobButton11';

export default SwitchKnobButton11;
export { SwitchKnobButton11 };
