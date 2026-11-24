'use strict';

const { createElement, forwardRef } = require('react');

const FileChartAxisCut = forwardRef(function FileChartAxisCut(
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
    createElement('path', {"d":"M20 10L20 7.828C20 7.297 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.703 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L7 22","key":"0"}),
    createElement('path', {"d":"M10 12L10 22L20 22","key":"1"}),
    createElement('path', {"d":"M13 19L15 15L17 18L20 13","key":"2"})
  );
});

FileChartAxisCut.displayName = 'FileChartAxisCut';

module.exports = FileChartAxisCut;
module.exports.FileChartAxisCut = FileChartAxisCut;
module.exports.default = FileChartAxisCut;
