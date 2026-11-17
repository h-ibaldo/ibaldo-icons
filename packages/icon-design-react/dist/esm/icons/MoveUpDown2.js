import { createElement, forwardRef } from 'react';

const MoveUpDown2 = forwardRef(function MoveUpDown2(
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
    createElement('line', {"x1":"21.000000004469257","y1":"12.000000003885361","x2":"3.000000004469257","y2":"12.000000003885361","key":"0"}),
    createElement('line', {"x1":"21.000000004469257","y1":"8.000000003885361","x2":"3.000000004469257","y2":"8.000000003885361","key":"1"}),
    createElement('polyline', {"points":"9.000000004469257 4.000000003886271 12.000000004469257 2.000000003886271 15.000000004469257 4.000000003886271","key":"2"}),
    createElement('line', {"x1":"3.000000004469257","y1":"16.000000003885361","x2":"21.000000004469257","y2":"16.000000003885361","key":"3"}),
    createElement('polyline', {"points":"15.000000004469257 20.000000003885361 12.000000004469257 22.000000003885361 9.000000004469257 20.000000003885361","key":"4"})
  );
});

MoveUpDown2.displayName = 'MoveUpDown2';

export default MoveUpDown2;
export { MoveUpDown2 };
