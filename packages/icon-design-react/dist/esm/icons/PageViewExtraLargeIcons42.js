import { forwardRef } from 'react';

const PageViewExtraLargeIcons42 = forwardRef(({
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
    <rect x="9.000000000776865" y="8.998779293414614" width="1.999999999939774" height="1.999999998869015" rx=".999998993246465" ry=".999998993246465" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999999993642632" y="1.998779299956368" width="20" height="20" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.999999993642632" y="5.998779299956368" width="12" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.999999993642632,10.998779299956368c-3.865993248600716,0-7,3.134006751399284-7,7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

PageViewExtraLargeIcons42.displayName = 'PageViewExtraLargeIcons42';

export default PageViewExtraLargeIcons42;
export { PageViewExtraLargeIcons42 };
