import { createElement, forwardRef } from 'react';

const CheckSquareCompact = forwardRef(function CheckSquareCompact(
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
    createElement('polyline', {"points":"8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213","key":"0"}),
    createElement('rect', {"x":"3.949462885140747","y":"4.000000000480213","width":"16","height":"16","rx":"3","ry":"3","key":"1"})
  );
});

CheckSquareCompact.displayName = 'CheckSquareCompact';

export default CheckSquareCompact;
export { CheckSquareCompact };
