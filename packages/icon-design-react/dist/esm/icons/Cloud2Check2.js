import { forwardRef } from 'react';

const Cloud2Check2 = forwardRef(({
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
    <polyline points="16.000000000020009 3.999999973508238 18.000000000020009 5.999999973508238 22.000000000020009 1.999999973508238" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.000000000029104,14.050415039047948v-.550415039049767c0-1.932983398450233-1.567016601569776-3.5-3.5-3.5-.257751464849207,0-.507385253909888.031860351549767-.749267578128638.084716796860448-.595764160159888-1.787414550770336-2.263061523441138-3.084716796860448-4.250732421871362-3.084716796860448-2.485290527349207,0-4.5,2.014709472659888-4.5,4.5v.775512695299767c-1.743774414069776.619873046890461-3,2.268005371110121-3,4.224487304700233,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h11c1.932983398430224,0,3.5-1.567016601559772,3.5-3.5,0-1.76171875-1.305969238288526-3.205078125-3-3.449584960950233Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Cloud2Check2.displayName = 'Cloud2Check2';

export default Cloud2Check2;
export { Cloud2Check2 };
