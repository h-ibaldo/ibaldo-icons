import { createElement, forwardRef } from 'react';

const ChartLineCircle = forwardRef(function ChartLineCircle(
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
    createElement('circle', {"cx":"11.974731440100186","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement('polyline', {"points":"6.974731440100186 15.000000003885361 9.974731440100186 11.000000003885361 13.974731440100186 14.000000003885361 16.974731440100186 10.000000003885361","key":"1"})
  );
});

ChartLineCircle.displayName = 'ChartLineCircle';

export default ChartLineCircle;
export { ChartLineCircle };
