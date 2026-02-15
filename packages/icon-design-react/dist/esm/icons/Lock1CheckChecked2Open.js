import { forwardRef } from 'react';

const Lock1CheckChecked2Open = forwardRef(({
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
    <path d="M3.067167566010539,12.056394887018541v-6.000003997516615c0-2.209136791556375,1.790859210928829-3.999996002483385,3.999996002479747-3.999996002483385h.000008000009984c2.209136796709572,0,3.999996009779352,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.067167566010539 20.056394887018541 18.067167566010539 22.056394887018541 22.067167566010539 18.056394887018541" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.067167566010539 22.056394887018541 9.067167566010539 22.056394887018541 9.067167566010539 13.056394887018541 21.067167566010539 13.056394887018541 21.067167566010539 15.056394887018541" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

Lock1CheckChecked2Open.displayName = 'Lock1CheckChecked2Open';

export default Lock1CheckChecked2Open;
export { Lock1CheckChecked2Open };
