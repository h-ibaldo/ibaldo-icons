import { createElement, forwardRef } from 'react';

const ChartGanttSquare = forwardRef(function ChartGanttSquare(
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
    createElement('path', {"d":"M20.023 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20.004 2C21.105 2 22 2.895 22.004 3.996L22.023 19.996C22.023 21.102 21.129 22 20.023 22Z","key":"0"}),
    createElement('path', {"d":"M11.965 12L6 12","key":"1"}),
    createElement('path', {"d":"M15.965 16L10 16","key":"2"}),
    createElement('path', {"d":"M17.965 8L10 8","key":"3"})
  );
});

ChartGanttSquare.displayName = 'ChartGanttSquare';

export default ChartGanttSquare;
export { ChartGanttSquare };
