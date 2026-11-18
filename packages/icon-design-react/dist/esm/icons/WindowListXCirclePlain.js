import { createElement, forwardRef } from 'react';

const WindowListXCirclePlain = forwardRef(function WindowListXCirclePlain(
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
    createElement('path', {"d":"M18 15L15 18","key":"0"}),
    createElement('path', {"d":"M15 15L18 18","key":"1"}),
    createElement('path', {"d":"M11 16.5C11 13.461 13.461 11 16.5 11C19.539 11 22 13.461 22 16.5C22 19.539 19.539 22 16.5 22C13.461 22 11 19.539 11 16.5Z","key":"2"}),
    createElement('path', {"d":"M10 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 10","key":"3"}),
    createElement('path', {"d":"M2 7L22 7","key":"4"}),
    createElement('path', {"d":"M9 12L13 12","key":"5"}),
    createElement('path', {"d":"M6 12L6 12","key":"6"}),
    createElement('path', {"d":"M9 16L11 16","key":"7"}),
    createElement('path', {"d":"M6 16L6 16","key":"8"})
  );
});

WindowListXCirclePlain.displayName = 'WindowListXCirclePlain';

export default WindowListXCirclePlain;
export { WindowListXCirclePlain };
