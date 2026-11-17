import { createElement, forwardRef } from 'react';

const CheckSquareCircle = forwardRef(function CheckSquareCircle(
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
    createElement('circle', {"cx":"11.999999981180736","cy":"11.999996564258254","r":"10","key":"0"}),
    createElement('rect', {"x":"6.999999981180736","y":"6.999996564258254","width":"10","height":"10","key":"1"}),
    createElement('polyline', {"points":"9.999999981180736 11.999996564258254 10.999999981180736 13.499996564258254 13.999999981180736 10.999996564258254","key":"2"})
  );
});

CheckSquareCircle.displayName = 'CheckSquareCircle';

export default CheckSquareCircle;
export { CheckSquareCircle };
