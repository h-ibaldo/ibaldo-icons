import { forwardRef } from 'react';

const Image4 = forwardRef(({
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
    <rect x="1.999999993269739" y="2.998779299956368" width="20" height="18" rx="1.000000000002239" ry="1.000000000002239" transform="translate(23.9999999860011 23.997558600451168) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.999999993269739 20.998779300134629 7.999999993269739 10.998779299956368 1.999999993049641 16.998779299505259" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="13.999999993269739" cy="8.998779299956368" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="21.999999993269739 18.998779299956368 16.999999993269739 13.998779299956368 13.999999993269739 16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Image4.displayName = 'Image4';

export default Image4;
export { Image4 };
