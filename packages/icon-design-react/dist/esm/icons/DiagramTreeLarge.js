import { createElement, forwardRef } from 'react';

const DiagramTreeLarge = forwardRef(function DiagramTreeLarge(
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
    createElement('rect', {"x":"2.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"0"}),
    createElement('rect', {"x":"10.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"1"}),
    createElement('rect', {"x":"10.016630450973025","y":"2.000000000480213","width":"4","height":"6","key":"2"}),
    createElement('rect', {"x":"18.016630450973025","y":"16.000000000480213","width":"4","height":"6","key":"3"}),
    createElement('polyline', {"points":"4.016630450971206 16.000000000480213 4.016630450971206 12.000000000480213 20.016630450971206 12.000000000480213 20.016630450971206 16.000000000480213","key":"4"}),
    createElement('line', {"x1":"12.016630450971206","y1":"8.000000000480213","x2":"12.016630450971206","y2":"16.000000000480213","key":"5"})
  );
});

DiagramTreeLarge.displayName = 'DiagramTreeLarge';

export default DiagramTreeLarge;
export { DiagramTreeLarge };
