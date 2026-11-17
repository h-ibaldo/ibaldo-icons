import { createElement, forwardRef } from 'react';

const Box5 = forwardRef(function Box5(
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
    createElement('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1","key":"0"}),
    createElement('polyline', {"points":"15 1.999999999998181 15 7.999999999998181 9 7.999999999998181 9 1.999999999998181","key":"1"})
  );
});

Box5.displayName = 'Box5';

export default Box5;
export { Box5 };
