import { forwardRef } from 'react';

const LockArrowPortraitOrientation2 = forwardRef(({
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
    <polyline points="20.000000003919922 2.000000003886271 20.000000004110916 6.00000000352793 16.000000004469257 6.000000003706191" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.98638916425989,6.00000000352793c-1.824768066519027-2.424804687416326-4.717956543150649-3.999999999788997-7.986389160339968-3.999999999641659-5.522827148430224.000000000247383-9.999999999790816,4.4771728520127-9.99999999955071,10.000000000451109.000000000260115,5.522888183589203,4.477172852009971,9.999999999795364,10.000000000460204,9.999999999547981,5.522827148430224-.000000000245564,9.999999999799911-4.477111816853721,9.999999999539796-10.000000000447471-.00000000001819-.68499755859375-.069641113339458-1.35369873046875-.200866699309699-1.999999999992724" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.000000004469257" y="12.000000003885361" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.000000004469257,12.000000003885361v-2.000002000003406c0-1.104568395091519.895429604901437-1.999997999996594,1.999997999990228-1.999997999996594h.000004000010449c1.104568395079696,0,1.999997999979314.895429604901437,1.999997999979314,1.999997999988409l.000000000020009,2.000002000011591" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LockArrowPortraitOrientation2.displayName = 'LockArrowPortraitOrientation2';

export default LockArrowPortraitOrientation2;
export { LockArrowPortraitOrientation2 };
