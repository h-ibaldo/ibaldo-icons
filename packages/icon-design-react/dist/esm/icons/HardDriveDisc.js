import { createElement, forwardRef } from 'react';

const HardDriveDisc = forwardRef(function HardDriveDisc(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('line', {"x1":"22.016630450970297","y1":"18.000000000567525","x2":"18.016630450970297","y2":"22.000000000389264","key":"0"}),
    createElement('line', {"x1":"18.016630451060337","y1":"18.000000000480213","x2":"22.016630450880257","y2":"22.000000000480213","key":"1"}),
    createElement('path', {"d":"M22.016630450970297,15.000000000480213v-1c0-.552284749832324-.447715250170404-1-1-1H3.016630450970297c-.552284749830505,0-1,.447715250167676-1,1v5c0,.552284749828686.447715250169495,1,1,1h12","key":"2"}),
    createElement('circle', {"cx":"12.016630450970297","cy":"11.000000000480213","r":"2","key":"3"}),
    createElement('path', {"d":"M17.207365314249728,8.000000000480213c-1.037841796869543-1.7916259765625-2.97119140625-3-5.190734863279431-3","key":"4"}),
    createElement('path', {"d":"M20.78591756033984,13.000000000480213c.146362304690228-.64410400390625.230712890630457-1.3116455078125.230712890630457-2,0-4.9705810546875-4.029418945310681-9-9-9C7.046049396280068,2.000000000480213,3.016630450970297,6.029418945792713,3.016630450970297,11.000000000480213c0,.6883544921875.084350585939319,1.35589599609375.230712890619543,2","key":"5"})
  );
});

HardDriveDisc.displayName = 'HardDriveDisc';

export default HardDriveDisc;
export { HardDriveDisc };
