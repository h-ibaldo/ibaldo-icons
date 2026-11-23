'use strict';

const { createElement, forwardRef } = require('react');

const TextQ = forwardRef(function TextQ(
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
    createElement('path', {"d":"M12 2C7 2 4 6 4 12C4 18 7 22 12 22","key":"0"}),
    createElement('path', {"d":"M12 22C17 22 20 18 20 12C20 6 17 2 12 2","key":"1"}),
    createElement('path', {"d":"M20 22L14 16","key":"2"})
  );
});

TextQ.displayName = 'TextQ';

module.exports = TextQ;
module.exports.TextQ = TextQ;
module.exports.default = TextQ;
