'use strict';

const { createElement, forwardRef } = require('react');

const ChevronUpRightSmall = forwardRef(function ChevronUpRightSmall(
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
    createElement('path', {"d":"M14 15L14 10L9 10","key":"0"})
  );
});

ChevronUpRightSmall.displayName = 'ChevronUpRightSmall';

module.exports = ChevronUpRightSmall;
module.exports.ChevronUpRightSmall = ChevronUpRightSmall;
module.exports.default = ChevronUpRightSmall;
