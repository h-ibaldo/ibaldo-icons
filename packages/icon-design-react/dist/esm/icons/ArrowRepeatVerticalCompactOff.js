import { createElement, forwardRef } from 'react';

const ArrowRepeatVerticalCompactOff = forwardRef(function ArrowRepeatVerticalCompactOff(
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
    createElement('polyline', {"points":"22 15 19.000000000130967 18.000000000141881 16 15.000000000271029","key":"0"}),
    createElement('line', {"x1":"21.999999999596184","y1":"2","x2":"1.999999999596184","y2":"22","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('line', {"x1":"14.99999999973079","y1":"4","x2":"8.99999999973079","y2":"4","key":"0"}),
      createElement('path', {"d":"M18.99999999973079,18V7c0-.5712890625-.16839599609375-1.099853515619543-.445617675782159-1.554443359369543","key":"1"})),
    createElement('polyline', {"points":"1.99999999973079 9.000000000141881 4.999999999599822 6 7.99999999973079 8.999999999870852","key":"3"}),
    createElement('g', {"key":"4"},
      createElement('line', {"x1":"9","y1":"20.000000000141881","x2":"15","y2":"20.000000000141881","key":"0"}),
      createElement('path', {"d":"M5,6.000000000141881v11c0,.5712890625.16839599609375,1.099853515628638.44561767578125,1.554443359378638","key":"1"}))
  );
});

ArrowRepeatVerticalCompactOff.displayName = 'ArrowRepeatVerticalCompactOff';

export default ArrowRepeatVerticalCompactOff;
export { ArrowRepeatVerticalCompactOff };
