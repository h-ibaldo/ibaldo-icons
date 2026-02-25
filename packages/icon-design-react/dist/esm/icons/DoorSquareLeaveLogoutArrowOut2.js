import { forwardRef } from 'react';

const DoorSquareLeaveLogoutArrowOut2 = forwardRef(({
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
    <path d="M21.974731450043691,18.000000000481123v.999999999998181c0,1.656854249491516-1.343145750507574,3-3,3H4.974731450043691c-1.656854249493335,0-3-1.343145750508484-3-3V5.000000000479304c0-1.656854249491516,1.343145750506665-3,3-3h14c1.656854249492426,0,3,1.343145750508484,3,3v1.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.974731450043691 9.000000000481123 21.974731450043691 12.000000000479304 18.974731450043691 15.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.974731450043691" y1="12.000000000479304" x2="21.974731450043691" y2="12.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731450043691" y1="8.000000000481123" x2="7.974731450043691" y2="10.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

DoorSquareLeaveLogoutArrowOut2.displayName = 'DoorSquareLeaveLogoutArrowOut2';

export default DoorSquareLeaveLogoutArrowOut2;
export { DoorSquareLeaveLogoutArrowOut2 };
