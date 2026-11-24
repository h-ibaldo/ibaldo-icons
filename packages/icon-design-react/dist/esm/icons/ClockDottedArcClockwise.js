import { createElement, forwardRef } from 'react';

const ClockDottedArcClockwise = forwardRef(function ClockDottedArcClockwise(
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
    createElement('path', {"d":"M4 22L4 18L8 18","key":"0"}),
    createElement('path', {"d":"M4.016 18C5.84 20.426 8.73 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"1"}),
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.426 2.309 14.773 2.848 16","strokeDasharray":"0 3.5","key":"2"}),
    createElement('path', {"d":"M12 7L12 12L17 14","key":"3"})
  );
});

ClockDottedArcClockwise.displayName = 'ClockDottedArcClockwise';

export default ClockDottedArcClockwise;
export { ClockDottedArcClockwise };
