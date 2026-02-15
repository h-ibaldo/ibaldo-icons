import { forwardRef } from 'react';

const GeometricFormsDiversity = forwardRef(({
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
    <circle cx="6.525268555529692" cy="6.500000001208718" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.025268555529692" y="3.000000001208718" width="7" height="7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="2.525268555529692 21.500000001211447 10.525268555529692 21.500000001208718 6.525268555529692 14.375000001208718 2.525268555529692 21.500000001211447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="19.545994497700121 14.000000001211447 15.504542613370177 14.000000001211447 13.483816671209752 17.500000001208718 15.504542613370177 21.000000001208718 19.545994497700121 21.000000001208718 21.566720439859637 17.500000001208718 19.545994497700121 14.000000001211447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

GeometricFormsDiversity.displayName = 'GeometricFormsDiversity';

export default GeometricFormsDiversity;
export { GeometricFormsDiversity };
