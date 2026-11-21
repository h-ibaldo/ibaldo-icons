import { createElement, forwardRef } from 'react';

const ReceiptCentWavy = forwardRef(function ReceiptCentWavy(
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
    createElement('path', {"d":"M12 6L12 16","key":"0"}),
    createElement('path', {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z","key":"1"}),
    createElement('path', {"d":"M15.465 13C14.773 14.195 13.48 15 12 15C9.789 15 8 13.211 8 11C8 8.789 9.789 7 12 7C13.48 7 14.773 7.805 15.465 9","key":"2"})
  );
});

ReceiptCentWavy.displayName = 'ReceiptCentWavy';

export default ReceiptCentWavy;
export { ReceiptCentWavy };
