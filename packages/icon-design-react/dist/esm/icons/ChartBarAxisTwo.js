import { createElement, forwardRef } from 'react';

const ChartBarAxisTwo = forwardRef(function ChartBarAxisTwo(
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
    createElement('path', {"d":"M6 10L10 10L10 18L6 18Z","key":"1"}),
    createElement('path', {"d":"M14 5L18 5L18 18L14 18Z","key":"2"})
  );
});

ChartBarAxisTwo.displayName = 'ChartBarAxisTwo';

export default ChartBarAxisTwo;
export { ChartBarAxisTwo };
