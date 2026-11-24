import { createElement, forwardRef } from 'react';

const ReceiptDollar = forwardRef(function ReceiptDollar(
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
    createElement('path', {"d":"M16 22L5 22","key":"0"}),
    createElement('path', {"d":"M8 19L8 2L12 4L15 2L18 4L22 2L22 6","key":"1"}),
    createElement('path', {"d":"M16 8L12 8","key":"2"}),
    createElement('path', {"d":"M15 12L12 12","key":"3"}),
    createElement('path', {"d":"M15 16L12 16","key":"4"}),
    createElement('path', {"d":"M8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19","key":"5"}),
    createElement('path', {"d":"M8 14L2 14L2 19","key":"6"}),
    createElement('path', {"d":"M21.879 11C21.051 10.172 19.707 10.172 18.879 11C18.051 11.828 18.051 13.172 18.879 14L21.379 16.5C22.207 17.328 22.207 18.672 21.379 19.5C20.551 20.328 19.207 20.328 18.379 19.5","key":"7"}),
    createElement('path', {"d":"M20.258 9L20.258 10.379","key":"8"}),
    createElement('path', {"d":"M20.258 20.121L20.258 22","key":"9"})
  );
});

ReceiptDollar.displayName = 'ReceiptDollar';

export default ReceiptDollar;
export { ReceiptDollar };
