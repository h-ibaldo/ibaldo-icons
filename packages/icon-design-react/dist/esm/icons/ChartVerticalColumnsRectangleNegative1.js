import { createElement, forwardRef } from 'react';

const ChartVerticalColumnsRectangleNegative1 = forwardRef(function ChartVerticalColumnsRectangleNegative1(
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
    createElement('rect', {"x":"1.974731440099276","y":"2.000000004336471","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('rect', {"x":"5.974731440099276","y":"6.000000003885361","width":"4","height":"6","key":"1"}),
    createElement('rect', {"x":"9.974731440099276","y":"6.000000003885361","width":"4","height":"9","key":"2"}),
    createElement('rect', {"x":"13.974731440099276","y":"6.000000003885361","width":"4","height":"5","key":"3"})
  );
});

ChartVerticalColumnsRectangleNegative1.displayName = 'ChartVerticalColumnsRectangleNegative1';

export default ChartVerticalColumnsRectangleNegative1;
export { ChartVerticalColumnsRectangleNegative1 };
