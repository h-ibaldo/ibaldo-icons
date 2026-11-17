import { createElement, forwardRef } from 'react';

const SunBrightnessSquare1 = forwardRef(function SunBrightnessSquare1(
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
    createElement('rect', {"x":"1.999999990796823","y":"2.000000000448381","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('polygon', {"points":"16.999999990796823 14.000000000448381 18.999999990796823 12.000000000448381 16.999999990796823 10.000000000448381 16.999999990796823 7.000000000448381 13.999999990796823 7.000000000448381 11.999999990796823 5.000000000448381 9.999999990796823 7.000000000448381 6.999999990796823 7.000000000448381 6.999999990796823 10.000000000448381 4.999999990796823 12.000000000448381 6.999999990796823 14.000000000448381 6.999999990796823 17.000000000448381 9.999999990796823 17.000000000448381 11.999999990796823 19.000000000448381 13.999999990796823 17.000000000448381 16.999999990796823 17.000000000448381 16.999999990796823 14.000000000448381","key":"1"}),
    createElement('line', {"x1":"11.999999990796823","y1":"5.000000000448381","x2":"11.999999990796823","y2":"19.000000000448381","key":"2"}),
    createElement('line', {"x1":"4.999999990796823","y1":"12.0000000004502","x2":"11.999999990796823","y2":"12.000000000448381","key":"3"}),
    createElement('line', {"x1":"6.999999990796823","y1":"9.000000000448381","x2":"11.999999990796823","y2":"9.000000000446562","key":"4"}),
    createElement('line', {"x1":"6.999999990796823","y1":"15.0000000004502","x2":"11.999999990796823","y2":"15.000000000448381","key":"5"})
  );
});

SunBrightnessSquare1.displayName = 'SunBrightnessSquare1';

export default SunBrightnessSquare1;
export { SunBrightnessSquare1 };
