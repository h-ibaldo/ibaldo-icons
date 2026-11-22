import { createElement, forwardRef } from 'react';

const ChartAxisGrid = forwardRef(function ChartAxisGrid(
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
    createElement('path', {"d":"M12 2L12 22","key":"1"}),
    createElement('path', {"d":"M12 2L12 22","key":"2"}),
    createElement('path', {"d":"M22 12L2 12","key":"3"})
  );
});

ChartAxisGrid.displayName = 'ChartAxisGrid';

export default ChartAxisGrid;
export { ChartAxisGrid };
