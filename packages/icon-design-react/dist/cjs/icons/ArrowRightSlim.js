'use strict';

const { createElement, forwardRef } = require('react');

const ArrowRightSlim = forwardRef(function ArrowRightSlim(
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
    createElement('path', {"d":"M17 9L20 12L17 15","key":"0"}),
    createElement('path', {"d":"M4 12L20 12","key":"1"})
  );
});

ArrowRightSlim.displayName = 'ArrowRightSlim';

module.exports = ArrowRightSlim;
module.exports.ArrowRightSlim = ArrowRightSlim;
module.exports.default = ArrowRightSlim;
