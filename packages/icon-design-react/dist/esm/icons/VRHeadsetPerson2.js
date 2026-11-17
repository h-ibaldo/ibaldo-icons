import { forwardRef } from 'react';

const VRHeadsetPerson2 = forwardRef(({
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
    <rect x="6.025268554169998" y="6.000000003048626" width="12" height="5" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <path d="M16.025268554169998,6.000000003048626c0-2.20916748046875-1.790771484370453-4-4-4-2.209228515620453,0-4,1.79083251953125-4,4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.025268554169998,11.000000003048626c0,2.2091064453125,1.790771484379547,4,4,4,2.209228515629547,0,4-1.7908935546875,4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <line x1="12.025268554169998" y1="2.000000003048626" x2="12.025268554169998" y2="6.000000003048626" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.025268554169998,16.260009768673626c-1.81201171875,1.26513671875-3,3.36236572265625-3,5.739990234375h18c0-2.37762451171875-1.18798828125-4.474853515625-3-5.739990234375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

VRHeadsetPerson2.displayName = 'VRHeadsetPerson2';

export default VRHeadsetPerson2;
export { VRHeadsetPerson2 };
