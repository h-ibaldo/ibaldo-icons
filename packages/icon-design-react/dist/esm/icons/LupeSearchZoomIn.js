import { createElement, forwardRef } from 'react';

const LupeSearchZoomIn = forwardRef(function LupeSearchZoomIn(
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
    createElement('circle', {"cx":"11.000000014892066","cy":"10.998779301076866","r":"9","key":"0"}),
    createElement('line', {"x1":"17.363952651612635","y1":"17.362731937795616","x2":"22.000000014892066","y2":"21.998779301076866","key":"1"}),
    createElement('line', {"x1":"7.000000014892066","y1":"10.998779301076866","x2":"15.000000014892066","y2":"10.998779301076866","key":"2"}),
    createElement('line', {"x1":"11.000000014892066","y1":"6.998779301076866","x2":"11.000000014892066","y2":"14.998779301076866","key":"3"})
  );
});

LupeSearchZoomIn.displayName = 'LupeSearchZoomIn';

export default LupeSearchZoomIn;
export { LupeSearchZoomIn };
