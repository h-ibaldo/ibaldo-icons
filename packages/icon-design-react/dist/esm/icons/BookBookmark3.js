import { forwardRef } from 'react';

const BookBookmark3 = forwardRef(({
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
    <polyline points="17.000000026699126 1.999999999998181 17.000000026699126 10.999999999998181 14.000000026699126 8.999999999998181 11.000000026699126 10.999999999998181 11.000000026699126 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.000000026699126" y="1.999999999998181" width="15.999999999990905" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000026699126" y1="1.999999999998181" x2="2.000000026699126" y2="21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BookBookmark3.displayName = 'BookBookmark3';

export default BookBookmark3;
export { BookBookmark3 };
