import { forwardRef } from 'react';

const UploadArrowUp2 = forwardRef(({
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
    <polyline points="6.97473145017193 7.999999999336069 11.974731451296975 3.000000000462023 16.97473145017193 8.000000001585249" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731448378407" y1="16.000000000462023" x2="11.974731451296975" y2="3.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450037325" y1="21.000000000462933" x2="20.974731450037325" y2="21.000000000462933" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

UploadArrowUp2.displayName = 'UploadArrowUp2';

export default UploadArrowUp2;
export { UploadArrowUp2 };
