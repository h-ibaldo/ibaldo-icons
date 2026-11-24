import { createElement, forwardRef } from 'react';

const DashboardPieSliderBars = forwardRef(function DashboardPieSliderBars(
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
    createElement('path', {"d":"M14 8C14 4.688 11.313 2 8 2C4.688 2 2 4.688 2 8C2 11.313 4.688 14 8 14C11.313 14 14 11.313 14 8Z","key":"0"}),
    createElement('path', {"d":"M8 2L8 8L14 8","key":"1"}),
    createElement('path', {"d":"M2 22L2 18","key":"2"}),
    createElement('path', {"d":"M6 22L6 20","key":"3"}),
    createElement('path', {"d":"M10 22L10 18","key":"4"}),
    createElement('path', {"d":"M14 22L14 20","key":"5"}),
    createElement('path', {"d":"M18 22L18 16","key":"6"}),
    createElement('path', {"d":"M22 22L22 13","key":"7"}),
    createElement('path', {"d":"M20 2L20 9","key":"8"}),
    createElement('path', {"d":"M20 6C20.555 6 21 5.555 21 5C21 4.445 20.555 4 20 4C19.445 4 19 4.445 19 5C19 5.555 19.445 6 20 6Z","key":"9"})
  );
});

DashboardPieSliderBars.displayName = 'DashboardPieSliderBars';

export default DashboardPieSliderBars;
export { DashboardPieSliderBars };
