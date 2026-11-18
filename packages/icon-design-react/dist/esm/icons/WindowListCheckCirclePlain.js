import { createElement, forwardRef } from 'react';

const WindowListCheckCirclePlain = forwardRef(function WindowListCheckCirclePlain(
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
    createElement('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z","key":"0"}),
    createElement('path', {"d":"M15.5 17L16.5 18L18.5 16","key":"1"}),
    createElement('path', {"d":"M10 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 10","key":"2"}),
    createElement('path', {"d":"M2 7L22 7","key":"3"}),
    createElement('path', {"d":"M9 12L17 12","key":"4"}),
    createElement('path', {"d":"M6 12L6 12","key":"5"}),
    createElement('path', {"d":"M9 16L11 16","key":"6"}),
    createElement('path', {"d":"M6 16L6 16","key":"7"})
  );
});

WindowListCheckCirclePlain.displayName = 'WindowListCheckCirclePlain';

export default WindowListCheckCirclePlain;
export { WindowListCheckCirclePlain };
