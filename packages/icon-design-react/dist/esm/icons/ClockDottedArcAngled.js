import { createElement, forwardRef } from 'react';

const ClockDottedArcAngled = forwardRef(function ClockDottedArcAngled(
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
    createElement('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 13.852 2.512 15.578 3.391 17.066","strokeDasharray":"0 3.5","key":"0"}),
    createElement('path', {"d":"M3.348 17C5.078 19.984 8.301 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2","key":"1"}),
    createElement('path', {"d":"M12 6L12 12L8 14","key":"2"})
  );
});

ClockDottedArcAngled.displayName = 'ClockDottedArcAngled';

export default ClockDottedArcAngled;
export { ClockDottedArcAngled };
