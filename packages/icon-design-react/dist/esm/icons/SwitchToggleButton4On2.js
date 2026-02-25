import { forwardRef } from 'react';

const SwitchToggleButton4On2 = forwardRef(({
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
    <rect x="2.000000211418751" y="4.999996761721775" width="20.000000000036607" height="14.000000015773026" rx="6.999992973722963" ry="6.999992973722963" transform="translate(24.000000402665158 23.999993559425533) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.000000396670202" cy="11.999996978796844" r="3.000000000000227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SwitchToggleButton4On2.displayName = 'SwitchToggleButton4On2';

export default SwitchToggleButton4On2;
export { SwitchToggleButton4On2 };
