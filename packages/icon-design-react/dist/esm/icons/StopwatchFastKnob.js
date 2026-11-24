import { createElement, forwardRef } from 'react';

const StopwatchFastKnob = forwardRef(function StopwatchFastKnob(
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
    createElement('path', {"d":"M10 2L14 2","key":"0"}),
    createElement('path', {"d":"M14 10L12 13","key":"1"}),
    createElement('path', {"d":"M20 5L22 7","key":"2"}),
    createElement('path', {"d":"M21 6L18.563 8.434","key":"3"}),
    createElement('path', {"d":"M2 13L8 13","key":"4"}),
    createElement('path', {"d":"M6 21L8 21","key":"5"}),
    createElement('path', {"d":"M4 17L8 17","key":"6"}),
    createElement('path', {"d":"M12 21C16.418 21 20 17.418 20 13C20 8.582 16.418 5 12 5C9.039 5 6.465 6.609 5.078 9","key":"7"})
  );
});

StopwatchFastKnob.displayName = 'StopwatchFastKnob';

export default StopwatchFastKnob;
export { StopwatchFastKnob };
