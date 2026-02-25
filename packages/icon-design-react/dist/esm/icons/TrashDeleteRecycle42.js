import { forwardRef } from 'react';

const TrashDeleteRecycle42 = forwardRef(({
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
    <polyline points="22.025268555169532 4.000000000133696 15.025268555169532 4.000000000448381 15.025268555089497 2.000000000448381 9.025268555089497 2.00000000071941 9.025268555169532 4.00000000071941 2.025268555169532 4.000000001032276" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.025268555978982,22.000000000224645l-2,.000000000628461c-1.104569499668287.000000000050022-2.000000000040018-.895430500248949-2.00000000008913-1.99999999990996l-.00000000072032-16.000000000001819" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.025268555169532" y1="4.000000000224645" x2="20.025268555978982" y2="9.000000000224645" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <polyline points="22.025268555529692 12.000000001481567 22.025268555529692 15.000000001479748 19.025268555529692 15.000000001479748" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.025268555529692 21.000000001481567 11.025268555529692 18.000000001483386 14.025268555529692 18.000000001483386" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.603149414899235,15.000000001481567c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-1.630493164060681,0-3.064636230470569.792236328125-3.977355957020336,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.126037598509356,18.000000001481567c.46337890625,2.28216552734375,2.480346679680224,4,4.899230957020336,4,2.047790527340112,0,3.796447753909888-1.237548828125,4.5693359375-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  </svg>
));

TrashDeleteRecycle42.displayName = 'TrashDeleteRecycle42';

export default TrashDeleteRecycle42;
export { TrashDeleteRecycle42 };
