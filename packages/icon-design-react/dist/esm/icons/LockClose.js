import { forwardRef } from 'react';

const LockClose = forwardRef(({
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
    <polyline points="11.067167566010539 22.056394887018541 5.067167566010539 22.056394887018541 5.067167566010539 13.056394887018541 17.067167566010539 13.056394887018541 17.067167566010539 15.056394887018541" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.067167561050155,13.056394887018541v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.00000799999907c2.209136796720486,0,3.99999600980118,1.790859218992409,3.999996002481566,3.999996015711076l-.000000019850631,7.000003984288924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.067167566150601" y1="22.056394891864329" x2="19.067167565870477" y2="18.056394887018541" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.067167566010539" y1="18.056394887193164" x2="19.067167566010539" y2="22.05639489168243" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

LockClose.displayName = 'LockClose';

export default LockClose;
export { LockClose };
