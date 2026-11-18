import { createElement, forwardRef } from 'react';

const WindowLock = forwardRef(function WindowLock(
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
    createElement('path', {"d":"M22 22L14 22L14 17L22 17Z","key":"0"}),
    createElement('path', {"d":"M15 17L15 15C15 13.344 16.344 12 18 12C19.656 12 21 13.344 21 15L21 17","key":"1"}),
    createElement('path', {"d":"M10 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 9","key":"2"}),
    createElement('path', {"d":"M2 8L22 8","key":"3"}),
    createElement('path', {"d":"M5 5L5 5","key":"4"}),
    createElement('path', {"d":"M8 5L8 5","key":"5"}),
    createElement('path', {"d":"M11 5L11 5","key":"6"})
  );
});

WindowLock.displayName = 'WindowLock';

export default WindowLock;
export { WindowLock };
