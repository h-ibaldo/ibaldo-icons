import { createElement, forwardRef } from 'react';

const ClockSplit = forwardRef(function ClockSplit(
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
    createElement('path', {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"0"}),
    createElement('path', {"d":"M12 6L12 12L8 14","key":"1"}),
    createElement('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 12.34 2.035 12.668 2.07 13","key":"2"})
  );
});

ClockSplit.displayName = 'ClockSplit';

export default ClockSplit;
export { ClockSplit };
