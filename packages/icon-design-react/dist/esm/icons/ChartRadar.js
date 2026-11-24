import { createElement, forwardRef } from 'react';

const ChartRadar = forwardRef(function ChartRadar(
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
    createElement('path', {"d":"M22 9.641L12 13","key":"0"}),
    createElement('path', {"d":"M18.18 22L12 13","key":"1"}),
    createElement('path', {"d":"M5.82 22L12 13","key":"2"}),
    createElement('path', {"d":"M2 9.641L12 13","key":"3"}),
    createElement('path', {"d":"M12 2L12 13","key":"4"}),
    createElement('path', {"d":"M7 20L4 10L12 4L21 10L16 19Z","key":"5"})
  );
});

ChartRadar.displayName = 'ChartRadar';

export default ChartRadar;
export { ChartRadar };
