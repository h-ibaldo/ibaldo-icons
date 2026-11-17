import { createElement, forwardRef } from 'react';

const MinusSquareLarge = forwardRef(function MinusSquareLarge(
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
    createElement('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"7","y1":"12","x2":"17","y2":"12","key":"1"})
  );
});

MinusSquareLarge.displayName = 'MinusSquareLarge';

export default MinusSquareLarge;
export { MinusSquareLarge };
