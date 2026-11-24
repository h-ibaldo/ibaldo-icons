import { createElement, forwardRef } from 'react';

const ScanWindow = forwardRef(function ScanWindow(
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
    createElement('path', {"d":"M16 18L8 18C6.895 18 6 17.105 6 16L6 8C6 6.895 6.895 6 8 6L16 6C17.105 6 18 6.895 18 8L18 16C18 17.105 17.105 18 16 18Z","key":"0"}),
    createElement('path', {"d":"M6 10L18 10","key":"1"}),
    createElement('path', {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2","key":"2"}),
    createElement('path', {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2","key":"3"}),
    createElement('path', {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22","key":"4"}),
    createElement('path', {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22","key":"5"})
  );
});

ScanWindow.displayName = 'ScanWindow';

export default ScanWindow;
export { ScanWindow };
