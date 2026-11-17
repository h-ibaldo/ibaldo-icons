'use strict';

const { createElement, forwardRef } = require('react');

const MinusSquareCompact = forwardRef(function MinusSquareCompact(
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
    createElement('rect', {"x":"4.000000004469257","y":"4.000000003886271","width":"16","height":"15.999999999999091","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"15.000000004469257","y1":"12.000000003885361","x2":"9.000000004469257","y2":"12.000000003885361","key":"1"})
  );
});

MinusSquareCompact.displayName = 'MinusSquareCompact';

module.exports = MinusSquareCompact;
module.exports.MinusSquareCompact = MinusSquareCompact;
module.exports.default = MinusSquareCompact;
