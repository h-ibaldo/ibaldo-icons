import { createElement, forwardRef } from 'react';

const CheckDouble = forwardRef(function CheckDouble(
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
    createElement('polyline', {"points":"7.974731440090181 11.000000003874447 12.974731440090181 17.000000003874447 20.974731440090181 7.000000003874447","key":"0"}),
    createElement('polyline', {"points":"2.974731440090181 11.000000003874447 7.974731440090181 17.000000003874447 10.423706049479733 13.938781742155697","key":"1"}),
    createElement('line', {"x1":"12.709411615869612","y1":"11.081604007787973","x2":"15.974731440090181","y2":"7.000000003874447","key":"2"})
  );
});

CheckDouble.displayName = 'CheckDouble';

export default CheckDouble;
export { CheckDouble };
