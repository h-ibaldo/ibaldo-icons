import { forwardRef } from 'react';

const Image7 = forwardRef(({
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
    <polygon points="16.999999993269739 14.998779299945454 14.11535643858042 19.037231448382954 8.999999993269739 10.998779299945454 1.999999993269739 21.998779299945454 11.999999993269739 21.998779299945454 15.999999993269739 21.998779299945454 21.999999993269739 21.998779299945454 16.999999993269739 14.998779299945454" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.499999993269739" cy="8.498779299956368" r="2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999999993269739 14.998779299956368 1.999999993269739 1.998779299956368 21.999999993269739 1.998779299956368 21.999999993269739 14.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Image7.displayName = 'Image7';

export default Image7;
export { Image7 };
