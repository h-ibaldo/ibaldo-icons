import { createElement, forwardRef } from 'react';

const ChartLineRising = forwardRef(function ChartLineRising(
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
    createElement('polyline', {"points":"2 2 2 22 22 22","key":"0"}),
    createElement('polyline', {"points":"6 17 12 10 16 14 22 7","key":"1"})
  );
});

ChartLineRising.displayName = 'ChartLineRising';

export default ChartLineRising;
export { ChartLineRising };
