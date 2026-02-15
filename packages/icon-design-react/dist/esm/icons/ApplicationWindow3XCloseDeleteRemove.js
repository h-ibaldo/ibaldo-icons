import { forwardRef } from 'react';

const ApplicationWindow3XCloseDeleteRemove = forwardRef(({
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
    <path d="M9.999999988782292,21.998779299963644h-5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299963644c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999988782292" y1="7.998779299963644" x2="21.999999988782292" y2="7.998779299963644" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999993642632" y1="14.998779299956368" x2="14.999999993642632" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.999999993711754" y1="14.998779299890884" x2="17.999999993571691" y2="17.998779300026399" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.499999988791387" cy="16.498779299962735" r="5.499999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ApplicationWindow3XCloseDeleteRemove.displayName = 'ApplicationWindow3XCloseDeleteRemove';

export default ApplicationWindow3XCloseDeleteRemove;
export { ApplicationWindow3XCloseDeleteRemove };
