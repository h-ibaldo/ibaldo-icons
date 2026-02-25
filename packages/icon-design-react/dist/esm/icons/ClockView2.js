import { forwardRef } from 'react';

const ClockView2 = forwardRef(({
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
    <polyline points="12 6.999999999887223 12 11.999999999887223 17 11.999999999887223" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8,14.999999999887223c-2.420349121090112,0-4.500549316409888,1.43603515625-5.44921875,3.5.948669433590112,2.06396484375,3.028869628909888,3.5,5.44921875,3.5s4.500549316409888-1.43603515625,5.44921875-3.5c-.948669433590112-2.06396484375-3.028869628909888-3.5-5.44921875-3.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8" cy="18.499999999887223" r=".5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,20.651245117078361c2.986145019529431-1.729858398441138,5-4.952026367191138,5-8.651245117191138,0-5.522827148439319-4.477111816409888-10-10-10C6.477172851560681,1.999999999887223,2,6.477172851447904,2,11.999999999887223c0,.337646484371362.017822265630457.671020507810681.050476074220569,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ClockView2.displayName = 'ClockView2';

export default ClockView2;
export { ClockView2 };
