import { forwardRef } from 'react';

const VrDevicesHeadset1 = forwardRef(({
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
    <rect x="3.025268549509747" y="8.998782739598028" width="18" height="11" rx="4" ry="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.025268549509747 8.998782739598028 13.025268549509747 2.998782739598028 11.025268549509747 2.998782739598028 11.025268549509747 8.998782739598028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="9.525268549509747" cy="13.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="14.525268549509747" cy="13.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="17.525268549509747" cy="10.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="6.525268549509747" cy="10.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="4.525268549509747" cy="14.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="7.525268549509747" cy="18.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.525268549509747" cy="18.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.525268549509747" cy="14.498782739598028" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.719726557319518,9.387698755223028l-1.247363261689316-2.494591741298791c-.290293730799931-.580556094326312-.761049422880205-1.051301612707903-1.341611790790012-1.341582796663715l-3.105482955330444-1.552741477662494" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.330810541950086,9.387698755350357l1.247363261580176-2.494591741356999c.290293730769918-.580556094337226.761049422829274-1.051301612740644,1.341611790739989-1.341582796721923l3.105482955239495-1.552741477800737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

VrDevicesHeadset1.displayName = 'VrDevicesHeadset1';

export default VrDevicesHeadset1;
export { VrDevicesHeadset1 };
