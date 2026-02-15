import { forwardRef } from 'react';

const DownloadArrowDownSquaresGroupStack2 = forwardRef(({
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
    <rect x="2.974731450026411" y="6.000000000462023" width="14" height="15.999999999997272" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.974731450026411,2.000000000462023h11c1.656854249493335,0,3,1.343145750503936,3,3v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.974731450026411 15.000000000462023 9.974731449353385 18.000000000462023 6.974731450026411 15.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.974731451103253" y1="10.000000000462023" x2="9.974731449353385" y2="18.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DownloadArrowDownSquaresGroupStack2.displayName = 'DownloadArrowDownSquaresGroupStack2';

export default DownloadArrowDownSquaresGroupStack2;
export { DownloadArrowDownSquaresGroupStack2 };
