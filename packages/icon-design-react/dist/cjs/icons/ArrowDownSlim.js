'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownSlim = forwardRef(function ArrowDownSlim(
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
    createElement('path', {"d":"M15 17L12 20L9 17","key":"0"}),
    createElement('path', {"d":"M12 20L12 4","key":"1"})
  );
});

ArrowDownSlim.displayName = 'ArrowDownSlim';

module.exports = ArrowDownSlim;
module.exports.ArrowDownSlim = ArrowDownSlim;
module.exports.default = ArrowDownSlim;
