import { createElement, forwardRef } from 'react';

const LupeZoomOut = forwardRef(function LupeZoomOut(
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
    createElement('circle', {"cx":"10.999999993642632","cy":"10.998779299955459","r":"8.999999999998636","key":"0"}),
    createElement('line', {"x1":"17.363952630352287","y1":"17.362731936675118","x2":"21.999999993642632","y2":"21.998779299956368","key":"1"}),
    createElement('line', {"x1":"6.999999993642632","y1":"10.998779299956368","x2":"14.999999993642632","y2":"10.998779299956368","key":"2"})
  );
});

LupeZoomOut.displayName = 'LupeZoomOut';

export default LupeZoomOut;
export { LupeZoomOut };
