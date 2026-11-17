import { createElement, forwardRef } from 'react';

const ChartBarDownSquareThin = forwardRef(function ChartBarDownSquareThin(
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
    createElement('line', {"x1":"7","y1":"12","x2":"7","y2":"6","key":"1"}),
    createElement('line', {"x1":"12","y1":"11","x2":"12","y2":"6","key":"2"}),
    createElement('line', {"x1":"17","y1":"15","x2":"17","y2":"6","key":"3"})
  );
});

ChartBarDownSquareThin.displayName = 'ChartBarDownSquareThin';

export default ChartBarDownSquareThin;
export { ChartBarDownSquareThin };
