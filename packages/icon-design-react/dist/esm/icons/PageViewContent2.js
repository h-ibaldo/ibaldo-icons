import { forwardRef } from 'react';

const PageViewContent2 = forwardRef(({
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
    <rect x="1.999999994000973" y="1.998779299956368" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999994000973" y1="5.998779299956368" x2="21.999999994000973" y2="5.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999994000973" y1="17.998779299956368" x2="21.999999994000973" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.999999994000973" y="4.998779299956368" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999999994000973" y="13.998779299956368" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.999999994000973" y="16.998779299956368" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PageViewContent2.displayName = 'PageViewContent2';

export default PageViewContent2;
export { PageViewContent2 };
