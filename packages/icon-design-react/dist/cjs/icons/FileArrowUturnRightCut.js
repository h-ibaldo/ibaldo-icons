'use strict';

const { createElement, forwardRef } = require('react');

const FileArrowUturnRightCut = forwardRef(function FileArrowUturnRightCut(
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
    createElement('path', {"d":"M19 18L21 20L19 22","key":"0"}),
    createElement('path', {"d":"M20 20L15 20C13.343 20 12 18.657 12 17L12 17C12 15.343 13.343 14 15 14L21 14","key":"1"}),
    createElement('path', {"d":"M20 10L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L10 22","key":"2"})
  );
});

FileArrowUturnRightCut.displayName = 'FileArrowUturnRightCut';

module.exports = FileArrowUturnRightCut;
module.exports.FileArrowUturnRightCut = FileArrowUturnRightCut;
module.exports.default = FileArrowUturnRightCut;
