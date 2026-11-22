'use strict';

const { createElement, forwardRef } = require('react');

const FilterLinesSplit = forwardRef(function FilterLinesSplit(
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
    createElement('path', {"d":"M2 4L12 4","key":"0"}),
    createElement('path', {"d":"M16 4L22 4","key":"1"}),
    createElement('path', {"d":"M6 12L18 12","key":"2"}),
    createElement('path', {"d":"M10 20L14 20","key":"3"})
  );
});

FilterLinesSplit.displayName = 'FilterLinesSplit';

module.exports = FilterLinesSplit;
module.exports.FilterLinesSplit = FilterLinesSplit;
module.exports.default = FilterLinesSplit;
