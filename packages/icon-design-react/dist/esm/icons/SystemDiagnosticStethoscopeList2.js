import { forwardRef } from 'react';

const SystemDiagnosticStethoscopeList2 = forwardRef(({
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
    <circle cx="4.041899013780494" cy="3.000000003892637" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="10.041899013270267" cy="3.000000003892637" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.041899013780494,13.99999499616024l-.000000000460204,2.000005006815627c-.000000000510227,2.209138999682182,1.790861000319637,4.000000000916771,4,4.000000000916771h5.999999997309715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="19.041899010630004" cy="20.000000003892637" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.041899013270267,3.000000003892637h.99999999675947c.552284748569946,0,.999999997689883.447715249196335.999999997600753.999999997766281l-.00000000099044,5.000000002233719c-.000000000460204,2.761420983591961-2.238574009509648,4.999994992267602-4.99999499309979,4.999994992267602h-.000009999999747c-2.761420983590142,0-4.999994992630491-2.238574008668365-4.9999949931007-4.999994992256688l-.000000000999535-5.000000002251909c-.00000000009004-.552284748566308.447715249019893-.999999997759005.999999997589839-.999999997759005h.999999996750375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.041899010630004" y1="4.000000003892637" x2="22.041899010630004" y2="4.000000003892637" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.041899010630004" y1="8.000000003892637" x2="22.041899010630004" y2="8.000000003892637" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.041899010630004" y1="12.000000003892637" x2="22.041899010630004" y2="12.000000003892637" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SystemDiagnosticStethoscopeList2.displayName = 'SystemDiagnosticStethoscopeList2';

export default SystemDiagnosticStethoscopeList2;
export { SystemDiagnosticStethoscopeList2 };
