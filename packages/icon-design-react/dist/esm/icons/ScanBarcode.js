import { createElement, forwardRef } from 'react';

const ScanBarcode = forwardRef(function ScanBarcode(
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
    createElement('path', {"d":"M6 16L6 8","key":"0"}),
    createElement('path', {"d":"M10 16L10 8","key":"1"}),
    createElement('path', {"d":"M14 16L14 8","key":"2"}),
    createElement('path', {"d":"M18 16L18 8","key":"3"}),
    createElement('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22","key":"4"}),
    createElement('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2","key":"5"}),
    createElement('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7","key":"6"}),
    createElement('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17","key":"7"})
  );
});

ScanBarcode.displayName = 'ScanBarcode';

export default ScanBarcode;
export { ScanBarcode };
