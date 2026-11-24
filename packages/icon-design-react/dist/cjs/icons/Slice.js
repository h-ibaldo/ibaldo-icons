'use strict';

const { createElement, forwardRef } = require('react');

const Slice = forwardRef(function Slice(
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
    createElement('path', {"d":"M22 3L10 15L5 10L13 2","key":"0"}),
    createElement('path', {"d":"M9.5 14.5L2 22L2 14L5.5 10.5","key":"1"}),
    createElement('path', {"d":"M10 10L18 2","key":"2"})
  );
});

Slice.displayName = 'Slice';

module.exports = Slice;
module.exports.Slice = Slice;
module.exports.default = Slice;
