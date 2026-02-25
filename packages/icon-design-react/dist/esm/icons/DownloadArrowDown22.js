import { forwardRef } from 'react';

const DownloadArrowDown22 = forwardRef(({
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
    <polyline points="16.974731450037325 11.00000000113414 11.974731449364299 16.000000000462023 6.974731450037325 10.999999999786269" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451114167" y1="3.000000000462023" x2="11.974731449364299" y2="16.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450037325" y1="21.000000000462933" x2="20.974731450037325" y2="21.000000000462933" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DownloadArrowDown22.displayName = 'DownloadArrowDown22';

export default DownloadArrowDown22;
export { DownloadArrowDown22 };
