import { createElement, forwardRef } from 'react';

const XSquare = forwardRef(function XSquare(
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
    createElement('line', {"x1":"8.999999990919605","y1":"15.000000000763976","x2":"14.999999990650394","y2":"9.000000001032276","key":"0"}),
    createElement('line', {"x1":"14.999999990510332","y1":"15.000000000894943","x2":"8.999999991050572","y2":"9.000000000897671","key":"1"}),
    createElement('rect', {"x":"1.999999990779543","y":"2.000000000897671","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

XSquare.displayName = 'XSquare';

export default XSquare;
export { XSquare };
