import { forwardRef } from 'react';

const Briefcase3 = forwardRef(({
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
    <rect x="2" y="6.999999999998181" width="20" height="14" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.305541992189319,8.26190185546875l3.10385244625104,4.8207910132096c.368132004570725.571769273830796,1.001568935260366.917307131319831,1.681599284049298.917307131319831h9.818012555020687c.680030348788932,0,1.313467279478573-.345537857489035,1.681599284049298-.917307131319831l3.103852446260134-4.8207910132096" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Briefcase3.displayName = 'Briefcase3';

export default Briefcase3;
export { Briefcase3 };
