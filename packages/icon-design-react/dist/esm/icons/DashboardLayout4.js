import { createElement, forwardRef } from 'react';

const DashboardLayout4 = forwardRef(function DashboardLayout4(
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
    createElement('rect', {"x":"15.999999990790457","y":"2.000000000448381","width":"6","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"1.999999990790457","y":"16.000000000448381","width":"10","height":"6","rx":"1","ry":"1","key":"1"}),
    createElement('circle', {"cx":"6.999999990790457","cy":"7.000000000449745","r":"4.999999999999773","key":"2"}),
    createElement('line', {"x1":"15.999999990790457","y1":"22.0000000004502","x2":"21.999999990790457","y2":"22.0000000004502","key":"3"}),
    createElement('line', {"x1":"15.999999990790457","y1":"18.000000000448381","x2":"21.999999990790457","y2":"18.000000000448381","key":"4"}),
    createElement('line', {"x1":"15.999999990790457","y1":"14.000000000448381","x2":"21.999999990790457","y2":"14.000000000448381","key":"5"}),
    createElement('polyline', {"points":"6.999999990790457 2.000000000448381 6.999999990790457 7.0000000004502 11.999999990790457 7.0000000004502","key":"6"})
  );
});

DashboardLayout4.displayName = 'DashboardLayout4';

export default DashboardLayout4;
export { DashboardLayout4 };
