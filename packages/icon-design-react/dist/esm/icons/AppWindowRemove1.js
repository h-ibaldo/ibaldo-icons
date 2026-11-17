import { forwardRef } from 'react';

const AppWindowRemove1 = forwardRef(({
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
    <path d="M11.025268553292335,21.99877930339062h-6c-1.656854249498792,0-3-1.343145750510303-3-3V4.99877930339062c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.025268553292335" y1="7.99877930339062" x2="22.025268553292335" y2="7.99877930339062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22.025268553292335" y1="17.99877930339062" x2="14.025268553292335" y2="17.99877930339062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

AppWindowRemove1.displayName = 'AppWindowRemove1';

export default AppWindowRemove1;
export { AppWindowRemove1 };
