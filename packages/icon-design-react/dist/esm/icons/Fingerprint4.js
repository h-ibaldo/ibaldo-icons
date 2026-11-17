import { createElement, forwardRef } from 'react';

const Fingerprint4 = forwardRef(function Fingerprint4(
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
    createElement('path', {"d":"M18,13.999999999996362c0-2.209138999198331-1.79086100079985-4-4-4s-4,1.790861000801669-4,4","key":"0"}),
    createElement('path', {"d":"M18,13.999999999996362c0,2.209138999198331,1.79086100079985,4,4,4","key":"1"}),
    createElement('path', {"d":"M22,13.999999999996362c0-4.418277998400299-3.581722001599701-8-8-8","key":"2"}),
    createElement('path', {"d":"M13.999996079539414,2.000004248329788c-6.627414832089926-.000000000299224-11.999996079239281,5.372581246370828-11.999996079539414,11.999996078462573","key":"3"}),
    createElement('path', {"d":"M14.00000000036016,13.99999999927968c-.000000000389264,4.418277998400299,3.581722000879381,8.000000000320142,7.99999999927968,8.000000000716682","key":"4"}),
    createElement('path', {"d":"M14.0000000018008,5.999999999996362c-4.418277998411213-.00000000098953-8.000000000800355,3.581721999802539-8.0000000018008,7.999999998202838","key":"5"}),
    createElement('path', {"d":"M22,5.07366943359375c-2.124145507810681-1.90496826171875-4.922180175779431-3.07366943359375-8-3.07366943359375","key":"6"}),
    createElement('path', {"d":"M10,14c0,3.07781982421875,1.168701171880457,5.875854492188409,3.073669433599207,8","key":"7"}),
    createElement('line', {"x1":"6","y1":"14","x2":"6","y2":"16","key":"8"}),
    createElement('path', {"d":"M6,16c0,2.116455078125.568237304689319,4.182006835938409,1.618896484380457,6","key":"9"}),
    createElement('path', {"d":"M2,14v1.52789306640625c0,2.212890625.388244628909888,4.40277099609375,1.140502929689319,6.47210693359375","key":"10"})
  );
});

Fingerprint4.displayName = 'Fingerprint4';

export default Fingerprint4;
export { Fingerprint4 };
