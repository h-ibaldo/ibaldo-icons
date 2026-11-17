import { createElement, forwardRef } from 'react';

const CheckMarkDouble1 = forwardRef(function CheckMarkDouble1(
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
    createElement('polyline', {"points":"3.974731440090181 13.000000003874447 6.974731440090181 16.000000003874447 13.974731440090181 8.000000003874447","key":"0"}),
    createElement('polyline', {"points":"9.974731440090181 13.000000003874447 12.974731440090181 16.000000003874447 19.974731440090181 8.000000003874447","key":"1"})
  );
});

CheckMarkDouble1.displayName = 'CheckMarkDouble1';

export default CheckMarkDouble1;
export { CheckMarkDouble1 };
