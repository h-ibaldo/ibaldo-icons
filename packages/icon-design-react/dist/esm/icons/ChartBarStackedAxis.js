import { createElement, forwardRef } from 'react';

const ChartBarStackedAxis = forwardRef(function ChartBarStackedAxis(
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
    createElement('path', {"d":"M6 9L10 9L10 18L6 18Z","key":"1"}),
    createElement('path', {"d":"M14 5L18 5L18 18L14 18Z","key":"2"}),
    createElement('path', {"d":"M14 9L18 9","key":"3"}),
    createElement('path', {"d":"M6 13L10 13","key":"4"})
  );
});

ChartBarStackedAxis.displayName = 'ChartBarStackedAxis';

export default ChartBarStackedAxis;
export { ChartBarStackedAxis };
