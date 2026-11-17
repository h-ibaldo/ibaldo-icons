import { createElement, forwardRef } from 'react';

const ChartLineSquareWide = forwardRef(function ChartLineSquareWide(
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
    createElement('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('polyline', {"points":"2 16 8 11 12 15 22 7","key":"1"})
  );
});

ChartLineSquareWide.displayName = 'ChartLineSquareWide';

export default ChartLineSquareWide;
export { ChartLineSquareWide };
