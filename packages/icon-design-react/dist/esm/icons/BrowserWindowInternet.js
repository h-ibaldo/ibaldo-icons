import { forwardRef } from 'react';

const BrowserWindowInternet = forwardRef(({
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
    <path d="M9.499999993639904,21.998779299956368h-4.5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249479693,0,3,1.343145750506665,3,3v4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993639904" y1="7.998779299956368" x2="21.999999993639904" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.499999993649908" cy="16.498779299955459" r="5.499999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.01232909520968 21.974182131987618 18.999999993639904 15.998779299956368 14.999999993639904 14.998779299956368 17.35607909520968 11.072021487456368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.14709472020968 13.145874026518868 14.999999993639904 15.998779299956368 14.999999993639904 21.786376956206368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BrowserWindowInternet.displayName = 'BrowserWindowInternet';

export default BrowserWindowInternet;
export { BrowserWindowInternet };
