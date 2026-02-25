import { forwardRef } from 'react';

const IInformationCircle22 = forwardRef(({
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
    <circle cx="11.949462874325036" cy="11.997562036765885" r="8.000000000000455" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462874325036" y1="8.987562036764757" x2="11.949462874325036" y2="8.997562036764975" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462874325036" y1="14.997562036764975" x2="11.949462874325036" y2="11.997562036764975" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

IInformationCircle22.displayName = 'IInformationCircle22';

export default IInformationCircle22;
export { IInformationCircle22 };
