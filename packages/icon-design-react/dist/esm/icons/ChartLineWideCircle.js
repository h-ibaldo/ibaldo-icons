import { createElement, forwardRef } from 'react';

const ChartLineWideCircle = forwardRef(function ChartLineWideCircle(
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
    createElement('circle', {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement('polyline', {"points":"21.3050537109375 8.35595703125 13 15 9 11 2.933776855472388 16.1995849609375","key":"1"})
  );
});

ChartLineWideCircle.displayName = 'ChartLineWideCircle';

export default ChartLineWideCircle;
export { ChartLineWideCircle };
