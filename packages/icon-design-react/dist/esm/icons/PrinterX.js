import { createElement, forwardRef } from 'react';

const PrinterX = forwardRef(function PrinterX(
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
    createElement('path', {"d":"M7 18L3 18C2.445 18 2 17.555 2 17L2 9C2 8.449 2.445 8 3 8L21 8C21.555 8 22 8.449 22 9L22 15","key":"0"}),
    createElement('path', {"d":"M15 22L7 22L7 13","key":"1"}),
    createElement('path', {"d":"M17 8L17 2L7 2L7 8","key":"2"}),
    createElement('path', {"d":"M6 13L18 13","key":"3"}),
    createElement('path', {"d":"M18 18L22 22","key":"4"}),
    createElement('path', {"d":"M22 18L18 22","key":"5"})
  );
});

PrinterX.displayName = 'PrinterX';

export default PrinterX;
export { PrinterX };
