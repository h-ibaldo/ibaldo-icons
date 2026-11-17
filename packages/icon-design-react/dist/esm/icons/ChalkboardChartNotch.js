import { createElement, forwardRef } from 'react';

const ChalkboardChartNotch = forwardRef(function ChalkboardChartNotch(
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
    createElement('path', {"d":"M2 5L2 19L12 19L12 18C12 17.445 12.445 17 13 17L17 17C17.555 17 18 17.445 18 18L18 19L22 19L22 5Z","key":"0"}),
    createElement('path', {"d":"M7 14L11 10L14 12L17 9","key":"1"})
  );
});

ChalkboardChartNotch.displayName = 'ChalkboardChartNotch';

export default ChalkboardChartNotch;
export { ChalkboardChartNotch };
