import { createElement, forwardRef } from 'react';

const WindowControlMinimizeSquare = forwardRef(function WindowControlMinimizeSquare(
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
    createElement('rect', {"x":"1.94946288328174","y":"1.998779303956326","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"16.94946288328174","y1":"16.998779303956326","x2":"6.94946288328174","y2":"16.998779303956326","key":"1"})
  );
});

WindowControlMinimizeSquare.displayName = 'WindowControlMinimizeSquare';

export default WindowControlMinimizeSquare;
export { WindowControlMinimizeSquare };
