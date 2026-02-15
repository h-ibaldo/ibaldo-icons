import { forwardRef } from 'react';

const VrAugmentedRealityCubeDeviceHalf = forwardRef(({
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
    <rect x="9.000000002679371" y="2.0000000168111" width="12.00000000894579" height="20" rx="1.999999999998105" ry="1.999999999998105" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="8.999999999599822 11.999999999326974 15 9 9.000000000411092 5.999999999326974 3 8.999999998653948 8.999999999599822 11.999999999326974" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="3 8.999999998653948 2.99999999937063 14.999999998653948 8.999999998970452 17.999999999326974 14.99999999937063 15 15 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.000000001149601 1.999999998068233 13.000000001060471 2.999999998068233 17.000000001060471 2.999999998606654 17.000000001149601 1.999999998606654" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

VrAugmentedRealityCubeDeviceHalf.displayName = 'VrAugmentedRealityCubeDeviceHalf';

export default VrAugmentedRealityCubeDeviceHalf;
export { VrAugmentedRealityCubeDeviceHalf };
