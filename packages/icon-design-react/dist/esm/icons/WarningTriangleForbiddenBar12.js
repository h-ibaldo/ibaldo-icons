import { forwardRef } from 'react';

const WarningTriangleForbiddenBar12 = forwardRef(({
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
    <line x1="2.000000004471076" y1="22.000000003885361" x2="22.000000004471076" y2="6.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.718444828678912,20.625244144510361c.422790527340112.23443603515625.912048339840112.374755859375,1.451110839840112.374755859375h13.660888671880457c2.303466796869543,0,3.74755859375-2.48846435546875,2.604736328119543-4.488403320307953l-3.945007324209655-6.903747558598297" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.764709477130964,6.58825683982559l-1.159973144540345-2.029968261719659c-1.15167236328125-2.015441894530341-4.057800292959655-2.015441894530341-5.20947265625,0l-6.830444335941138,11.953308105471478c-.168151855470569.294250488276703-.274047851558862.599243164057953-.335693359380457.905151367182953" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

WarningTriangleForbiddenBar12.displayName = 'WarningTriangleForbiddenBar12';

export default WarningTriangleForbiddenBar12;
export { WarningTriangleForbiddenBar12 };
