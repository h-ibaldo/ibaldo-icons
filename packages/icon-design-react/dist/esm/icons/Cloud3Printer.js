import { forwardRef } from 'react';

const Cloud3Printer = forwardRef(({
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
    <rect x="9" y="17.999999973497324" width="6" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9 13.999999973497324 9 10.999999973497324 15 10.999999973497324 15 13.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9,19.999999973497324h-2c-.552284749830505,0-1-.447715250169495-1-1v-4c0-.5522847498396.447715250169495-1,1-1h10c.552284749830505,0,1,.4477152501604,1,1v4c0,.552284749830505-.447715250169495,1-1,1h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21,14.972656223497324c.620178222659888-.832763671889552,1-1.8544921875,1-2.97265625,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386709655-2.882202148441138-2.919616699209655-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648441138-2.318725585939319.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,1.118103027340112.3798828125,2.139770507801586,1,2.972595214840112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud3Printer.displayName = 'Cloud3Printer';

export default Cloud3Printer;
export { Cloud3Printer };
