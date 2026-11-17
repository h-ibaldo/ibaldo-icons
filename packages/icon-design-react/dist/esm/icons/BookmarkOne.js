import { forwardRef } from 'react';

const BookmarkOne = forwardRef(({
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
    <path d="M13.000000026693669,2.999999999998181h-7c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.000000026693669 1.999999999998181 19.000000026693669 1.999999999998181 19.000000026693669 8.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BookmarkOne.displayName = 'BookmarkOne';

export default BookmarkOne;
export { BookmarkOne };
