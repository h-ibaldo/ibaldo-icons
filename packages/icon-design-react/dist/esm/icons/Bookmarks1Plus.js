import { forwardRef } from 'react';

const Bookmarks1Plus = forwardRef(({
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
    <path d="M14.000000026699126,5.999999999998181H4.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.000000026699126,13.999999999998181l6,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1h-10c-.552284749828686,0-1,.447715250169495-1,1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.509665274770668" y1="11.948015268357267" x2="11.509665274770668" y2="11.948015268357267" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.009665274770668" y1="9.448015268357267" x2="9.009665274770668" y2="14.448015268357267" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Bookmarks1Plus.displayName = 'Bookmarks1Plus';

export default Bookmarks1Plus;
export { Bookmarks1Plus };
