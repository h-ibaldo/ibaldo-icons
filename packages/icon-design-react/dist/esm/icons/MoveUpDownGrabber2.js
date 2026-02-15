import { forwardRef } from 'react';

const MoveUpDownGrabber2 = forwardRef(({
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
    <line x1="21.000000004469257" y1="12.000000003885361" x2="3.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.000000004469257" y1="8.000000003885361" x2="3.000000004469257" y2="8.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 15.000000004469257 4.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000004469257" y1="16.000000003885361" x2="21.000000004469257" y2="16.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 9.000000004469257 20.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

MoveUpDownGrabber2.displayName = 'MoveUpDownGrabber2';

export default MoveUpDownGrabber2;
export { MoveUpDownGrabber2 };
