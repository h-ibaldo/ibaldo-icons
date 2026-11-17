import { createElement, forwardRef } from 'react';

const WarningForbidden3 = forwardRef(function WarningForbidden3(
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
    createElement('line', {"x1":"12.000000004469257","y1":"17.01000000388558","x2":"12.000000004469257","y2":"17.000000003885361","key":"0"}),
    createElement('line', {"x1":"12.000000004469257","y1":"8.000000003885361","x2":"12.000000004469257","y2":"12.000000003885361","key":"1"}),
    createElement('line', {"x1":"2.000000004469257","y1":"22.000000003885361","x2":"22.000000004469257","y2":"2.000000003886271","key":"2"}),
    createElement('path', {"d":"M16.828552250559369,7.171447757791611l-1.384826660159888-2.343627929685681c-1.548278808590112-2.6201171875-5.339172363268517-2.6201171875-6.887451171880457,0L2.566101078680731,14.965087894510361c-1.130126953121362,1.91253662109375-.455505371090112,4.1796875,1.15625,5.31256103515625","key":"3"}),
    createElement('path', {"d":"M9.000000004469257,21.000000003885361h8.990234375c3.09716796875,0,5.019287109371362-3.36846923828125,3.443664550770336-6.034912109375l-2.376770019520336-4.022216796875","key":"4"})
  );
});

WarningForbidden3.displayName = 'WarningForbidden3';

export default WarningForbidden3;
export { WarningForbidden3 };
