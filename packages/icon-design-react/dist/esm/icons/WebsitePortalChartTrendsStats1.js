import { forwardRef } from 'react';

const WebsitePortalChartTrendsStats1 = forwardRef(({
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
    <rect x="1.999999993642632" y="1.998779299954549" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="7.998779299954549" x2="21.999999993642632" y2="7.998779299954549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.00999999364285" y1="4.998779299954549" x2="4.999999993642632" y2="4.998779299954549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.00999999364285" y1="4.998779299954549" x2="7.999999993642632" y2="4.998779299954549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999993642632" y1="4.998779299954549" x2="10.999999993642632" y2="4.998779299954549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.999999993642632 17.998779299954549 10.999999993642632 12.998779299954549 13.999999993642632 15.998779299954549 17.999999993642632 11.998779299954549" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WebsitePortalChartTrendsStats1.displayName = 'WebsitePortalChartTrendsStats1';

export default WebsitePortalChartTrendsStats1;
export { WebsitePortalChartTrendsStats1 };
