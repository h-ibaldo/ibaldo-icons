import { createElement, forwardRef } from 'react';

const Box = forwardRef(function Box(
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
    createElement('polygon', {"points":"12 1.999999999998181 2 6.999999999998181 2 16.999999999998181 12 21.999999999998181 22 16.999999999998181 22 6.999999999998181 12 1.999999999998181","key":"0"}),
    createElement('line', {"x1":"7","y1":"4.499999999998181","x2":"17","y2":"9.499999999998181","key":"1"}),
    createElement('polyline', {"points":"2 6.999999999998181 12 11.999999999998181 22 6.999999999998181","key":"2"}),
    createElement('line', {"x1":"12","y1":"21.999999999998181","x2":"12","y2":"11.999999999998181","key":"3"})
  );
});

Box.displayName = 'Box';

export default Box;
export { Box };
