import { forwardRef } from 'react';

const HandTouchOneFingerClockTimeWait = forwardRef(({
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
    <path d="M5.999999976200343,16.999996563433342l-1.061449777580492-1.592469946052006c-.485413544329276-.728255351378721-1.515755999589601-.830324008558819-2.134618869689803-.211461406674061l-.000002000000677.000002000000677c-.467450907548482.467450907544844-.53997490232905,1.199863105088298-.17327757251951,1.749911984948994l3.368907670270346,5.053388011623611,9.000440549520135.000629356152785-.000000000320142-5.558481559895881c-.000000000050932-.860860816141212-.550860189829109-1.625138503321068-1.367544468070264-1.897366596018401l-4.632455532109816-1.544151843769214.000000000369255-4.500001500254257c.000000000070941-.828426296332509-.671572203598771-1.499998500062247-1.499998499930371-1.499998500062247h-.000002999999197c-.828426296289763,0-1.499998499939466.67157220365425-1.499998499939466,1.499998499940375v8.500001500059625Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999976200343" cy="6.999996563433342" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.999999976200343 4.999996563433342 16.999999976200343 6.999996563433342 18.999999976200343 6.999996563433342" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

HandTouchOneFingerClockTimeWait.displayName = 'HandTouchOneFingerClockTimeWait';

export default HandTouchOneFingerClockTimeWait;
export { HandTouchOneFingerClockTimeWait };
