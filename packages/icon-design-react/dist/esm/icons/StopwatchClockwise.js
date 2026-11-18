import { createElement, forwardRef } from 'react';

const StopwatchClockwise = forwardRef(function StopwatchClockwise(
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
    createElement('path', {"d":"M5 5L3 7","key":"0"}),
    createElement('path', {"d":"M19 5L21 7","key":"1"}),
    createElement('path', {"d":"M10 3L14 3","key":"2"}),
    createElement('path', {"d":"M12 3L12 6","key":"3"}),
    createElement('path', {"d":"M4 21L4 17L8 17","key":"4"}),
    createElement('path', {"d":"M5.07 18C6.453 20.391 9.039 22 12 22C16.418 22 20 18.418 20 14C20 9.582 16.418 6 12 6C7.922 6 4.563 9.055 4.07 13","key":"5"}),
    createElement('path', {"d":"M12 10L12 14","key":"6"})
  );
});

StopwatchClockwise.displayName = 'StopwatchClockwise';

export default StopwatchClockwise;
export { StopwatchClockwise };
