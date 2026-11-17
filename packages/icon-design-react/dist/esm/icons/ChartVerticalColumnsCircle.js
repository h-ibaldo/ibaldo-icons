import { createElement, forwardRef } from 'react';

const ChartVerticalColumnsCircle = forwardRef(function ChartVerticalColumnsCircle(
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
    createElement('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10","key":"0"}),
    createElement('rect', {"x":"5.974731440099276","y":"11.000000003885361","width":"4","height":"4","key":"1"}),
    createElement('rect', {"x":"9.974731440099276","y":"7.000000003885361","width":"4","height":"8","key":"2"}),
    createElement('rect', {"x":"13.974731440099276","y":"9.000000003885361","width":"4","height":"6","key":"3"})
  );
});

ChartVerticalColumnsCircle.displayName = 'ChartVerticalColumnsCircle';

export default ChartVerticalColumnsCircle;
export { ChartVerticalColumnsCircle };
