'use strict';

const { createElement, forwardRef } = require('react');

const SquareSplitBottom = forwardRef(function SquareSplitBottom(
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
    createElement('path', {"d":"M3 15L21 15","key":"0"}),
    createElement('path', {"d":"M3 19.199L3 4.801C3 3.805 3.805 3 4.801 3L19.199 3C20.195 3 21 3.805 21 4.801L21 19.199C21 20.195 20.195 21 19.199 21L4.801 21C3.805 21 3 20.195 3 19.199Z","key":"1"})
  );
});

SquareSplitBottom.displayName = 'SquareSplitBottom';

module.exports = SquareSplitBottom;
module.exports.SquareSplitBottom = SquareSplitBottom;
module.exports.default = SquareSplitBottom;
