import { createElement, forwardRef } from 'react';

const ChartLineOscillate2 = forwardRef(function ChartLineOscillate2(
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
    createElement('polyline', {"points":"4 12.000000000480213 9 19.000000000480213 15 5.000000000480213 20 12.000000000480213","key":"0"})
  );
});

ChartLineOscillate2.displayName = 'ChartLineOscillate2';

export default ChartLineOscillate2;
export { ChartLineOscillate2 };
