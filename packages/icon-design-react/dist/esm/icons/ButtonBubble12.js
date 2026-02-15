import { forwardRef } from 'react';

const ButtonBubble12 = forwardRef(({
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
    <rect x="1.999999995185732" y="6.999999997010121" width="19.999999999999943" height="10.000000007293295" rx="4.99999501106799" ry="4.99999501106799" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999990797733" y1="11.000000000448381" x2="16.999999990797733" y2="11.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ButtonBubble12.displayName = 'ButtonBubble12';

export default ButtonBubble12;
export { ButtonBubble12 };
