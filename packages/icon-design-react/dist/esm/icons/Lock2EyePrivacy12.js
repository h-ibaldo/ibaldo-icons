import { forwardRef } from 'react';

const Lock2EyePrivacy12 = forwardRef(({
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
    <line x1="12" y1="16.010000000000218" x2="12" y2="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12,13c-1.861755371090112,0-3.412475585940228,1.2777099609375-3.858581542969659,3,.446105957029431,1.72222900390625,1.996826171879547,3,3.858581542969659,3,1.861755371100116,0,3.412475585940228-1.27777099609375,3.858581542969659-3-.446105957029431-1.7222900390625-1.996826171869543-3-3.858581542969659-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4" y="10" width="16" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,10v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000000126-4.999994999998307h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock2EyePrivacy12.displayName = 'Lock2EyePrivacy12';

export default Lock2EyePrivacy12;
export { Lock2EyePrivacy12 };
