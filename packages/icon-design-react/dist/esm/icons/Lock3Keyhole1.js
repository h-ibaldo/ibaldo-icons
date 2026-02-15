import { forwardRef } from 'react';

const Lock3Keyhole1 = forwardRef(({
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
    <rect x="4.974731441299809" y="10.000000000589353" width="14" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.974731441299809,10.000000000589353v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999995000000126-4.999995000001945h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999995000001945v3.000004999998055" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731441299809" y1="18.000000000589353" x2="11.974731441299809" y2="16.000000000589353" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.974731441299809" cy="15.000000000589353" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock3Keyhole1.displayName = 'Lock3Keyhole1';

export default Lock3Keyhole1;
export { Lock3Keyhole1 };
