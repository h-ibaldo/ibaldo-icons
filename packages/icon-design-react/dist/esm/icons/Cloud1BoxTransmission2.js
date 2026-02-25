import { forwardRef } from 'react';

const Cloud1BoxTransmission2 = forwardRef(({
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
    <path d="M21.999999999996362,10.999999999727152v6.000000000271029c0,2.761423749148889-2.238576250845654,5-5,5H6.999999999996362c-2.761423749154346,0-5-2.238576250851111-5-5V6.999999999998181C1.999999999996362,4.238576250838378,4.238576250842016,1.999999999998181,6.999999999996362,1.999999999998181h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.999999999996362,1.999999999998181c2.761423749154346,0,5,2.238576250840197,5,5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.999999999996362,6.999999999727152c0-1.104569499599165-.895430500399016-2-2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999999996362,12.050415038787833v-1.550415039069776c0-1.932983398430224-1.5670166015625-3.5-3.5-3.5-1.77740478515625,0-3.2293701171875,1.329650878909888-3.4542236328125,3.045776367189319-1.71612548828125.224853515630457-3.0457763671875,1.676818847659888-3.0457763671875,3.454223632810681,0,1.932983398439319,1.5670166015625,3.5,3.5,3.5h6c1.3807373046875,0,2.5-1.119262695310681,2.5-2.5,0-1.20947265625-.85888671875-2.217895507810681-2-2.449584960930224Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud1BoxTransmission2.displayName = 'Cloud1BoxTransmission2';

export default Cloud1BoxTransmission2;
export { Cloud1BoxTransmission2 };
