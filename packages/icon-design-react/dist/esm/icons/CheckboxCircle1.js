import { createElement, forwardRef } from 'react';

const CheckboxCircle1 = forwardRef(function CheckboxCircle1(
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
    createElement('circle', {"cx":"11.949462885140747","cy":"12.000000000480213","r":"8","key":"0"}),
    createElement('polyline', {"points":"8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213","key":"1"})
  );
});

CheckboxCircle1.displayName = 'CheckboxCircle1';

export default CheckboxCircle1;
export { CheckboxCircle1 };
