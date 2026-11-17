import { createElement, forwardRef } from 'react';

const SquaresFourGrid2 = forwardRef(function SquaresFourGrid2(
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
    createElement('rect', {"x":"2.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2","key":"0"}),
    createElement('rect', {"x":"15.000000005000402","y":"2.000000003888999","width":"7","height":"6.999999999997272","rx":"2","ry":"2","key":"1"}),
    createElement('rect', {"x":"2.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2","key":"2"}),
    createElement('rect', {"x":"15.000000005000402","y":"15.000000003886271","width":"7","height":"7","rx":"2","ry":"2","key":"3"})
  );
});

SquaresFourGrid2.displayName = 'SquaresFourGrid2';

export default SquaresFourGrid2;
export { SquaresFourGrid2 };
