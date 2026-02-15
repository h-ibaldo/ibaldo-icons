import { forwardRef } from 'react';

const ChecklistMultipleChoices10 = forwardRef(({
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
    <line x1="11.000000000224645" y1="4.032754075946286" x2="22.000000000224645" y2="4.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000000224645" y1="12.032754075946286" x2="22.000000000224645" y2="12.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000000224645" y1="20.032754075946286" x2="22.000000000224645" y2="20.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000000224645" y="10.032754075946286" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000000224645" y="2.032754075946286" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000000224645" y="18.032754075946286" width="4" height="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000224645" y1="3.032754075946286" x2="5.000000000224645" y2="5.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000172804" y1="5.032754075895355" x2="5.000000000276486" y2="3.032754075997218" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000224645" y1="11.032754075946286" x2="5.000000000224645" y2="13.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000172804" y1="13.032754075895355" x2="5.000000000276486" y2="11.032754075997218" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000224645" y1="19.032754075946286" x2="5.000000000224645" y2="21.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.000000000172804" y1="21.032754075895355" x2="5.000000000276486" y2="19.032754075997218" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

ChecklistMultipleChoices10.displayName = 'ChecklistMultipleChoices10';

export default ChecklistMultipleChoices10;
export { ChecklistMultipleChoices10 };
