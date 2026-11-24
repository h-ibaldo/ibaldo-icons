'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpRightSlim = forwardRef(function ArrowUpRightSlim(
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
    createElement('path', {"d":"M14 6L18 6L18 10","key":"0"}),
    createElement('path', {"d":"M18 6L6 18","key":"1"})
  );
});

ArrowUpRightSlim.displayName = 'ArrowUpRightSlim';

module.exports = ArrowUpRightSlim;
module.exports.ArrowUpRightSlim = ArrowUpRightSlim;
module.exports.default = ArrowUpRightSlim;
