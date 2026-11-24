'use strict';

const { createElement, forwardRef } = require('react');

const ReceiptList = forwardRef(function ReceiptList(
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
    createElement('path', {"d":"M20 22L20 2L4 2L4 22L8 20L12 22L16 20Z","key":"0"}),
    createElement('path', {"d":"M8 7L12 7","key":"1"}),
    createElement('path', {"d":"M15 7L16 7","key":"2"}),
    createElement('path', {"d":"M8 11L12 11","key":"3"}),
    createElement('path', {"d":"M15 11L16 11","key":"4"}),
    createElement('path', {"d":"M8 15L12 15","key":"5"}),
    createElement('path', {"d":"M15 15L16 15","key":"6"})
  );
});

ReceiptList.displayName = 'ReceiptList';

module.exports = ReceiptList;
module.exports.ReceiptList = ReceiptList;
module.exports.default = ReceiptList;
