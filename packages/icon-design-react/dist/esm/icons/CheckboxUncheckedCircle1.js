import { createElement, forwardRef } from 'react';

const CheckboxUncheckedCircle1 = forwardRef(function CheckboxUncheckedCircle1(
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
    createElement('circle', {"cx":"11.949462885140747","cy":"12.000000000480213","r":"8","key":"0"})
  );
});

CheckboxUncheckedCircle1.displayName = 'CheckboxUncheckedCircle1';

export default CheckboxUncheckedCircle1;
export { CheckboxUncheckedCircle1 };
