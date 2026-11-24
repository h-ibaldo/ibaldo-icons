'use strict';

const { createElement, forwardRef } = require('react');

const ArrowUpLeftSlim = forwardRef(function ArrowUpLeftSlim(
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
    createElement('path', {"d":"M6 10L6 6L10 6","key":"0"}),
    createElement('path', {"d":"M6 6L18 18","key":"1"})
  );
});

ArrowUpLeftSlim.displayName = 'ArrowUpLeftSlim';

module.exports = ArrowUpLeftSlim;
module.exports.ArrowUpLeftSlim = ArrowUpLeftSlim;
module.exports.default = ArrowUpLeftSlim;
