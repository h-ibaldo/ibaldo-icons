import { createElement, forwardRef } from 'react';

const SquareArrowRight = forwardRef(function SquareArrowRight(
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
    createElement('polyline', {"points":"13.025268536159274 8.9999999990996 16.025268535620853 11.999999999638021 13.025268535080613 14.9999999990996","key":"0"}),
    createElement('line', {"x1":"8.025268535620853","y1":"11.999999998201019","x2":"16.025268535620853","y2":"11.999999999638021","key":"1"}),
    createElement('rect', {"x":"2.025268535625401","y":"1.999999998828571","width":"20","height":"20","rx":"1.999999999998408","ry":"1.999999999998408","key":"2"})
  );
});

SquareArrowRight.displayName = 'SquareArrowRight';

export default SquareArrowRight;
export { SquareArrowRight };
