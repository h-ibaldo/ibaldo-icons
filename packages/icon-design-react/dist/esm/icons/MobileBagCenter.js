import { createElement, forwardRef } from 'react';

const MobileBagCenter = forwardRef(function MobileBagCenter(
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
    createElement('path', {"d":"M2.999999988971467,21.998779300212846V3.998779300212846c0-1.104569499661011.895430500340808-2,2-2h14c1.104569499661011,0,2,.895430500338989,2,2v18","key":"0"}),
    createElement('polyline', {"points":"7.000004463861842 1.998778300212507 8.999999988971467 3.998778966883037 14.999999745192326 3.998779966883376 16.999999988971467 1.998778966883037","key":"1"}),
    createElement('rect', {"x":"6.999999988971467","y":"11.998778300212507","width":"10","height":"7","rx":"1","ry":"1","key":"2"}),
    createElement('path', {"d":"M13.999999988971467,13.998779300212846v-3.000003000001016c0-1.10456839509061-.895429604908713-1.999997999999323-1.999998000008418-1.999997999999323h-.00000399999044c-1.10456839509061,0-1.999998000001142.895429604908713-1.999998000001142,1.999997999999323v3.000003000001016","key":"3"})
  );
});

MobileBagCenter.displayName = 'MobileBagCenter';

export default MobileBagCenter;
export { MobileBagCenter };
