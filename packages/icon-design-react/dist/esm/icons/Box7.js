import { createElement, forwardRef } from 'react';

const Box7 = forwardRef(function Box7(
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
    createElement('polyline', {"points":"15 1.999999999998181 15 7.999999999998181 14 6.999999999998181 13 7.999999999998181 12 6.999999999998181 11 7.999999999998181 10 6.999999999998181 9 7.999999999998181 9 1.999999999998181","key":"1"}),
    createElement('rect', {"x":"11","y":"13.999999999998181","width":"7","height":"3.999999999688953","key":"2"})
  );
});

Box7.displayName = 'Box7';

export default Box7;
export { Box7 };
