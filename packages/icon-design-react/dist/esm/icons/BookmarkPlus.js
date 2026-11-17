import { forwardRef } from 'react';

const BookmarkPlus = forwardRef(({
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
    <path d="M10.000000000003638,2.999999999998181h-4.000000000005457c-.552284749828686,0-1,.447715250169495-1,1v18l7-4,7,4v-10.000000000009095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.000000000003638" y1="4.999999999989086" x2="20.000000000003638" y2="4.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000000003638" y1="1.999999999989086" x2="17.000000000003638" y2="7.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

BookmarkPlus.displayName = 'BookmarkPlus';

export default BookmarkPlus;
export { BookmarkPlus };
