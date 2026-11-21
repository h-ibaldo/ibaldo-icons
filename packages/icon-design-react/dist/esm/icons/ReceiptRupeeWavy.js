import { createElement, forwardRef } from 'react';

const ReceiptRupeeWavy = forwardRef(function ReceiptRupeeWavy(
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
    createElement('path', {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z","key":"0"}),
    createElement('path', {"d":"M8 6C10.211 6 12 7.789 12 10C12 12.211 10.211 14 8 14","key":"1"}),
    createElement('path', {"d":"M8 10L16 10","key":"2"}),
    createElement('path', {"d":"M8 6L16 6","key":"3"}),
    createElement('path', {"d":"M8 14L12 16","key":"4"})
  );
});

ReceiptRupeeWavy.displayName = 'ReceiptRupeeWavy';

export default ReceiptRupeeWavy;
export { ReceiptRupeeWavy };
