import { forwardRef } from 'react';

const SystemDiagnosticLaptop = forwardRef(({
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
    <line x1="1.999999990599463" y1="21.000000005169568" x2="21.999999990599463" y2="21.000000005169568" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.999999990599463,13.000000005169568v2c0,1.104569499661011-.895430500329894,2-2,2H5.999999990599463c-1.104569499659192,0-2-.895430500338989-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.999999990420292,7.000000004987669l.00000000017917-2c.000000000100044-1.104569499661011.895430500529983-1.999999999919964,2.00000000018008-1.999999999818101l12,.000000001076842c1.104569499661011.000000000098225,1.999999999919964.89543050051725,1.99999999981992,2.000000000178261l-.00000000017917,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="19.999999990599463 10.00000000588625 15.999999990599463 10.00000000552609 13.999999990340257 13.000000005347829 9.999999990870492 7.000000004987669 7.999999990599463 10.000000004809408 3.999999990599463 10.000000004449248" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

SystemDiagnosticLaptop.displayName = 'SystemDiagnosticLaptop';

export default SystemDiagnosticLaptop;
export { SystemDiagnosticLaptop };
