import { createElement, forwardRef } from 'react';

const ChartLineDownAxis = forwardRef(function ChartLineDownAxis(
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
    createElement('polyline', {"points":"6 7 12 14 16 10 22 17","key":"1"})
  );
});

ChartLineDownAxis.displayName = 'ChartLineDownAxis';

export default ChartLineDownAxis;
export { ChartLineDownAxis };
