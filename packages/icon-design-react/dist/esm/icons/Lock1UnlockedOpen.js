import { forwardRef } from 'react';

const Lock1UnlockedOpen = forwardRef(({
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
    <rect x="8.974731450040053" y="13.000000000447471" width="12" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.974731450040053,12.000000000447471v-6.000003997516615c0-2.209136791556375,1.790859210928829-3.999996002483385,3.999996002479747-3.999996002483385h.000008000009984c2.209136796709572,0,3.999996009779352,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock1UnlockedOpen.displayName = 'Lock1UnlockedOpen';

export default Lock1UnlockedOpen;
export { Lock1UnlockedOpen };
