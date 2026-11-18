import { createElement, forwardRef } from 'react';

const GaugeTrioCircle = forwardRef(function GaugeTrioCircle(
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
    createElement('path', {"d":"M7.051 6.051L5.637 4.637","key":"0"}),
    createElement('path', {"d":"M12 5L12 3","key":"1"}),
    createElement('path', {"d":"M18 14L18 18","key":"2"}),
    createElement('path', {"d":"M16 7L12 11","key":"3"}),
    createElement('path', {"d":"M11 11C11 10.445 11.445 10 12 10C12.555 10 13 10.445 13 11C13 11.555 12.555 12 12 12C11.445 12 11 11.555 11 11Z","key":"4"}),
    createElement('path', {"d":"M22 18C22 15.789 20.211 14 18 14C15.789 14 14 15.789 14 18C14 20.211 15.789 22 18 22C20.211 22 22 20.211 22 18Z","key":"5"}),
    createElement('path', {"d":"M8.828 15.172L6 18","key":"6"}),
    createElement('path', {"d":"M10 18C10 15.789 8.211 14 6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22C8.211 22 10 20.211 10 18Z","key":"7"}),
    createElement('path', {"d":"M20.941 10C20.445 5.5 16.633 2 12 2C7.367 2 3.555 5.5 3.059 10","key":"8"})
  );
});

GaugeTrioCircle.displayName = 'GaugeTrioCircle';

export default GaugeTrioCircle;
export { GaugeTrioCircle };
