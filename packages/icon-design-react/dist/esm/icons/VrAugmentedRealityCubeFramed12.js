import { forwardRef } from 'react';

const VrAugmentedRealityCubeFramed12 = forwardRef(({
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
    <polygon points="11.999999977619154 11.999996562448359 18.999999977490006 7.999996562222805 11.999999977349944 3.999996562448359 4.999999977490006 7.999996562670276 11.999999977619154 11.999996562448359" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4.999999977490006 7.999996562670276 4.999999977761036 15.999996562670276 11.999999977890184 19.999996562448359 18.999999977761036 15.999996562222805 18.999999977490006 7.999996562222805" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977619154" y1="11.999996562448359" x2="11.999999977890184" y2="19.999996562448359" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999977098923 4.999996563434252 21.999999977098923 1.999996563434252 18.999999977098923 1.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="4.999999977209882 1.999996563547029 1.999999977209882 1.999996563321474 1.999999976989784 4.999996563321474" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999999976989784 18.999996563434252 1.999999976989784 21.999996563434252 4.999999976989784 21.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.999999976880645 21.999996563325112 21.999999976880645 21.999996563547029 21.999999977098923 18.999996563547029" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

VrAugmentedRealityCubeFramed12.displayName = 'VrAugmentedRealityCubeFramed12';

export default VrAugmentedRealityCubeFramed12;
export { VrAugmentedRealityCubeFramed12 };
