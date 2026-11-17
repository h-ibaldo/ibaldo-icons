import { createElement, forwardRef } from 'react';

const AppsTab3 = forwardRef(function AppsTab3(
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
    createElement('polygon', {"points":"11.999999990796823 10.000000000448381 1.999999990796823 6.000000000448381 11.999999990796823 2.000000000448381 21.999999990796823 6.000000000448381 11.999999990796823 10.000000000448381","key":"0"}),
    createElement('polyline', {"points":"5.749999990796823 10.500000000448381 1.999999990796823 12.000000000448381 11.999999990796823 16.000000000448381 21.999999990796823 12.000000000448381 18.249999990796823 10.500000000448381","key":"1"}),
    createElement('polyline', {"points":"5.749999990796823 17.000000000448381 1.999999990796823 18.500000000448381 11.999999990796823 22.500000000448381 21.999999990796823 18.500000000448381 18.249999990796823 17.000000000448381","key":"2"})
  );
});

AppsTab3.displayName = 'AppsTab3';

export default AppsTab3;
export { AppsTab3 };
