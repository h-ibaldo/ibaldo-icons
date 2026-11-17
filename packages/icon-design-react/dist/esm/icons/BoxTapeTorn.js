import { createElement, forwardRef } from 'react';

const BoxTapeTorn = forwardRef(function BoxTapeTorn(
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
    createElement('polyline', {"points":"15 1.999999999998181 15 8.999999999998181 14 7.999999999998181 13 8.999999999998181 12 7.999999999998181 11 8.999999999998181 10 7.999999999998181 9 8.999999999998181 9 1.999999999998181","key":"1"})
  );
});

BoxTapeTorn.displayName = 'BoxTapeTorn';

export default BoxTapeTorn;
export { BoxTapeTorn };
