import { forwardRef } from 'react';

const WifiSignalHotspot12 = forwardRef(({
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
    <path d="M7.732090762479856,17.242640687531093c-2.343145750430267-2.343145750321128-2.343145750519398-6.14213562380246-.000000000190084-8.485281374232727,2.343145750330223-2.343145750432996,6.142135623810645-2.343145750517579,8.485281374240003-.000000000192813,2.343145750430267,2.343145750328404,2.343145750510303,6.142135623809736.000000000190084,8.485281374240003" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.903663637800491,20.071067812346882c-3.905242917390751-3.905242917211581-3.905242917530813-10.236892706347135-.000000000320142-14.142135623734248,3.905242917209762-3.905242917387113,10.236892706339859-3.905242917527175,14.1421356237297-.000000000316504s3.905242917529904,10.236892706344406.000000000320142,14.142135623726972" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731449499814" cy="13.000000000476575" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WifiSignalHotspot12.displayName = 'WifiSignalHotspot12';

export default WifiSignalHotspot12;
export { WifiSignalHotspot12 };
