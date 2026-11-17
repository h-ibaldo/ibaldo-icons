import { createElement, forwardRef } from 'react';

const DashboardTrendUpPie = forwardRef(function DashboardTrendUpPie(
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
    createElement('path', {"d":"M14 16C14 12.688 11.313 10 8 10C4.688 10 2 12.688 2 16C2 19.313 4.688 22 8 22C11.313 22 14 19.313 14 16Z","key":"0"}),
    createElement('path', {"d":"M8 10L8 16L14 16","key":"1"}),
    createElement('path', {"d":"M18 12L22 12","key":"2"}),
    createElement('path', {"d":"M18 16L22 16","key":"3"}),
    createElement('path', {"d":"M18 20L22 20","key":"4"}),
    createElement('path', {"d":"M2 7L10 3L17 7L22 2","key":"5"}),
    createElement('path', {"d":"M18 2L22 2L22 6","key":"6"})
  );
});

DashboardTrendUpPie.displayName = 'DashboardTrendUpPie';

export default DashboardTrendUpPie;
export { DashboardTrendUpPie };
