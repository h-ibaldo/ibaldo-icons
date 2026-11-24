import { createElement, forwardRef } from 'react';

const ChartTrendUp = forwardRef(function ChartTrendUp(
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
    createElement('polyline', {"points":"2 18 10 11 14 15 22 7","key":"0"}),
    createElement('polyline', {"points":"22 11 22 7 18 7","key":"1"})
  );
});

ChartTrendUp.displayName = 'ChartTrendUp';

export default ChartTrendUp;
export { ChartTrendUp };
