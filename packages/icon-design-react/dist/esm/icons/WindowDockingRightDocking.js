import { forwardRef } from 'react';

const WindowDockingRightDocking = forwardRef(({
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
    <rect x="5.974731417777548" y="5.998779298355657" width="20" height="12" rx=".999999999997684" ry=".999999999997684" transform="translate(27.973510715414747 -3.975952119961534) rotate(89.999999997423146)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.974731418182273 14.998779299121452 4.974731417782095 11.998779298717636 1.974731417372823 8.998779299121452" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731417511066" y1="5.998779298088266" x2="9.974731417511066" y2="5.998779298626687" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WindowDockingRightDocking.displayName = 'WindowDockingRightDocking';

export default WindowDockingRightDocking;
export { WindowDockingRightDocking };
