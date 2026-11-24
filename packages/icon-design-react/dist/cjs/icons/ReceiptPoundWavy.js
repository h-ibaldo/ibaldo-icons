'use strict';

const { createElement, forwardRef } = require('react');

const ReceiptPoundWavy = forwardRef(function ReceiptPoundWavy(
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
    createElement('path', {"d":"M16 9C16 7.344 14.656 6 13 6C11.344 6 10 7.344 10 9L10 16","key":"1"}),
    createElement('path', {"d":"M8 16L16 16","key":"2"}),
    createElement('path', {"d":"M8 12L13 12","key":"3"})
  );
});

ReceiptPoundWavy.displayName = 'ReceiptPoundWavy';

module.exports = ReceiptPoundWavy;
module.exports.ReceiptPoundWavy = ReceiptPoundWavy;
module.exports.default = ReceiptPoundWavy;
