'use strict';

const { createElement, forwardRef } = require('react');

const SparklePointed = forwardRef(function SparklePointed(
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
    createElement('path', {"d":"M12 3L10 10L3 12L10 14L12 21L14 14L21 12L14 10Z","key":"0"})
  );
});

SparklePointed.displayName = 'SparklePointed';

module.exports = SparklePointed;
module.exports.SparklePointed = SparklePointed;
module.exports.default = SparklePointed;
