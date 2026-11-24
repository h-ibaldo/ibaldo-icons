import { createElement, forwardRef } from 'react';

const ClockDottedTop = forwardRef(function ClockDottedTop(
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
    createElement('path', {"d":"M12 7L12 12L17 14","key":"0"}),
    createElement('path', {"d":"M22 2L22 2","key":"1"}),
    createElement('path', {"d":"M22 6L22 6","key":"2"}),
    createElement('path', {"d":"M22 10L22 10","key":"3"}),
    createElement('path', {"d":"M17 3.359C15.527 2.5 13.824 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C16.477 22 20.262 19.055 21.535 15","key":"4"})
  );
});

ClockDottedTop.displayName = 'ClockDottedTop';

export default ClockDottedTop;
export { ClockDottedTop };
