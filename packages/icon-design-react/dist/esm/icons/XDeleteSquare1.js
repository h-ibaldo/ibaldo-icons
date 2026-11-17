import { createElement, forwardRef } from 'react';

const XDeleteSquare1 = forwardRef(function XDeleteSquare1(
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
    createElement('line', {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990599463","y2":"8.00000000107957","key":"0"}),
    createElement('line', {"x1":"15.999999990419383","y1":"16.000000000894943","x2":"7.999999991139703","y2":"8.0000000009004","key":"1"}),
    createElement('rect', {"x":"1.999999990779543","y":"2.000000000897671","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

XDeleteSquare1.displayName = 'XDeleteSquare1';

export default XDeleteSquare1;
export { XDeleteSquare1 };
