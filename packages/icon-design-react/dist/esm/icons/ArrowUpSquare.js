import { createElement, forwardRef } from 'react';

const ArrowUpSquare = forwardRef(function ArrowUpSquare(
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
    createElement('polyline', {"points":"9.025268534540373 10.999999998695785 12.025268534680436 7.99999999883039 15.025268534540373 10.999999998964995","key":"0"}),
    createElement('line', {"x1":"12.025268534320276","y1":"15.99999999883039","x2":"12.025268534680436","y2":"7.999999998826752","key":"1"}),
    createElement('rect', {"x":"2.025268534409406","y":"1.999999998828571","width":"20","height":"20","rx":"1.999999999997726","ry":"1.999999999997726","key":"2"})
  );
});

ArrowUpSquare.displayName = 'ArrowUpSquare';

export default ArrowUpSquare;
export { ArrowUpSquare };
