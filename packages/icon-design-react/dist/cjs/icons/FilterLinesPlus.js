'use strict';

const { createElement, forwardRef } = require('react');

const FilterLinesPlus = forwardRef(function FilterLinesPlus(
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
    createElement('path', {"d":"M2 5L12 5","key":"0"}),
    createElement('path', {"d":"M16 5L22 5","key":"1"}),
    createElement('path', {"d":"M19 2L19 8","key":"2"}),
    createElement('path', {"d":"M6 13L18 13","key":"3"}),
    createElement('path', {"d":"M10 20L14 20","key":"4"})
  );
});

FilterLinesPlus.displayName = 'FilterLinesPlus';

module.exports = FilterLinesPlus;
module.exports.FilterLinesPlus = FilterLinesPlus;
module.exports.default = FilterLinesPlus;
