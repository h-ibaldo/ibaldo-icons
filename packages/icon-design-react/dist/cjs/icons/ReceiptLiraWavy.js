'use strict';

const { createElement, forwardRef } = require('react');

const ReceiptLiraWavy = forwardRef(function ReceiptLiraWavy(
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
    createElement('path', {"d":"M10 6L10 16C13.313 16 16 13.313 16 10","key":"1"}),
    createElement('path', {"d":"M8 9L14 7","key":"2"})
  );
});

ReceiptLiraWavy.displayName = 'ReceiptLiraWavy';

module.exports = ReceiptLiraWavy;
module.exports.ReceiptLiraWavy = ReceiptLiraWavy;
module.exports.default = ReceiptLiraWavy;
