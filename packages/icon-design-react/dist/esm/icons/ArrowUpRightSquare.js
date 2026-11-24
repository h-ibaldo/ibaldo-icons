import { createElement, forwardRef } from 'react';

const ArrowUpRightSquare = forwardRef(function ArrowUpRightSquare(
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
    createElement('rect', {"x":"1.999999998563908","y":"1.999999999045031","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408","key":"0"}),
    createElement('polyline', {"points":"9.999999999998181 8.999999999045031 14.999999999998181 8.999999999045031 14.999999999998181 13.999999999045031","key":"1"}),
    createElement('line', {"x1":"8.999999999998181","y1":"14.999999999045031","x2":"14.999999999998181","y2":"8.999999999045031","key":"2"})
  );
});

ArrowUpRightSquare.displayName = 'ArrowUpRightSquare';

export default ArrowUpRightSquare;
export { ArrowUpRightSquare };
