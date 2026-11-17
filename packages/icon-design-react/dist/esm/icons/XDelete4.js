import { createElement, forwardRef } from 'react';

const XDelete4 = forwardRef(function XDelete4(
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
    createElement('line', {"x1":"7.999999990970537","y1":"16.000000000715772","x2":"15.999999990610377","y2":"8.00000000107957","key":"0"}),
    createElement('line', {"x1":"15.999999990430297","y1":"16.000000000894943","x2":"7.999999991150617","y2":"8.0000000009004","key":"1"})
  );
});

XDelete4.displayName = 'XDelete4';

export default XDelete4;
export { XDelete4 };
