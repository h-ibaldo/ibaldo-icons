import { createElement, forwardRef } from 'react';

const TrayStack = forwardRef(function TrayStack(
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
    createElement('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 12C2 10.895 2.895 10 4 10L20 10C21.105 10 22 10.895 22 12L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement('path', {"d":"M4 10L4 8C4 6.895 4.895 6 6 6L18 6C19.105 6 20 6.895 20 8L20 10","key":"1"}),
    createElement('path', {"d":"M6 6L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 6","key":"2"})
  );
});

TrayStack.displayName = 'TrayStack';

export default TrayStack;
export { TrayStack };
