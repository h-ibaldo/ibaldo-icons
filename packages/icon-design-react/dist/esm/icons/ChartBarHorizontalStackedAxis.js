import { createElement, forwardRef } from 'react';

const ChartBarHorizontalStackedAxis = forwardRef(function ChartBarHorizontalStackedAxis(
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
    createElement('path', {"d":"M2 2L2 22L22.023 22","key":"0"}),
    createElement('path', {"d":"M15 5L15 9L6 9L6 5Z","key":"1"}),
    createElement('path', {"d":"M19 13L19 17L6 17L6 13Z","key":"2"}),
    createElement('path', {"d":"M11 5L11 9","key":"3"}),
    createElement('path', {"d":"M15 13L15 17","key":"4"})
  );
});

ChartBarHorizontalStackedAxis.displayName = 'ChartBarHorizontalStackedAxis';

export default ChartBarHorizontalStackedAxis;
export { ChartBarHorizontalStackedAxis };
