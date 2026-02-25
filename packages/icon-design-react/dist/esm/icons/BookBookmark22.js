import { forwardRef } from 'react';

const BookBookmark22 = forwardRef(({
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
    <path d="M20.000000026699126,17.999999999998181H6.000000026699126c-1.104568395099705,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716c0,1.10456839509061.895429604899618,1.999998000001142,1.999997999999323,1.999998000001142h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.000000026699126,17.999999999998181V1.999999999998181H6.000000026699126c-1.104568395099705,0-1.999997999999323.895429604910532-1.999997999999323,1.999998000001142v.000003999997716" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000002026699804" y1="3.999999999998181" x2="4.000002026699804" y2="19.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BookBookmark22.displayName = 'BookBookmark22';

export default BookBookmark22;
export { BookBookmark22 };
