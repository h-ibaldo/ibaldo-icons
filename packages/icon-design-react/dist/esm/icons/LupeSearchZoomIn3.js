import { createElement, forwardRef } from 'react';

const LupeSearchZoomIn3 = forwardRef(function LupeSearchZoomIn3(
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
    createElement('circle', {"cx":"8.999999993642632","cy":"8.998779299956368","r":"7.000000000000001","key":"0"}),
    createElement('line', {"x1":"21.999999993642632","y1":"21.998779299956368","x2":"13.999999993642632","y2":"13.998779299956368","key":"1"}),
    createElement('line', {"x1":"8.999999993642632","y1":"5.998779299956368","x2":"8.999999993642632","y2":"11.998779299956368","key":"2"}),
    createElement('line', {"x1":"11.999999993642632","y1":"8.998779299956368","x2":"5.999999993642632","y2":"8.998779299956368","key":"3"})
  );
});

LupeSearchZoomIn3.displayName = 'LupeSearchZoomIn3';

export default LupeSearchZoomIn3;
export { LupeSearchZoomIn3 };
