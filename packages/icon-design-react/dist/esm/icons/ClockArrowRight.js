import { forwardRef } from 'react';

const ClockArrowRight = forwardRef(({
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
    <line x1="2" y1="18.999999999887223" x2="10" y2="18.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7 15.999999999887223 10 18.999999999887223 7 21.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13,21.949523925668473c5.05322265625-.501892089840112,9-4.764282226560681,9-9.94952392578125,0-5.522827148439319-4.477172851560681-10-10-10S2,6.477172851447904,2,11.999999999887223c0,.685974121090112.076232910159888,1.353149414060681.208312988279431,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ClockArrowRight.displayName = 'ClockArrowRight';

export default ClockArrowRight;
export { ClockArrowRight };
