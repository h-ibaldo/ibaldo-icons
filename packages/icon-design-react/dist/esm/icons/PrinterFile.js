import { createElement, forwardRef } from 'react';

const PrinterFile = forwardRef(function PrinterFile(
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
    createElement('path', {"d":"M17 10L20 10C21.105 10 22 10.895 22 12L22 20C22 21.105 21.105 22 20 22L4 22C2.895 22 2 21.105 2 20L2 12C2 10.895 2.895 10 4 10L7 10","key":"0"}),
    createElement('path', {"d":"M7 13L7 2L14 2L17 5L17 13","key":"1"}),
    createElement('path', {"d":"M7 18L7 22","key":"2"}),
    createElement('path', {"d":"M17 22L17 18","key":"3"}),
    createElement('path', {"d":"M17 13L7 13","key":"4"}),
    createElement('path', {"d":"M14 2L14 5L17 5","key":"5"}),
    createElement('path', {"d":"M18 18L6 18","key":"6"})
  );
});

PrinterFile.displayName = 'PrinterFile';

export default PrinterFile;
export { PrinterFile };
