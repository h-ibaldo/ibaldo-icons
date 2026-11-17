import { forwardRef } from 'react';

const TouchScreenSwipeRight1 = forwardRef(({
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
    <polyline points="17.025268544746723 2.998779304674827 20.025268544335631 5.998779305078642 17.025268543935454 8.998779304674827" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268544335631" y1="5.9987793040018" x2="20.025268544335631" y2="5.998779305078642" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.025268544333358" cy="5.99877930346338" r="4.000000000001137" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.025268544746723 14.998779304674827 20.025268544335631 17.998779305078642 17.025268543935454 20.998779304674827" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268544335631" y1="17.9987793040018" x2="20.025268544335631" y2="17.998779305078642" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.025268544333358" cy="17.99877930346338" r="4.000000000001137" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

TouchScreenSwipeRight1.displayName = 'TouchScreenSwipeRight1';

export default TouchScreenSwipeRight1;
export { TouchScreenSwipeRight1 };
