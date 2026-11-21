'use strict';

const { createElement, forwardRef } = require('react');

const ReceiptFrancWavy = forwardRef(function ReceiptFrancWavy(
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
    createElement('path', {"d":"M11 16L11 6L16 6","key":"1"}),
    createElement('path', {"d":"M16 10L11 10","key":"2"}),
    createElement('path', {"d":"M8 14L14 14","key":"3"})
  );
});

ReceiptFrancWavy.displayName = 'ReceiptFrancWavy';

module.exports = ReceiptFrancWavy;
module.exports.ReceiptFrancWavy = ReceiptFrancWavy;
module.exports.default = ReceiptFrancWavy;
