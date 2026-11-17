'use strict';

const { createElement, forwardRef } = require('react');

const ArrowDownFromBar = forwardRef(function ArrowDownFromBar(
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
    createElement('path', {"d":"M16 17L12 21L8 17","key":"0"}),
    createElement('path', {"d":"M7 3L17 3","key":"1"}),
    createElement('path', {"d":"M12 21L12 3","key":"2"})
  );
});

ArrowDownFromBar.displayName = 'ArrowDownFromBar';

module.exports = ArrowDownFromBar;
module.exports.ArrowDownFromBar = ArrowDownFromBar;
module.exports.default = ArrowDownFromBar;
