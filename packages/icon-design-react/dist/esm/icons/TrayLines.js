import { createElement, forwardRef } from 'react';

const TrayLines = forwardRef(function TrayLines(
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
    createElement('path', {"d":"M3 13L3 19C3 20.105 3.895 21 5 21L19 21C20.105 21 21 20.105 21 19L21 13","key":"0"}),
    createElement('path', {"d":"M7 16L17 16","key":"1"}),
    createElement('path', {"d":"M7 12L17 12","key":"2"}),
    createElement('path', {"d":"M7 8L17 8","key":"3"}),
    createElement('path', {"d":"M7 4L17 4","key":"4"})
  );
});

TrayLines.displayName = 'TrayLines';

export default TrayLines;
export { TrayLines };
