import { createElement, forwardRef } from 'react';

const ClockFastAngled = forwardRef(function ClockFastAngled(
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
    createElement('path', {"d":"M2 14L8 14","key":"0"}),
    createElement('path', {"d":"M6 22L8 22","key":"1"}),
    createElement('path', {"d":"M4 18L8 18","key":"2"}),
    createElement('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C7.16 2 3.129 5.438 2.199 10","key":"3"}),
    createElement('path', {"d":"M12 7L12 12L17 14","key":"4"})
  );
});

ClockFastAngled.displayName = 'ClockFastAngled';

export default ClockFastAngled;
export { ClockFastAngled };
