'use strict';

const { createElement, forwardRef } = require('react');

const MinusCircleLarge = forwardRef(function MinusCircleLarge(
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
    createElement('circle', {"cx":"12","cy":"12","r":"10","key":"0"}),
    createElement('line', {"x1":"7","y1":"12","x2":"17","y2":"12","key":"1"})
  );
});

MinusCircleLarge.displayName = 'MinusCircleLarge';

module.exports = MinusCircleLarge;
module.exports.MinusCircleLarge = MinusCircleLarge;
module.exports.default = MinusCircleLarge;
