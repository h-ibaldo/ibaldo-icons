import { createElement, forwardRef } from 'react';

const RulerMeasure = forwardRef(function RulerMeasure(
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
    createElement('path', {"d":"M3 11L21 11C21.551 11 22 11.449 22 12L22 18C22 18.551 21.551 19 21 19L3 19C2.449 19 2 18.551 2 18L2 12C2 11.449 2.449 11 3 11Z","key":"0"}),
    createElement('path', {"d":"M6 14L6 11","key":"1"}),
    createElement('path', {"d":"M2 8L2 4","key":"2"}),
    createElement('path', {"d":"M22 8L22 4","key":"3"}),
    createElement('path', {"d":"M2 6L22 6","key":"4"}),
    createElement('path', {"d":"M10 14L10 11","key":"5"}),
    createElement('path', {"d":"M14 14L14 11","key":"6"}),
    createElement('path', {"d":"M18 14L18 11","key":"7"})
  );
});

RulerMeasure.displayName = 'RulerMeasure';

export default RulerMeasure;
export { RulerMeasure };
