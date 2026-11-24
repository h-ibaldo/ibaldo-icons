import { createElement, forwardRef } from 'react';

const MinusSquare = forwardRef(function MinusSquare(
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
    createElement('rect', {"x":"2.000000004469257","y":"2.000000003886271","width":"20","height":"19.999999999999091","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"16","y1":"12.000000003885361","x2":"8","y2":"12.000000003885361","key":"1"})
  );
});

MinusSquare.displayName = 'MinusSquare';

export default MinusSquare;
export { MinusSquare };
